"use client"
import React,{useState, useEffect} from 'react'
import Image from "next/image";
import cart from '@/components/assets/Buy 2.svg'
import Loadingg from '@/components/Loading'
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
  interface PageProps {
    params: {
      id: number;
    };
  }
export default function Page({params:{id}}:PageProps) {
      const[Loading, setLoading]= useState(true)
          const[products, setProducts]= useState<Products>()
          useEffect(()=>{
            fetchApi()
          },[])
    
          const fetchApi = async ()=>{
            setLoading(true)
            const data = await fetch(`https://fakestoreapi.com/products/${id}`) 
            const parsedData : Products = await data.json()
            setProducts(parsedData)
            setLoading(false)
            console.log(products)
          }
  return (
    <section className={`${Loading?'h-screen':''}`}>
                  {Loading && <Loadingg/>}
                  {!Loading && <div className='flex xl:gap-[137px] gap-10 1160:flex-row items-center flex-col xl:px-[110px] 450:px-10 px-5 pt-[110px] pb-[362px]'>

        <img className='w-[653px] h-[653px] ' src={products?.image} alt="" />
        <div className='flex flex-col gap-8'>
            <h1 className='sm:text-[48px] text-[32px] font-[500] leading-[48px]'>{products?.title}</h1>
            <p className='text-[15px] leading-7 1160:w-[330px]'>{products?.description}</p>
            <p className='sm:text-[36px] text-[26px] leading-7'>{`$${products?.price}`}</p>
            <div className='relative flex items-center'>
            <button className='bg-black text-white text-[15px] leading-6 w-[174px] pl-6 h-[44px] rounded-full'>  Add To Cart</button>
                <Image className='absolute left-5' src={cart} alt="" />   
            </div>
        </div>
        </div>}

    </section>      
)
}
