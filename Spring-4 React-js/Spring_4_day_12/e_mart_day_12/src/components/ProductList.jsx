import React from 'react'
import { MdOutlineAddCircle } from "react-icons/md";
import { AiFillMinusCircle } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { action } from '../redux/slices/cartSlice';

function ProductList(props) {
    const{productlist} = props
    const dispatch = useDispatch();

    const handleProduct = (product)=>{
      console.log(product)
      dispatch(action.addToCart())

    }
    const handleProductMinus = ()=>{
      dispatch(action.deleteFromCart())
    }
  return (
  <>
   {productlist.length == 0 ? <h2>Loding..</h2> : 
        productlist.map((product)=>{
          const{id} = product
          // console.log(id)
          return(
          <>
              <div className='product-details-container' >
                <div className='product' key={product.id}>
                  <img src={product.image} alt='product_img'
                    className='product_image'/>
                  <div className='product_meta'>
                    <p className='product_title'>{product.title}</p>
                    <p className='price'>{product.price}</p>
                  </div>

                </div>
                <div className='cart_add_product'>
                  {/* <h1>hello</h1> */}
                  <AiFillMinusCircle fontSize="large" cursor="pointer"
                  onClick={handleProductMinus}
                  />
                  <div className='currentCartCount'>0</div>
                  <MdOutlineAddCircle fontSize="large"  cursor="pointer"
                   onClick={handleProduct}
                  />
                </div>
              </div>
          </>
        )
     })
      
      }
  </>
  )
}

export default ProductList