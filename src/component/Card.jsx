import { Edit, Trash2 } from "lucide-react"


/* eslint-disable react/prop-types */

const Card = ({id,title,body,onDelete}) => {


  return (
    <div className="px-2 py-4 border border-l-2 border-r-2 border-1 rounded-xl ">
      <div className="w-full h-[28vh] sm:h-[40vh] md:h-[28vh] lg:h-[40vh] xl:h-[30vh]">
       <span>{id}</span>
      <p className="mb-3"><b>Title</b>: {title}</p>
      <p><b>Body</b>: {body}</p>
      </div>
     
      <div className="flex items-center justify-end gap-2 mt-5">
      <button className="bg-emerald-500 flex items-center gap-[4px] hover:bg-emerald-600  hover:font-semibold text-black px-5 py-2 rounded-md">
        <Edit size={17}/>Edit</button>
      <button onClick={()=> onDelete(id)} className="bg-red-500  flex items-center gap-[4px] hover:bg-red-600 hover:font-semibold text-black px-5 py-2 rounded-md">
     <Trash2 />Delete</button>

      </div>
    </div>
  )
}

export default Card