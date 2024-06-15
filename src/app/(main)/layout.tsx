import { env } from "@/env";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { Provider } from "@/components/providers";
import { Navbar } from "@/components/navigation/navbar/navbar";

export const metadata = {
  title: "NextJS Storyblok",
  description: "NextJS App Router with Storyblok CMS",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

storyblokInit({
  accessToken: env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Provider>
          <header>
            <Navbar />
          </header>

          {children}

          <footer></footer>
        </Provider>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
