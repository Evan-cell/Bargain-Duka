import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import ProductFeed from '@/components/ProductFeed'



export default function Home({products}) {
 
  return (
    <div
      className='bg-gray-100'
    >
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        {/* banner */}
        <Banner/>
        {/* product feed */}
        <ProductFeed products={products}/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )
  return {
    props: {
      products,
    }
  }
}
// 2:11:35