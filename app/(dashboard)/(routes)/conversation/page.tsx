"use client"

import * as z from "zod";
import { Heading } from "@/components/heading";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";


import { MessageSquare } from "lucide-react";

import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";





const ConversationPage = () => {
    const router =useRouter();

    const [messages, setMessages] = useState([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try{

        } catch(error:any) {
            console.log(error)
        } finally {
            router.refresh();
        }
    }


    return (
            <div>
                <Heading
                title="conversation"
                description="Get to know of all your burning questions and experience the revolution of AI"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
                />
                <div className="px-4 lg:px-8">
                    <div>
                    <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading} 
                        placeholder="How do I calculate the radius of a circle?" 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full hover:bg-purple-700" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
                    </div>
                    <div className="space-y-4 mt-4">
                        Message Content
                    </div>
                </div>
            </div>
    );
}

export default ConversationPage;