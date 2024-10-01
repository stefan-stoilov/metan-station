import { env } from "@/env";
import {
  storyblokInit,
  apiPlugin,
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react/rsc";
import { getStory } from "@/lib/storyblok";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";

import { Provider } from "@/components/providers";
import { Navbar } from "@/components/navigation/navbar/navbar";
import { NavigationMenuDemo } from "@/components/navigation/navbar/desktop-nav-new";

export const metadata = {
  title: "NextJS Storyblok",
  description: "NextJS App Router with Storyblok CMS",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

storyblokInit({
  accessToken: env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerData] = await Promise.all([getStory(`global/header`)]);

  const headerContent = headerData.data.story.content as unknown as SbBlokData;

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Provider>
          <header
            className="flex justify-center"
            {...storyblokEditable(headerContent)}
          >
            {/* <Navbar /> */}
            <NavigationMenuDemo />
          </header>

          {children}

          {/* <footer></footer> */}
        </Provider>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
