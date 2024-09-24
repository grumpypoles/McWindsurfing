
import Image from "next/image";
import bg from "@/public/lyall.jpg";


export default function Page() {
 
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Wild ocean waves in black and white"
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 font-normal tracking-tight text-9xl text-primary-300">
        Windsurfing
        </h1>
        <h1 className="mb-10 font-normal tracking-tight text-8xl text-primary-700">
        the way of life
        </h1>
        
      </div>
    </main>
  );
}
