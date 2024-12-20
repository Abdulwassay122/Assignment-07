"use client"
import React, { useEffect, useState } from 'react'
import Loadingg from "./Loading"
import Link from 'next/link'
interface Products{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{
    rate:number,
     count:number
    }
}

export default function ClientSide() {
    const[Loading, setLoading]= useState(true)
    const[products, setProducts]= useState<Products[]>()
    useEffect(()=>{
      fetchApi()
    },[])

    const fetchApi = async ()=>{
      setLoading(true)
      const data = await fetch(`https://fakestoreapi.com/products`)
      const parsedData : Products[] = await data.json()
      setProducts(parsedData)
      setLoading(false)
    }

  return (
    <section className={`flex flex-col pt-4 pb-5 ${Loading?'h-screen':''}`}>
      
          {Loading && <Loadingg/>}
      {!Loading && <div className='flex flex-col gap-10 px-10 '>
        <h1 className='text-[24px] font-bold m-auto'>Client Side Data Fetching</h1>
        <div className='grid grid-cols-3 gap-4 justify-items-center'>
          {products?.map((elements, index)=>{
            return(
              <Link href={`/productdetail/${elements.id}`} key={index}>
                <div className='w-[348px] h-[533px] bg-white rounded-[5px]'>
                  <div className='w-[348px] h-[348px] p-4'>
                    <img className='w-[348px] h-[348px]  rounded-[5px]' src={elements.image} alt="" />
                  </div>
                  <div className='pt-4 pb-[42px] flex flex-col gap-5 pl-3'>
                    <div>
                        <p className='text-[15px] leading-7 font-[500] text-[#9E3500]'>{elements.category}</p>
                        <p className='text-[15px] leading-6 font-[500] text-[#111111]'>{elements.title}</p>
                        <p className='text-[15px] leading-6  text-[#757575]'>{`Rating: (${elements.rating.rate}) Count(${elements.rating.count})`}</p>
                    </div>
                        <p className='text-[15px] leading-7 font-[500] text-[#111111]'>{`Price : $ ${elements.price}`}</p>
                  </div>
                  </div>
              </Link>
            )
          }) 
          }
        </div>
      </div>}
    </section>
  )
}
