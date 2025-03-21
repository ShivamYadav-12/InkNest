import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

function Appbar() {
  return (
    <div className="border-b flex justify-between px-10 py-3">
      <Link to={"/blogs"} className="flex items-center">
        Latent Write
      </Link>
      <div>
        <Link to={"/publish"}>
      <button
        type="button"
        className="mr-4 cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Publish
      </button>
      </Link>
      <Avatar name="Shivam" size="big" />
      </div>
      
    </div>
  );
}
export default Appbar;
