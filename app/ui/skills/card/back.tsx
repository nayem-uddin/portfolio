import clsx from "clsx";
import FaceContainer from "./faceContainer";

export default function Back({ level }: { level: number }) {
  return (
    <FaceContainer className="rotate-y-180 content-center-safe text-center">
      <span
        className={clsx("text-6xl font-semibold", {
          "text-red-500": level < 50,
          "text-yellow-500": level >= 50 && level < 70,
          "text-green-700": level >= 70,
        })}
      >
        {level}%
      </span>
    </FaceContainer>
  );
}
