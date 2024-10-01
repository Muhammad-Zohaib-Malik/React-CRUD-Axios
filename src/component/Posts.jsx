import { useEffect, useState } from 'react'
import { getPost } from '../api/PostApi'
import Card from './Card'

const Posts = () => {
  const [data, setData] = useState()
  const getPostData = async () => {
    const res = await getPost()
    setData(res.data)
  }

  useEffect(() => {
    getPostData()
  }, [])
  return (
    <div>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {
          data?.map((currElem) => (

            <Card key={currElem.id} title={currElem.title} body={currElem.body} />

          ))
        }
      </ul>
    </div>
  )
}

export default Posts