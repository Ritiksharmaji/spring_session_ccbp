import React from 'react'
import { usePaginationContext } from '../contexts/PaginationContext'

function Categories(props) {

  const{propsCategories,setCurrentCategory} = props
  // here we are getting the setPageNum from globle variable is called as context.
  const{setPageNum} = usePaginationContext();

  return (
    <>
     <button className='category_option' 
     onClick={ ()=>{
      setCurrentCategory("All Categories")
      // setting the page nu=1 to ovrcome the debugg
      setPageNum(1)
     }}
     >All Categories</button>

      {propsCategories.map((category)=>{
        return <button className='category_option'
                onClick={()=>{
                  setCurrentCategory(category) 
                  // setting the page nu=1 to ovrcome the debugg
                  setPageNum(1)
                }}>{category}</button>  
      })}
    </>
  )
}

export default Categories
