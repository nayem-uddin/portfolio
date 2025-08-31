import Title from "../title";
import BackEnd from "./backend";
import DBMS from "./dbms";
import FrontEnd from "./frontend";
import LanguagesAndScripts from "./langAndScripts";

export default function Skills() {
  return (
    <section id="skills" className="mt-8">
      <Title>Skills</Title>
      <LanguagesAndScripts />
      <FrontEnd />
      <BackEnd />
      <DBMS />
    </section>
  );
}
