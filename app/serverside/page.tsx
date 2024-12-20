import React from 'react'

interface Books{
    id:number,
    name:string,
    type:string,
    available:boolean,
}

const ServerSide = async () => {
    let parsedData : Books[] = []
        let data = await fetch('https://simple-books-api.glitch.me/books/')
        parsedData = await data.json()
        console.log(parsedData)

  return (
    <section className=' font-roboto flex flex-col items-center gap-6 h-screen justify-center'>
        <h1 className='text-[22px] font-bold'>Server Side Data Fetching</h1>
        <div className='grid grid-cols-3 h-fit'>
      {parsedData.map((elements, index)=>{
          return(
              <div key={index} className='bg-[#fcefb9] p-4 flex flex-col gap-4 m-4 w-[350px] rounded-lg'>
                  <h2 className='text-[20px] font-semibold'>Name: {elements.name}</h2>
                  <p className='text-[16px]'>Type: {elements.type}</p>
                  <p className={`text-[14px] ${!elements.available?'text-red-500':'text-green-400'}`}>{elements.available ? 'Available':'Not Available'}</p>
              </div>
          )
      })}
        </div>
    </section>
  )
}

export default ServerSide
