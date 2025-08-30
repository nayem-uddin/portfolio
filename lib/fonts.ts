import {
  Bad_Script,
  Libre_Baskerville,
  Noto_Serif,
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
