import Image from "next/image";

const page = () => {
  return (
    <div className="py-10">
      <div className="wrapper flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
          Our Story
        </h1>
        <Image
          src="/assets/about.jpg"
          width={600}
          height={600}
          alt="about us"
          className="rounded-md"
        />
        <p className="max-w-[600px] text-center text-gray-600 dark:text-gray-50">
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aperiam eveniet debitis
          voluptate eius aliquid ratione inventore, aut
          asperiores eaque nam fuga iste odio neque iusto
          quibusdam expedita, perspiciatis, suscipit
          maiores? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Voluptates deleniti debitis
          expedita eum accusantium? Dolores hic aliquam
          laudantium provident esse fuga tempora, quibusdam
          vel eaque, voluptatem et ab veniam porro.
        </p>
        <Image
          src="/assets/signature.png"
          width={300}
          height={300}
          alt="tech pulse"
        />
      </div>
    </div>
  );
};

export default page;
