import { badScript, libre_busker, roboto } from "@/lib/fonts";
import CVDownload from "./cvDownload";

export default function Intro() {
  return (
    <main
      className="grid place-content-center gap-y-2 md:gap-y-4 lg:gap-y-6"
      style={{ marginLeft: "5%" }}
    >
      <div>
        <p
          className={`text-sm sm:text-lg md:text-xl lg:text-2xl ${roboto.className}`}
        >
          Hello, I am
        </p>
      </div>
      <div>
        <p
          className={`text-2xl sm:text-4xl md:text-5xl lg:text-7xl ${libre_busker.className}`}
        >
          Nayem Uddin Biswas
        </p>
      </div>
      <div>
        <p className={`md:text-lg lg:text-2xl ${badScript.className}`}>
          A committed and passionate web developer
        </p>
      </div>
      <div className="flex justify-center" style={{ marginTop: 10 }}>
        <CVDownload />
      </div>
    </main>
  );
}
