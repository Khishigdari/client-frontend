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
import { ChevronLeft } from "lucide-react";

const formSchema = z.object({
  email: z.email(),
});

export const SignUpForm = ({ email, setEmail, handleNextStep }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setEmail(values.email);
    handleNextStep();
  }

  return (
    // <div className="border rounded-xl max-w-2xl">
    <div className="w-full h-full flex justify-between">
      <div className="flex items-center ml-25">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="gap-0">
                  <Button variant={"outline"} className="w-9 h-9 mb-6">
                    <ChevronLeft />
                  </Button>
                  <FormLabel className="text-6 leading-8 font-[600] mb-1 ">
                    Create your account
                  </FormLabel>
                  <FormDescription className="mb-6">
                    Sign up to explore your favorite dishes.
                  </FormDescription>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      {...field}
                      className="w-104"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-104">
              Let's Go
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-214 h-screen">
        <img src={"./delivery.svg"} className="rounded-2xl w-214" />
      </div>
    </div>
  );
};

export default SignUpForm;
