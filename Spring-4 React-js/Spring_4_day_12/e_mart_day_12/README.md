104) ## ---------------------------------------Spring_4_day_12 redux concept appy on project -------------------------------------------------
105) for project
106) 
    1) npm create vite@latest
    2) cd e_mart
    3) npm install
    4) npm install react-redux @reduxjs/toolkit
    5) npm run dev
    6) ------------- output-------------------
    7) ![image-218](/Spring-4%20React-js/image-128.png)
    8) copy the code of spring_4_day_9 that is code of e-commernce-Project but before to copy install all the same dependecy as spring_4_day_9
    9) npm install react-router-dom ,  npm install @mui/material @emotion/react @emotion/styled, npm install @mui/icons-material , npm install react-icons

    10) ----------output----------------------
11) ![imge-219](/Spring-4%20React-js/image-219.png)
12) ------------------------------------------------------------------------------------------------
13) in this section we are going to implement the cart feacture and second thing is deeploy the applicaiton
14) coming to cart feacture--->
    1)  we should able to add the items to cart , delete the item to cart.
    2)  when we go any page from current page then it should not change the data.
    3)  when we apply the filter, group,sorting etc also that cart should not affect.
    4)  to show the cart with product quantity
    5)  to show the added product on carts page.
    15) now we are going to work with cart component. 
    16) now are going to appy the icons for cart and adding the plus and minus icon with default quality for each and every product uisng the productList.
    17) code of NavBar.jsx ![alt text](/Spring-4%20React-js/image-220.png)
    18) code of ProductList.jsx ![alt text](/Spring-4%20React-js/image-221.png)
    19) code of App.css to style this cart icon and cart_containers ![alt text](/Spring-4%20React-js/image-222.png)
    20) now are going to refecter the code meas.. mantain the file and folder in proper way so in this project we have four pages 
        1)  Home.jsx
        2)  User.jsx
        3)  cart.jsx
        4)  NotFound.jsx
        5)  so we are going to create a folder as pages and maintain this all page inside that pages folder.
        6)  ![alt text](/Spring-4%20React-js/image-223.png)
    21)  now we are going to create a redux for this project so for that 
          1)   first create Slice (cartSlice.js)
          2)   code of slice ![alt text](/Spring-4%20React-js/image-224.png)
          3)   second step is create store.js
          4)   code of store.js is ![alt text](/Spring-4%20React-js/image-225.png)
          5)   here in store.js code, here cartSlice.reducer is used to access the all the state-varable , not actions this reducer will get all the state-varaible from the slice and convet them in form of object which will store in cartReducer
          6)   now the last step for the redux is creating the Provider in main.jsx
          7)   code of main.jsx ![alt text](/Spring-4%20React-js/image-226.png)
          8)   ---------------------- Now we are going to detal with components which required these state
          9)   so first we are going to detal with Navbar.jsx  ![alt text](/Spring-4%20React-js/image-227.png)
          10)  ------ oUTput ---- 
          11)  ![alt text](/Spring-4%20React-js/image-228.png)
          12)  till now the communication from slice to componet done but to commuicate from component to slice we need to use the useDispatch and also modify the code of slice to define the action.
          13)  cartSlice.js ![alt text](/Spring-4%20React-js/image-229.png)
          14)  ProductList.jsx code is ![alt text](/Spring-4%20React-js/image-230.png)
          15)  ----------- output----------------
          16)  ![alt text](/Spring-4%20React-js/image-231.png),![alt text](/Spring-4%20React-js/image-232.png),![alt text](/Spring-4%20React-js/image-233.png)
          17)  ![alt text](/Spring-4%20React-js/image-234.png)
          18)  ---output-- is 
          19)  ![alt text](/Spring-4%20React-js/image-235.png)
          20)  
    
    
    
    



            
  
 



