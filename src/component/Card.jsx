import { Edit, Trash2 } from "lucide-react"

/* eslint-disable react/prop-types */

const Card = ({title,body}) => {
 
 
 
  return (
    <div className="border border-1 px-2 py-4 rounded-xl border-l-2 border-r-2 ">
      <div className="w-full h-[28vh] sm:h-[40vh] md:h-[28vh] lg:h-[40vh] xl:h-[30vh]">
       
      <p className="mb-3"><b>Title</b>: {title}</p>
      <p><b>Body</b>: {body}</p>
      </div>
     
      <div className="flex gap-2 items-center justify-end mt-5">
      <button className="bg-emerald-500 flex items-center gap-[4px] hover:bg-emerald-600  hover:font-semibold text-black px-5 py-2 rounded-md">
        <Edit size={17}/>Edit</button>
      <button className="bg-red-500  flex items-center gap-[4px] hover:bg-red-600 hover:font-semibold text-black px-5 py-2 rounded-md">
     <Trash2 />Delete</button>

      </div>
    </div>
  )
}

export default Card