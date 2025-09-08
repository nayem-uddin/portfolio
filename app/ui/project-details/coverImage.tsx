import Image from "next/image";

export default function CoverImage({ cover }: { cover: string | undefined }) {
  return (
    <div className="h-50 md:h-90 lg:h-150 relative m-auto mt-3 md:mt-10">
      {cover && <Image src={cover} alt="Project Cover Image" fill priority />}
    </div>
  );
}
