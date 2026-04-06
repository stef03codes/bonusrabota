import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FileInputButton() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
                htmlFor="picture"
                className={cn(
                    buttonVariants(),
                    "bg-green-400",
                    "text-white",
                    "cursor-pointer"
                )}
            >
                Објави фотографија
            </Label>
            <Input id="picture" type="file" className="hidden" />
        </div>
    )
}