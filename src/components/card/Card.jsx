import CardItem from "../items/CardItem";

const Card = ({ title, color, data, uploadfileHandle }) => {
  return (
    <div className="bg-gray-100 box-border px-2 min-w-[350px]">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center justify-center">
          <div
            className={`${
              color || "bg-red-500"
            } w-5 h-5 rounded-tl-full rounded-bl-full mr-2`}
          ></div>
          <span>{title || "title"}</span>
        </div>
        <div>
          <span className="bg-gray-200 px-2 py-1 rounded">{data?.length}</span>
        </div>
      </div>
      <div
        className="overflow-y-scroll"
        style={{ maxHeight: `calc(100vh - 100px)` }}
      >
        {data &&
          data.map((items, index) => {
            return (
              <CardItem
                key={index}
                data={items}
                uploadfileHandle={uploadfileHandle}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Card;
