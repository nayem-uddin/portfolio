import { langNScripts } from "@/lib/constants";
import Row from "./row";
import SkillCard from "./skillCard";

export default function LanguagesAndScripts() {
  return (
    <Row>
      {langNScripts.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </Row>
  );
}
