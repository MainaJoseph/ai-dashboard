"use client"

import * as z from "zod";
import { Heading } from "@/components/heading";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


import { MessageSquare } from "lucide-react";

import { formSchema } from "./constants";
import { Form } from "@/components/ui/form";




const ConversationPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
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

                        </Form>
                    </div>

                </div>
            </div>
    );
}

export default ConversationPage;