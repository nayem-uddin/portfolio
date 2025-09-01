import { Skill } from "@/lib/definitions";
import Front from "./card/front";
import Back from "./card/back";

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="mt-2 h-45 md:h-50 w-35 md:w-45 relative">
      <div className="absolute size-full hover:rotate-y-180 transform-3d duration-600">
        <Front {...skill} />
        <Back {...skill} />
      </div>
    </div>
  );
}
