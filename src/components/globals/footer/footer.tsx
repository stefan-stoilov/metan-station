import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import React from "react";

export function Footer() {
  return (
    <footer className="dark:border-dark-border border-t border-border py-16">
      <div className="container mx-auto grid grid-cols-2 grid-rows-[auto_auto_auto] place-items-start items-center gap-y-7 px-6 sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-2 sm:gap-x-3 sm:gap-y-16">
        {/* <Link aria-label="Homepage" href="/">
      <DarkLightImageAutoscale priority {...settings.logo} />
    </Link>
    <nav className="col-start-1 row-start-2 flex flex-col gap-x-2 gap-y-3 self-center sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:flex-row sm:items-center sm:place-self-center md:gap-x-4 lg:gap-x-8">
      {footer.navbar.items.map(({ _title, url }) => (
        <ButtonLink
          key={_title}
          unstyled
          className="px-2 font-light tracking-tight text-text-tertiary hover:text-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary"
          href={url ?? "#"}
          target={isExternalLink(url) ? "_blank" : "_self"}
        >
          {_title}
        </ButtonLink>
      ))}
    </nav> */}
        <div className="col-start-2 row-start-1 flex items-center gap-3 self-center justify-self-end sm:col-span-1 sm:col-start-3 sm:row-start-1">
          <ThemeSwitcher />
        </div>

        <p className="text-text-tertiary dark:text-dark-text-tertiary col-span-2 text-pretty text-sm sm:col-span-1 ">
          {"ARG Petroleum"}
        </p>

        {/* <ul className="col-span-2 col-start-1 row-start-3 flex w-full items-center gap-x-3.5 gap-y-4 sm:col-span-1 sm:col-start-3 sm:row-start-2 sm:w-auto sm:flex-wrap sm:justify-self-end">
          
        </ul> */}
      </div>
    </footer>
  );
}

export default Footer;
