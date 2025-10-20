// "use client";

// import SignUpForm from "@/components/auth/SignUpForm";
// import { SignUpPassword } from "@/components/auth/SignUpPassword";
// import { useState } from "react";
// const SignUpPage = () => {
//   const [step, setStep] = useState(0);
//   const StepComponents = [SignUpForm, SignUpPassword][step];

//   const [email, setEmail] = useState("");

//   const handleNextStep = () => {
//     setStep((prev) => prev + 1);
//   };

//   const handlePrevStep = () => {
//     setStep((prev) => prev - 1);
//   };

//   return (
//     <main className="">
//       <StepComponents
//         email={email}
//         setEmail={setEmail}
//         handleNextStep={handleNextStep}
//         handlePrevStep={handlePrevStep}
//       />
//     </main>
//   );
// };

// export default SignUpPage;

"use client";
import SignUpForm from "@/components/auth/SignUpForm";
import { SignUpPassword } from "@/components/auth/SignUpPassword";

import { SetStateAction, useState } from "react";

const Page = () => {
  const [step, setStep] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const StepComponents = [SignUpForm, SignUpPassword][step];

  const onCreateUser = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    }
    const result = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log("User created:", result);
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };
  return (
    <main className="">
      <StepComponents
        email={email}
        setEmail={setEmail}
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setEmail(e.target.value)
        }
        onCreateUser={onCreateUser}
      />
    </main>
  );
  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen py-2">
  //     {step == 1 && (
  //       <div className="w-60">
  //         <p>Email</p>
  //         <Input
  //           type="email"
  //           placeholder="Email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //         <Button variant="outline" onClick={() => setStep(2)}>
  //           Next
  //         </Button>
  //       </div>
  //     )}
  //     {step == 2 && (
  //       <div className="w-60">
  //         <p>Password</p>
  //         <Input
  //           type="password"
  //           placeholder="Password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //         <p>Confirm Password</p>
  //         <Input
  //           type="password"
  //           placeholder="ConfirmPassword"
  //           value={confirmPassword}
  //           onChange={(e) => setConfirmPassword(e.target.value)}
  //         />
  //         {error && <p className="text-red-500">{error}</p>}
  //         <Button variant="outline" onClick={onCreateUser}>
  //           Lets Go
  //         </Button>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Page;
