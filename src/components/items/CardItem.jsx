import User from "../../assets/img/user.png";
import { BsStack } from "react-icons/bs";
import {
  FaRegComments,
  FaCalendarDays,
  FaClipboardList,
} from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import {} from "react-icons/fa6";
const CardItem = () => {
  return (
    <div className="p-4 my-2 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={User} alt="Client" className="w-5 h-5 rounded-full" />
          <div>
            <p className="font-semibold text-sm">Client Name</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <img src={User} alt="Owner" className="w-5 h-5 rounded-full" />
          <p className="text-sm font-medium">Sadik Istiak</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="flex items-center text-gray-800 text-sm">
          <span className="mr-2">
            <BsStack />
          </span>
          Lorem ipsum dolor sit amet.
        </p>
        <div className="flex items-center text-gray-800 bg-gray-100 rounded p-1 text-sm">
          <span>
            <FaClipboardList />
          </span>
          <span>1/2</span>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-2">
        <img src={User} alt="Client" className="w-5 h-5 rounded-full" />
        <img src={User} alt="Client" className="w-5 h-5 rounded-full" />
        <div className="w-5 h-5 rounded-full bg-gray-200 text-xs flex items-center justify-center p-1">
          12+
        </div>
        <div className="flex items-center justify-center text-sm">
          <span className="mr-1">
            <FaRegComments />
          </span>
          15
        </div>
        <div className="flex items-center justify-center text-sm">
          <span className="mr-1 cursor-pointer">
            <GrAttachment />
          </span>
          15
        </div>
        <div className="flex items-center justify-center text-sm">
          <span className="mr-1">
            <FaCalendarDays />
          </span>
          30-12-2022
        </div>
      </div>
    </div>
  );
};

export default CardItem;
