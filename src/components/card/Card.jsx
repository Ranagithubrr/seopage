import CardItem from "../items/CardItem";

const Card = () => {
  return (
    <div className="bg-gray-100 box-border px-2">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center justify-center">
          <div className="bg-red-500 w-5 h-5 rounded-tl-full rounded-bl-full mr-2"></div>
          <span>Incomplete</span>
        </div>
        <div>
          <span className="bg-gray-200 px-2 py-1 rounded">0</span>
        </div>
      </div>
      <CardItem />
    </div>
  );
};

export default Card;
