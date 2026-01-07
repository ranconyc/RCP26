const heroData = {
  title: "<Hello world/> I’m Ran.",
  description:
    "Bridging the gap between creative design and technical implementation.",
};

const HeroSection = () => {
  return (
    <section className="w-full h-screen px-4 bg-radial from-blue-900 from-10% to-zinc-900 text-white grid place-content-center text-center pb-20">
      <h2 className="text-3xl mb-2 md:text-4xl md:mb-3 lg:text-5xl font-bold  ">
        {heroData.title}
      </h2>
      <p className="text-lg max-w-lg lg:text-2xl lg:leading-relaxed lg:max-w-xl mx-auto">
        {heroData.description}
      </p>
    </section>
  );
};

export default function Home() {
  return (
    <div className=" min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <HeroSection />
      </main>
    </div>
  );
}
