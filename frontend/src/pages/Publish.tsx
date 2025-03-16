import { useState } from "react";
import Appbar from "../components/Appbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Publish() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
   //
    const handlePublish = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/blog`, {
                title,
                content,
                id: Date.now() // Using timestamp as temporary ID
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            
            if (response.data.id) {
                navigate(`/blog/${response.data.id}`);
            }
        } catch (error) {
            alert("Error publishing blog");
        }
    };

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-screen-lg w-full p-8">
                    <input 
                        type="text"
                        placeholder="Title"
                        className="w-full border-none text-4xl font-bold focus:outline-none mb-8"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Write your blog content here..."
                        className="w-full h-[60vh] border-none focus:outline-none resize-none text-xl"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button
                        onClick={handlePublish}
                        className="mt-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                    >
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Publish;