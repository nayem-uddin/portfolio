import Image from "next/image";

export default function Photo() {
  return (
    <aside className="bg-white rounded-l-full">
      <Image
        src="/photo-of-the-author.jpeg"
        alt="photo of the author"
        height={280}
        width={280}
        className="rounded-l-full md:hidden"
      />
      <Image
        src="/photo-of-the-author.jpeg"
        alt="photo of the author"
        height={500}
        width={400}
        className="rounded-l-full hidden md:block"
      />
    </aside>
  );
}
