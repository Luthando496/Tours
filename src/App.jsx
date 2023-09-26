import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { RotatingSquare } from 'react-loader-spinner'
import Tour from './components/Tour'



const App = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(false)



  const netInterestedHandler = (tour) => {
    const newTour = tours.filter((t) => t.id !== tour.id)
    setTours(newTour)
  }


  const fetchData = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('https://course-api.com/react-tours-project')
      setTours(data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])




  return (
    <section className='min-h-full pb-10 bg-slate-300/20 pt-40 w-full absolute top-0'>
      {tours.length === 0 ? (<><h1 className="text-center text-4xl font-semibold text-pink-300 capitalize tracking-[4px]">no tours left</h1>
        <div className="mx-auto w-[6rem] mt-3">
          <button onClick={fetchData} className="px-4 py-1 bg-teal-400 text-white cursor-pointer rounded-xl shadow-xl">Refresh</button>
        </div>
      </>) : (
        <>
          <h1 className="text-center text-4xl font-semibold text-pink-300 tracking-[4px]">Our Tours</h1>
          <div className="mx-auto w-[6rem] bg-teal-400 h-1 mt-3"></div>
        </>)
      }


      {loading && <div className="mt-14 w-full flex justify-center items-center">
        <RotatingSquare height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="rotating-square-loading"
          strokeWidth="4"
          wrapperClass=""
          visible={true} />
      </div>}


      <div className="px-14 w-full grid grid-cols-3 gap-10 mt-14">
        {tours.length === 0 ? null : tours.map((tour, index) => (
          <Tour tour={tour} onRemove={netInterestedHandler} key={tour.id} />
        ))}
      </div>

    </section>
  )
}

export default App;
