import Intro from "./intro";
import Photo from "./photo";

export default function Cover() {
  return (
    <section className="bg-linear-to-r from-60% to-blue-500 flex justify-between mt-15">
      <Intro />
      <Photo />
    </section>
  );
}
