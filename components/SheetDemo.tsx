import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <HiOutlineMenuAlt3 className="text-white size-10 " />
      </SheetTrigger>
      <SheetContent className="bg-primary-1">
        <div className="text-white uppercase cursor-pointer py-3">
          <Link href="/">Home</Link>
        </div>
        <div className="text-white uppercase cursor-pointer py-3">
          <Link href="/about">About</Link>
        </div>
        <div className="text-white uppercase cursor-pointer py-3">
          <Link href="/service">Service</Link>
        </div>
        <div className="text-white uppercase cursor-pointer py-3">
          <Link href="/project">Project</Link>
        </div>
        <div className="text-white uppercase cursor-pointer py-3">
          <Link href="/blog">Blog</Link>
        </div>
        <div className="text-white uppercase cursor-pointer py-3">
          <Link href="/contacts">Contacts</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
