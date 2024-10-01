/* eslint-disable react/prop-types */
import { useState } from "react"
import { postData } from "../api/PostApi"

const Form = ({data,setData}) => {

  const [addData,setAddData]=useState({
    title:"",
    body:""
  })

  const handleInputChange=(e)=>{
    const {name,value}=e.target
    setAddData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }

  const addPostData=async()=>{
    const res=await postData(addData)
    console.log("res",res)
    if(res.status===201)
    {
      setData([...data,res.data])
      setAddData({title:"",body:""})
    }
  }

  const handleFormSubmit=(e)=>{
    e.preventDefault()
    addPostData()
    
  }


  return (
    <form onSubmit={handleFormSubmit} className="flex items-center justify-center gap-3 mb-10">
      <div>


        <label htmlFor="title"></label>
        <input className="px-10 py-3 rounded-md outline-none bg-zinc-800 " type="text"
          autoComplete="off"
          name="title"
          placeholder="Add Title"
          value={addData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>


        <label htmlFor="body"></label>
        <input className="px-10 py-3 rounded-md outline-none bg-zinc-800" type="text"
          autoComplete="off"
          name="body"
          placeholder="Add Post"
          value={addData.body}
          onChange={handleInputChange}
        />
      </div>
      <button className="bg-emerald-500 flex items-center gap-[4px] hover:bg-emerald-600  hover:font-semibold text-black px-5 py-2 rounded-md" type="submit">ADD</button>
    </form>
  )
}

export default Form