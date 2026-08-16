import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from './components/Card'

const App = () => {

  const [result, setResult] = useState([])
  const [num, setNum] = useState(1)
  const [hasMore, setHasMore] = useState(true);

  const getData = async () => {
    let response = await axios.get(`https://picsum.photos/v2/list?page=${num}&limit=40`)
    setResult((prev) => [...prev, ...response.data])
    setNum(num + 1)
    if (response.data.length === 0) {
      setHasMore(false)
      return;
    }
  }

  return (
    <InfiniteScroll
      dataLength={result.length}
      next={getData}
      hasMore={hasMore}
      loader={<p className='text-center text-white'>Loading...</p>}
      endMessage={<p className='text-center text-white'>All items loaded.</p>}
    >
      <div className='w-full min-h-screen bg-black text-white flex flex-wrap gap-4 py-15 px-3'>
        {result.map(function (elem, idx) {
          return (
            <Card elem={elem} key={idx}/>
          )
        })}
      </div>
    </InfiniteScroll>
  )
}

export default App 