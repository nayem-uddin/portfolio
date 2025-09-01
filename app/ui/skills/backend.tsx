import { backend } from "@/lib/constants";
import Row from "./row";
import SkillCard from "./skillCard";

export default function BackEnd() {
  return (
    <Row>
      {backend.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </Row>
  );
}
