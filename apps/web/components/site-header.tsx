import Link from "next/link";
import ImageIcon from "@/components/ImageIcon";

export default function SiteHeader() {
  return <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center p-4">
    <Link className="flex items-center justify-center" href="#">

      <span className="sr-only">Madverse</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">

    </nav>
  </header>
}
