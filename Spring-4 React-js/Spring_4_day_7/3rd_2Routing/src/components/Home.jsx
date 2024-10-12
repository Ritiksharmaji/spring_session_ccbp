import React, { useEffect, useState } from 'react';

function Home() {
  console.log("home...")
  const[searchTerm, setSearchTerm] = useState('')
  const[products, setProducts] = useState([])

  useEffect(()=>{
    (async function () {

      const resp = await fetch(`https://fakestoreapi.com/products`)
      const productsData = await resp.json()
      console.log(productsData)
      setProducts(productsData)
      
    }) ()
  }, []);

  return (
    <>
   <header className='nav_warapper'>
    <input className='search_input'
          type='text'
          value={searchTerm}
          onChange={(e)=>{setSearchTerm(e.target.value)}}
      />    
   </header>

   <main className='product_wrapper'>
      {products.length == 0 ? <h2>Loding..</h2> : products.map((product)=>{
          return(<div className='product'>
                <img src={product.image} alt='product_img'
                className='product_image'/>
                <div className='product_meta'>
                  <p className='product_title'>{product.title}</p>
                  <p className='price'>{product.price}</p>
                </div>
          </div>)
     })
      
      }
   </main>

    </>
  )
}

export default Home;
