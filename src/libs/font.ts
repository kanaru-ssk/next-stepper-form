import { Noto_Sans_JP } from "next/font/google";

export const notoSansJp = Noto_Sans_JP({
  weight: ["100", "200", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});
