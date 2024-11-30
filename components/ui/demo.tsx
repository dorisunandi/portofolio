import { Button } from "@/components/ui/button"


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Nav from "../Nav"
import MobileNav from "../MobileNav"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center place-items-start gap-5 capitalize">
    <MobileNav />
      
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
           
           
          </SheetDescription>
        </SheetHeader>
       
        <SheetFooter>
          <SheetClose asChild>
       
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
