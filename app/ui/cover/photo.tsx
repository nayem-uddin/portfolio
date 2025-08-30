import Image from "next/image";
import photo from "@/public/photo-of-the-author.jpeg";
export default function Photo() {
  return (
    <aside className="bg-white rounded-l-full overflow-hidden">
      <Image
        src={photo}
        alt="photo of the author"
        height={250}
        width={250}
        className="md:hidden size-full"
      />
      <Image
        src={photo}
        alt="photo of the author"
        height={500}
        width={450}
        className="hidden md:block"
      />
    </aside>
  );
}
