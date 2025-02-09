import AddUser from "@/components/form/add-user";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const DialogBtn = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg">
                    Agregar nuevo cliente
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>Agregá a tus clientes</DialogTitle>
                    <DialogDescription>
                        Acá es donde vas a ingresar los datos necesarios para crear clientes.
                    </DialogDescription>
                </DialogHeader>
                <AddUser />
            </DialogContent>
        </Dialog>
    )
}
