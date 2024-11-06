import User from "../../assets/img/user.png";
const CardItem = () => {
  return (
    <div className="p-4 border rounded-lg shadow-sm flex items-center space-x-4">
      {/* Client Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={User} alt="Client" className="w-5 h-5 rounded-full" />
          <div>
            <p className="font-semibold">Client Name</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <img src={User} alt="Owner" className="w-5 h-5 rounded-full" />
          <p className="text-sm font-medium">Sadik Istiak</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
