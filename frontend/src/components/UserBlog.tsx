

import { Blog } from "../hooks";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";

function UserBlog ({blog}:{blog: Blog}){
    
    return(
        <div>
            <Appbar/>
            <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
                <div className="grid col-span-8">
                 <div className="text-3xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-slate-500 pt-2">
                    post on 12 Feb 2025
                </div>
                <div className="pt-4">
                    {blog.content}
                </div>
                </div>
                <div className="grid col-span-4">
                    
                    <div>Author</div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar name={blog.author.name ||"Anonymous "} size="big"/>
                        </div>
                        <div>
                        <div className="text-xl font-bold">
                 {blog.author.name || "Anonymous"}
                 </div>
                 <div className="pt-2 text-slate-500">
                    Some Random catchphraswe aboout thhe ability of Author
                 </div>
                </div>

            </div>
                        </div>

                    </div>
                    

        </div>
            </div>
            
    )
}
export default UserBlog;