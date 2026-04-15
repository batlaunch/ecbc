import subpageHero from "@/assets/subpage-hero.jpg";

const SubpageHero = () => {
  return (
    <div className="w-full">
      <img
        src={subpageHero}
        alt="Office Solutions in San Diego - East County Business Center"
        className="w-full h-48 sm:h-64 lg:h-80 object-cover"
        width={1920}
        height={768}
      />
    </div>
  );
};

export default SubpageHero;
