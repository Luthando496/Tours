import React, { useState } from 'react'

const Tour = ({ tour,onRemove }) => {
    const { image, info, name } = tour
    const [read, setRead] = useState(false)


    const netInterested =()=>{
        onRemove(tour)
    }


    return (
        <div className="w-full border shadow-xl">
            <div className="img w-full overflow-hidden h-[14rem]">
                <img src={image} alt="image" className="w-full h-full hover:scale-[1.9] duration-700" />
            </div>
            <div className="w-full px-10">
                <h2 className="text-xl my-4 text-center">{name}</h2>
                <p className="text-base text-gray-400 my-3">{read ? info : `${info.substring(0, 120)}...`} <span
                onClick={()=> setRead(!read)} className="font-semibold cursor-pointer text-base text-teal-400">{read ? 'Read less' : 'Read more'}</span> </p>

                <button onClick={netInterested} className="w-full tracking-[3px] py-3 border rounded-2xl text-pink-400 border-pink-400 hover:bg-pink-400 duration-700 hover:text-white font-bold my-6">Not Interested</button>
            </div>
        </div>
    )
}

export default Tour
