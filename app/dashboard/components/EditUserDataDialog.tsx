import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Field, FieldGroup, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function EditUserDataDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='mt-3 bg-green-400 cursor-pointer'>Уреди профил</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Уреди го твојот профил</DialogTitle>
                </DialogHeader>
                <form className='mt-3' action="">
                    <FieldGroup>
                        <Field>
                            <FieldLabel>Име и презиме</FieldLabel>
                            <Input type='text' />
                        </Field>
                        <Field>
                            <FieldLabel>Е-пошта</FieldLabel>
                            <Input type='email' />
                        </Field>
                        <Field>
                            <FieldLabel>Телефон</FieldLabel>
                            <Input type='tel' />
                        </Field>
                        <Field>
                            <FieldLabel>Стаутс</FieldLabel>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Промени статус" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="active">Активен</SelectItem>
                                        <SelectItem value="paused">Паузиран</SelectItem>
                                        <SelectItem value="vacation">На одмор</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>
                    </FieldGroup>
                </form>
            </DialogContent>
        </Dialog>
    );
}