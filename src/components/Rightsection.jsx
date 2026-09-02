import Card from "./Card";

const Rightsection = (props) => {
  return (
    <div id="container" className="flex gap-5 flex-nowrap overflow-x-auto rounded-2xl">
      {props.users.map(function (elem) {
        return <Card key={elem.id} id={elem.id} src={elem.img} />;
      })}
    </div>
  );
};

export default Rightsection;
