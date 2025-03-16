import { useParams } from "react-router-dom";
import UserBlog from "../components/UserBlog";
import { useBlog } from "../hooks";

function Blog(){
    const {id} = useParams();
     const {loading,blog} =useBlog({
        id: id || ""
     }
     );
    
        if(loading){
            return(<div>
                loading...
            </div>)
        }
    return(
        <div>
    <UserBlog blog={blog}/>
        </div>
    )
}
export default Blog;