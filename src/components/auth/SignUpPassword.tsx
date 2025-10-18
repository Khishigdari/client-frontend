"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  password: z.string().min(6, "Must be above 6 characters").max(10),
  confirmPassword: z.string().min(6).max(10),
});

export const SignUpPassword = ({ handlePrevStep }: any) => {
  const [isPassword, setIsPassword] = useState("password");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const togglePassword = () => {
    setIsPassword((prev) => {
      if (prev === "password") {
        return " text";
      } else {
        return "password";
      }
    });
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function goToPrevStep() {
    handlePrevStep();
  }

  return (
    <div className="w-full h-screen flex justify-between p-5">
      <div className="flex items-center ml-25">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="gap-0">
                  <Button
                    variant={"outline"}
                    className="w-9 h-9 mb-6"
                    onClick={() => goToPrevStep()}
                  >
                    <ChevronLeft />
                  </Button>
                  <FormLabel className="text-6 leading-8 font-[600] mb-1 ">
                    Create a strong password
                  </FormLabel>
                  <FormDescription className="mb-6">
                    Create a strong password with letters, numbers.
                  </FormDescription>
                  <FormControl>
                    <div>
                      <Input
                        placeholder="Password"
                        {...field}
                        type={isPassword}
                        className="w-104"
                      />
                      {isPassword === "password" ? (
                        <Eye onClick={togglePassword} />
                      ) : (
                        <EyeClosed onClick={togglePassword} />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div>
                      <Input
                        placeholder="Confirm"
                        {...field}
                        type={isPassword}
                      />
                      {isPassword === "password" ? (
                        <Eye onClick={togglePassword} />
                      ) : (
                        <EyeClosed onClick={togglePassword} />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-104">
              Let's Go
            </Button>
            <div className="flex gap-3 justify-center">
              <p className="text-muted-foreground text-4 leading-6 font-[400]">
                Already have an account?
              </p>
              <a href="" className="text-[#2563EB] text-4 leading-6 font-[400]">
                Log in
              </a>
            </div>
          </form>
        </Form>
      </div>
      <div className="w-214 h-screen">
        <img
          src={"./delivery.svg"}
          className="rounded-2xl w-214 h-226 object-cover"
        />
      </div>
    </div>
  );
};
