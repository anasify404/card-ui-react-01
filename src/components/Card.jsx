import { ArrowRight } from "lucide-react";

const Card = (props) => {
  return (
    <div className="shrink-0 rounded-4xl border-0 relative overflow-hidden ">
      <div className="w-full h-full bg-gray-300">
        <img className=" w-full h-full object-cover" src={props.src} />
      </div>
      <div className=" w-full h-full p-6 flex flex-col justify-between absolute top-0">
        <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full">
          <h1 className="text-2xl font-semibold text-black">{props.id}</h1>
        </div>
        <div className=" flex flex-col justify-between gap-3">
          <p className="text-ml font-medium text-shadow-2xs text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            provident aspernatur quae molestiae explicabo inventore veritatis.
          </p>
          <div className="flex justify-between mb-4">
            <button className="bg-green-100 text-xl font-medium p-2 rounded-full cursor-pointer">
              Satisfied
            </button>
            <button className="bg-green-100 text-xl font-medium p-2 rounded-full cursor-pointer">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
