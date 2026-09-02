import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
const Herosection = (props) => {
  return (
    <div className="flex h-full p-10 justify-between gap-20">
      <Leftsection />
      <Rightsection users={props.users} />
    </div>
  );
};

export default Herosection;
