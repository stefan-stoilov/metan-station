import { DesktopNavMenu } from "./desktop-nav-menu";
import { MobileNavMenu } from "./mobile-nav-menu";

const links = [
  { label: "About Us", href: "#" },
  { label: "Promos", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Deliveries", href: "#" },
];

export function Navbar() {
  return (
    <nav className="fixed right-3 top-3 z-50 w-fit rounded-lg bg-background sm:right-5 sm:top-5 sm:p-4">
      <DesktopNavMenu links={links} />
      <MobileNavMenu />
    </nav>
  );
}
