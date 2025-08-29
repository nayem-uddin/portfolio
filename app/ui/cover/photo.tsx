import Image from "next/image";

export default function Photo() {
  return (
    <aside className="bg-white rounded-l-full overflow-hidden">
      <Image
        src="/photo-of-the-author.jpeg"
        alt="photo of the author"
        height={280}
        width={280}
        className="object-cover md:hidden"
      />
      <Image
        src="/photo-of-the-author.jpeg"
        alt="photo of the author"
        height={500}
        width={450}
        className="object-cover hidden md:block"
      />
    </aside>
  );
}
