import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
       
        {products.slice(0,4).map(({id,title,price,description,category,image})=>(
            <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            />
        ))}
        <img className='md:col-span-full md:mx-auto' src="https://ke.jumia.is/cms/2023/W42/SIS/PRK_SIS.jpg" alt="" />
       
        {products.slice(4,8).map(({id,title,price,description,category,image})=>(
            <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            />
        ))}
        <img className='md:col-span-full  md:mx-auto' src="https://ke.jumia.is/cms/2023/W42/SIS/PRK_SIS.jpg" alt="" />

        {products.slice(8,).map(({id,title,price,description,category,image})=>(
            <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            />
        ))}
        <img className='md:col-span-full  md:mx-auto' src="https://ke.jumia.is/cms/2023/W42/SIS/PRK_SIS.jpg" alt="" />


       
       
    </div>
  )
}

export default ProductFeed