import Image from "next/image";

const Banner = ({ image, alt }) => {
  return (
    <div className="h-56 xl:h-72 2xl:h-96 w-full relative -z-20 shadow-lg">
      <Image
        src={image}
        placeholder={"blur"}
        alt={alt}
        objectFit={"cover"}
        layout="fill"
        objectPosition={"center"}
        priority={true}
      />
    </div>
  );
};

export default Banner;
