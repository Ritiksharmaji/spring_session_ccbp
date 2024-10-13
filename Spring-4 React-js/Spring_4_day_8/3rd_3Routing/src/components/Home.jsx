import React, { useEffect, useState } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function inComparator(product1,product2){
  if(product1.price > product2.price){
    return 1
  }else{
    return -1
  }
}

function decComparator(product1,product2){
  if(product1.price < product2.price){
    return 1
  }else{
    return -1 
  }
}
function Home() {
  console.log("home...")
  const[searchTerm, setSearchTerm] = useState('')
  const[products, setProducts] = useState([])
  // this hook is for sort the items based on price..
  const[sortDir, setSortDir] = useState(0)
  // this statemanagment for categories
  const[categories, setCategories] = useState([])
  // this state-managment for identify the current category type of product...
  const[currentCategory, setCurrentCategory] = useState('All Categories');

  // fetch all the product data
  useEffect(()=>{
    (async function () {

      const resp = await fetch(`https://fakestoreapi.com/products`)
      const productsData = await resp.json()
      console.log(productsData)
      setProducts(productsData)
      // to display the title of each item in console
      productsData.forEach(element => {
        console.log(element.title)
      });

    }) ()
  }, []);

  // fetch the type categories of product
  useEffect(()=>{
    (async function () {

      const resp = await fetch(`https://fakestoreapi.com/products/categories`)
      const ProductCategories = await resp.json()
      console.log(ProductCategories)
      setCategories(ProductCategories)
    
    }) ()
  }, []);

 
  let filterArr = products
  if(searchTerm !== ''){
    
    filterArr = filterArr.filter((product)=>{
      let lowerSearchTerm = searchTerm.toLowerCase();
      let lowerTitle = product.title.toLowerCase();
      return lowerTitle.includes(lowerSearchTerm)
    })
  }

   // sorting -> rearragin
   let filteredSortedArr = filterArr
   if(sortDir !== 0){
    // increasion
    if(sortDir === 1){
      filteredSortedArr = filteredSortedArr.sort(inComparator)

    }else{
      filteredSortedArr = filteredSortedArr.sort(decComparator)
    }
  }

  // to filter the product based on category of product
  let filteredSortedArrCategory = filteredSortedArr
  if(currentCategory !== "All Categories"){
    console.log(`executed for ${currentCategory}`)
    filteredSortedArrCategory = filteredSortedArrCategory.filter((product)=>{
      return product.category === currentCategory
    })
    console.log(`the current product based on currentCategory:`)
    console.log(filteredSortedArrCategory)
  }

  // to pring the currentCategory of product
  console.log(currentCategory)
  return (
    <>
   <header className='nav_warapper'>
    <div className='search_sortWrapper'>
      <input className='search_input'
            type='text'
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
        />    
        <div className='icons_container'>
          <ArrowCircleUpIcon  onClick={()=>{setSortDir(1)}} ></ArrowCircleUpIcon>
          <ArrowCircleDownIcon  onClick={()=>{setSortDir(-1)}}  ></ArrowCircleDownIcon>
        </div>
    </div>

    <div className='categories_wapper'>
      <button className='category_option'>All Categories</button>
      {categories.map((category)=>{
        return <button className='category_option'
                onClick={()=>setCurrentCategory(category) }>{category}</button>
                
      })}

    </div>
   </header>

   <main className='product_wrapper'>
      {/* {filterArr.length == 0 ? <h2>Loding..</h2> : filterArr.map((product)=>{ */}
      {filteredSortedArrCategory.length == 0 ? <h2>Loding..</h2> : 
        filteredSortedArrCategory.map((product)=>{
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
