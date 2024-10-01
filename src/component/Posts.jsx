import { useEffect, useState } from 'react'
import { deletePost, getPost } from '../api/PostApi'
import Card from './Card'

const Posts = () => {
  const [data, setData] = useState([])
  const getPostData = async () => {
    const res = await getPost()
    setData(res.data)
  }

 const handleDeletePost=async(id)=>{
  try {
    const res=await deletePost(id)
    if(res.status===200)
    {
      const newUpdatedPosts=data?.filter((currPost)=>{
        return currPost.id!==id
      })
      setData(newUpdatedPosts)
    }
    else{
      console.log("failed To deleted the post",res.status)
    }
    console.log(res)
  } catch (error) {
    console.log(error)
    
  }

}
 
  

  useEffect(() => {
    getPostData()
  }, [])
  return (
    <div>
      <ul className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 '>
        {
          data?.map((currElem) => (
            <Card key={currElem?.id}  id={currElem?.id}   title={currElem?.title} body={currElem?.body} onDelete={handleDeletePost} />

          ))
        }
      </ul>
    </div>
  )
}

export default Posts