import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [item, setItem] = useState([])

  //Getting Data From Api Using Axios

  async function getData() {
    const responce = await axios.get('https://picsum.photos/v2/list')
    setItem(responce.data);
  }
  

  // Getting data from API Using Asyns Await

  // async function getData() {
  //   const responce = await fetch('https://picsum.photos/v2/list')
  //   const data = await responce.json()
  //   setItem(data);
  // }

  return (
    <div className='main'>
      <div className="btn">
        <button onClick={getData}>Get Data</button>
      </div>
      <div className="cards">
        {
          item.map(function (elem, idx) {
            return (
              <div className="card" key={idx}>
                <div className="card-img">
                  <img src={elem.download_url} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App