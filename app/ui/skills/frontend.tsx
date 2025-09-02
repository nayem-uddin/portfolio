import { frontEnd } from "@/lib/constants/skills";
import Row from "./row";
import SkillCard from "./skillCard";

export default function FrontEnd() {
  return (
    <Row>
      {frontEnd.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </Row>
  );
}
