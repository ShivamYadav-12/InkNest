import { Link } from "react-router-dom";

interface blogCardProps{
    authorName:string,
    publishedDate:string,
    content:string,
    title:string,
    id:number
}


function BlogCard({
    authorName,
    title,
    content,
    publishedDate,
    id
}:blogCardProps){
    return(
      <Link to={`/blog/${id}`}>
        <div className="p-4 border-b  border-slate-400 pb-4 w-screen max-w-screen-lg cursor-pointer" >
        <div className="flex gap-2 ">
          <div >
          <Avatar  name={authorName} size ="small"/>
          </div>
          <div className="font-light text-sm flex flex-col justify-center">
            {authorName}
             </div>
          <div className="flex flex-col justify-center">
          <Dot/> 
          </div>
          <div className="font-extralight text-sm text-slate-400 flex flex-col justify-center">
          {publishedDate}
          </div>
      </div>
        <div className="text-xl font-semibold pt-2 ">
          {title}
        </div>
        <div className=" text-md font-thin ">
          {content.slice(0,100)+"..."}
        </div>
        <div className="text-slate-400 text-sm font-thin pt-4">
            {`${Math.ceil(content.length/100)} minutes read`}
        </div>
  
      </div>
      </Link>
    )
}

function Dot(){
    return(
        <div className="w-1 h-1 rounded-full bg-slate-800"></div>
    )
}
export function Avatar({name,size}:{name:string,size:"small" | "big"}) {
  return (
    <div className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-800 rounded-full dark:bg-gray-600 ${size ==="small" ?"w-6 h-6" : "w-10 h-10"}`}>
      <span className={`font-medium ${size ==="small" ?"text-xs" : "text-xl"} text-gray-100 dark:text-gray-300`}>{name[0]}</span>
    </div>
  );
}
export default BlogCard;