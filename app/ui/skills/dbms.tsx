import { dbms } from "@/lib/constants";
import Row from "./row";
import SkillCard from "./skillCard";

export default function DBMS() {
  return (
    <Row>
      {dbms.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </Row>
  );
}
