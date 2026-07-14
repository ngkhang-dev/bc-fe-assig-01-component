import CardItem from "./CardItem";

const CardList = () => {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  );
};

export default CardList;
