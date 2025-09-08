import {
  Bad_Script,
  IBM_Plex_Sans,
  Inter,
  Libre_Baskerville,
  Lora,
  Noto_Serif,
  Open_Sans,
  Poppins,
  Roboto,
  Roboto_Slab,
} from "next/font/google";
export const libre_busker = Libre_Baskerville({
  weight: ["700"],
  subsets: ["latin"],
});
export const roboto = Roboto({
  weight: ["200"],
  subsets: ["latin"],
});

export const badScript = Bad_Script({
  weight: ["400"],
  subsets: ["latin"],
});
export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["500"],
});
export const notoSerif = Noto_Serif({
  weight: ["400"],
  subsets: ["latin"],
});
export const lora = Lora({
  weight: ["600", "700"],
  subsets: ["latin"],
});
export const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
});
export const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300"],
  subsets: ["latin"],
});

export const openSans = Open_Sans({
  weight: ["600"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
});
