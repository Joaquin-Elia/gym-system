"use client"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import InputComponent from "./custom-input"
import { SubmitHandler, useForm } from "react-hook-form";
import { registerSchema } from "@/lib/zod";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

type AddUserFormValues = z.infer<typeof registerSchema>;

const AddUser = () => {
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "",
            instagram: "",
            observations: "",
            // status: ""
        }
    });

    const onSubmit: SubmitHandler<AddUserFormValues> = async (values) => {
        console.log(values);
        // setError(null)
        // startTransition(async () => {
        //     const response = await sendMessageAction(values, type, empresaId, productId);

        //     if (!response)
        //         setError("Ocurrio un error en el envío");

        //     else
        //         setMessageSended(!messageSended);
        // });
    }

    const { handleSubmit, control } = form

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-2xl flex flex-col md:flex-row flex-wrap items-center justify-between gap-4 pt-2">
                <InputComponent
                    control={control}
                    className="w-full md:w-[48%]"
                    formLabel="Nombre *"
                    formName="firstName"
                    formType="text"
                    placeHolder="Ingresar nombre del cliente"
                />
                <InputComponent
                    control={control}
                    className="w-full md:w-[48%]"
                    formLabel="Usuario o link de instagram"
                    formName="instagram"
                    formType="text"
                    placeHolder="Ingresar instagram del cliente"
                />
                <InputComponent
                    control={control}
                    formLabel="Observaciones"
                    formName="Observations"
                    formType="text"
                    placeHolder="Ingresar observaciones del cliente"
                />
                {/* <TextareaComponent
                    control={control}
                    formLabel="Mensaje *"
                    formName="description"
                    placeHolder="Escribe tu mensaje aquí"
                /> */}
                {/* {error && <FormMessage className='text-center pt-2 text-base w-full'>{error}</FormMessage>}
                {messageSended && <FormMessage className='text-center pt-2 text-base w-full text-green-500'>Mensaje enviado</FormMessage>}
                */}
                <Button
                    type="submit"
                    className="px-7 w-32 py-5"
                // disabled={isPending || messageSended === true}
                >
                    Agregar cliente
                </Button>
            </form>
        </Form>
    )
}

export default AddUser