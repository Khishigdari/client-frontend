// "use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

// import SignUpForm from "@/components/auth/SignUpForm";
// import { SignUpPassword } from "@/components/auth/SignUpPassword";
// import { useState } from "react";

// export default function Home() {
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
// }

const Home = () => {
  return (
    <div>
      <header className="bg-primary max-w-480 flex justify-between items-center py-3 px-22">
        <div className="my-13">
          <img src={"./clientLogo.svg"} />
        </div>
        <div className="flex gap-[13px]">
          <div className="flex gap-1">
            <Button className="bg-background py-2 px-3 rounded-full">
              <MapPin className="text-red-500 h-5 w-5" />
              <p className="text-3 leading-4 text-red-500">
                Delivery address:{" "}
              </p>
              <p className="text-3 leading-4 text-muted-foreground">
                {" "}
                Add location
              </p>
              <ChevronRight className="text-primary hover:text-foreground" />
            </Button>
          </div>

          <Button className="rounded-full bg-secondary py-4 px-4">
            <ShoppingCart
              width={16}
              height={16}
              className="text-secondary-foreground"
            />
          </Button>
          <Link href={"./signUp"}>
            <Button className="rounded-full bg-red-500 py-4 px-4">
              <User width={16} height={16} />
            </Button>
          </Link>
        </div>
      </header>
      <div className="">
        <img src={"./BG.svg"} className="w-480 h-142.5 object-cover" />
      </div>
    </div>
  );
};

export default Home;
