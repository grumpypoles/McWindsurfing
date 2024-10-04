import Image from "next/image";
import about1 from "@/public/about-1.jpg";
import Link from "next/link";

//will refresh the cache once a day and provide update number of cabins
// export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  return (
    <div className="grid items-center grid-cols-5 text-lg gap-x-24 gap-y-32">
      <div className="relative col-span-2 aspect-square">
        <Image
          src={about1}
          placeholder="blur"
          quality={100}
          className="object-cover"
          fill
          alt="Windsurfing at Lyall Bay, Wellington, New Zealand"
        />
      </div>

      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-primary-500">
          Welcome to Windsurfing App
        </h1>

        <div className="space-y-8">
          <p>
            Welcome to Mc Windsurf, the ultimate app designed to help us
            track and enhance our windsurfing adventures. Whether we&apos;re just
            starting out or are seasoned sailors, Mc Windsurf offers an easy
            way to log our sessions and maintain control over our equipment.
            From recording windsurfing spots and session details to storing
            valuable data about our boards, sails, and masts, this app ensures
            we have everything we need at our fingertips.
          </p>
          <p>
            Our app allows us to build a detailed history of our windsurfing
            experiences, helping us monitor progress, identify patterns, and
            make informed decisions for future sessions. Whether it&apos;s a casual
            sail or a high-wind challenge, Mc Windsurf is here to support our
            journey on the water.
          </p>

          <div>
            <Link
              href="/tow"
              className="px-8 py-6 text-lg font-semibold transition-all rounded-md bg-primary-500 text-primary-100 hover:bg-stone-600"
            >
              Sessions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
