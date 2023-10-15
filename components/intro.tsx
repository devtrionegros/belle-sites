import { CMS_NAME, CMS_URL } from "../lib/constants";
export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mb-0 md:mb-0">
      <div className="hero min-h-screen" style={{ backgroundImage: "url(https://source.unsplash.com/qyg26IWAT7s)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[30rem]">
            <h1 className="mb-5 text-5xl font-bold">🌿Escape and Unwind🌿</h1>
            <p className="mb-5">
              Indulge in tranquility and elegance with Belle's exclusive picnic experiences. Discover the perfect blend
              of nature, relaxation, and gourmet delights in picturesque settings. 🍽️ Book Your Serene Escape Today! 🍽️
            </p>
            <button className="btn btn-primary">Book an Experience</button>
          </div>
        </div>
      </div>

      {/* <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">Belle's Luxury Picnic</h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Serenity in Every Setting: Belle's Luxury Picnics{" "}
        <a href="https://nextjs.org/" className="underline hover:text-success duration-200 transition-colors">
          Next.js
        </a>{" "}
        and{" "}
        <a href={CMS_URL} className="underline hover:text-success duration-200 transition-colors">
          {CMS_NAME}
        </a>
        .
      </h4> */}
    </section>
  );
}
