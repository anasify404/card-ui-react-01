import { ArrowUpRight } from "lucide-react";

const Leftsection = () => {
  return (
    <div className="w-1/3 h-full p-8 flex flex-col justify-between mx-3">
      <div className="w-full py-10 px-5">
        <h2 className=" text-5xl font-extrabold mb-8">
          Prospective <br />
          <span className="text-gray-400 text-center ">customer</span> <br />
          segmentation
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          doloribus laudantium perferendis aut voluptatibus ipsam fuga
          necessitatibus odio mollitia consequatur.
        </p>
      </div>
      <div className="w-full py-10 px-5">
        <ArrowUpRight size={60} />
      </div>
    </div>
  );
};

export default Leftsection;
