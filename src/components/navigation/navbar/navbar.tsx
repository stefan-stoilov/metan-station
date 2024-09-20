import Link from "next/link";
import { DesktopNavMenu } from "./desktop-nav-menu";
import { MobileNavMenu } from "./mobile-nav-menu";

const links = [
  { label: "About Us", href: "#" },
  { label: "Promos", href: "#" },
  { label: "Contact", href: "/contact" },
  { label: "Deliveries", href: "#" },
];

export function Navbar() {
  return (
    <nav>
      <Link href={"/"} className="fixed left-5 top-5 z-40 bg-white px-5 py-2">
        {"Home (Logo)"}
      </Link>
      <div className="fixed right-3 top-3 z-50 w-fit rounded-lg bg-background sm:right-5 sm:top-5 sm:p-4">
        <DesktopNavMenu links={links} />
        <MobileNavMenu />
      </div>
    </nav>
  );
}
