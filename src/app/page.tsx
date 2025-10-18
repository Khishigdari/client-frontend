"use client";

import SignUpForm from "@/components/auth/SignUpForm";
import { SignUpPassword } from "@/components/auth/SignUpPassword";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const StepComponents = [SignUpForm, SignUpPassword][step];

  const [email, setEmail] = useState("");

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
      />
    </main>
  );
}
