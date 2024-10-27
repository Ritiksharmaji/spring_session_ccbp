import React, { useEffect, useState } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import basicOps from '../utility/basicOps';
import { usePaginationContext } from '../contexts/PaginationContext';

function Home() {
  console.log("home...")
  const[searchTerm, setSearchTerm] = useState('')
  const[products, setProducts] = useState([])
  // this state-managment is for sort the items based on price..
  const[sortDir, setSortDir] = useState(0)
  // this state-managment for categories
  const[categories, setCategories] = useState([])
  // this state-managment for identify the current category type of product...
  const[currentCategory, setCurrentCategory] = useState('All Categories');
  // this  state-managment for set the page 
  // const [pageSize,setPageSize] = useState(4)
  // // to set the curent page
  // const[pageNum,setPageNum]= useState(1)
  const {pageSize,setPageSize,pageNum , setPageNum} = usePaginationContext()


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

 const object = basicOps(products,searchTerm,sortDir,currentCategory,pageSize,pageNum);
 const filteredSortedArrCategory = object.filteredSortedArrCategory;
 const totalPages = object.totalPages 
  // to pring the currentCategory of product
  console.log(currentCategory)
  return (
    <>
   <header className='nav_warapper'>
    <div className='search_sortWrapper'>
      <input className='search_input'
            type='text'
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)
             // setting the page nu=1 to ovrcome the debugg
              setPageNum(1)
            }}
        />    
        <div className='icons_container'>
          <ArrowCircleUpIcon  onClick={()=>{setSortDir(1)
             // setting the page nu=1 to ovrcome the debugg
             setPageNum(1)
          }} ></ArrowCircleUpIcon>
          <ArrowCircleDownIcon  onClick={()=>{setSortDir(-1)
            // setting the page nu=1 to ovrcome the debugg
            setPageNum(1)
          }}  ></ArrowCircleDownIcon>
        </div>
    </div>
    <div className='categories_wapper'>
     <Categories propsCategories = {categories} 
                 setCurrentCategory={setCurrentCategory}
                //  setPageNum = {setPageNum}
                 />
    </div>

   </header>

   <main className='product_wrapper'>
      {/* {filterArr.length == 0 ? <h2>Loding..</h2> : filterArr.map((product)=>{ */}
     <ProductList productlist = {filteredSortedArrCategory}/>
   </main>
   {/* pagination */}
   <div className='pagination'>
    <button onClick={()=>{
      if(pageNum !== 1){
        return setPageNum( pageNum - 1)
      }
    }} 
    disabled = {pageNum == 1 ? true: false}
    >
      <FaCaretLeft/>
    </button>

    <div className='pagenum'>
      {pageNum}
    </div>

    <button onClick={()=>{
      if(pageNum !== totalPages){
        return setPageNum(pageNum + 1 )
      }
    }}
    disabled = {pageNum === totalPages ? true : false}
    >
      <FaCaretRight/>
    </button>
   </div>
    </>
  )
}

export default Home;
