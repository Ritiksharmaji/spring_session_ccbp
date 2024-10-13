


paste the babel cdn
ex- <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>





























--------------------------------------------------------------------------------------------------------------------------
## ----------------------------spring_4_day_4-------------------------------------
![code image](image-1.png)
![to show the comming error](image.png)
![change code to ovide the that error](image-2.png)
![after ovide the error console is clear](image-3.png)
1) when we controll the UI change of elements like inputs state then these components are know to be controlled components
2) we need a ting that creates us a normal react app structure and also it sholud provide variaous functionality in order to bulid a complex application using react. that is  bundler
3) so we have main three bundler to create react app
   1) create-react-app(CRA)
   2) Vite
   3) Parcel
   start with vite
4) npm = node package modules it is not , it is except the node package modules
5) npm -> is a ocean of packages that server what ever a developer needs to build
6) npx create-react-app-> creat a react app, but it execute the nom package modules
---------------creating react app using vite-----------------
1) npm install -D vite
2) create a index.html file
--------------------other way also--------------
1) npm create vite@latest
2) Project name: ... secondVite
    √ Package name: ... secondvite
    √ Select a framework: » React
    √ Select a variant: » JavaScript
3) cd secondVite
  npm install
  npm run dev

![creating react-app uisng vite output image](image-4.png)
![code of creating rect-app using vite](image-5.png)
* install the extension ES7+ React/Redux/React-Native snippets
* 
-------------------------------------------------------------------
--------to create any dynamic website you should to follow below steps
1) create the static version of that website
2) we need to figure out where to add dynamic nature to webpage i.e, adding state 
3) divede the code you have written into components if possible
4) check if the logic and code are working with tests
---------------------------------------------------------------------
--------------------create a todo app-------------------------
step-1: create the static version of that website

1) npm create vite@latest
2) cd 3_todo
  npm install
  npm run dev
3) modify the codes
![alt text](image-6.png)
![alt text](image-7.png)

step-2:we need to figure out where to add dynamic nature to webpage i.e, adding state 

![alt text](image-8.png)
![alt text](image-9.png)

--------------------------------------------------------------------------------------------------
## --------------------spring_4_day_5 ------------------------------------------------------------
Q - what is incese in scale for components
-> extension for react-js in vs code is --- ES7 + React/Redux/React-Native snippets
---------------------- note------------------------------------
in React when ever a parent components want to communicate with child components then that will happped by props 
  but
  when child components wnat to communicate with parent then that will happped by the function(callback)

![alt text](IMG_20241012_165528[1].jpg)
![alt text](IMG_20241012_165559[1].jpg)

## -----------------------spring_4_day-6 : for router and useeffect concetp-------------------------------------

step-1: npm create vite@latest
step-2:   cd 1useEffect
          npm install
          npm run dev
step-3; 

--------------------
![alt text](IMG_20241012_165606[1].jpg)
![alt text](IMG_20241012_165617[1].jpg)
![alt text](IMG_20241012_165627[1].jpg)
useEffect is used to call a function onec the render catually happped
ex--
![useEffect main.jsx](image-10.png)
![useEffect app.jsx](image-11.png)
output-
![useEffect-output during fetch](image-12.png)
![useEffect-output during fetch](image-13.png)
![useEffect-ouput after fetch data](image-14.png)
![accessing data from that api](image-15.png)
![ouput for acceessing data ](image-16.png)

note--
focess this error 
![error during use ofasync with useEffect ](image-17.png)
we should not usse the async with useEffect beause async return the promises and useEffect must not return anything besides a function, which is used for clean-up. so for that we we use a function which have this async to fetch the data. 
solve-
![alt text](image-18.png)
![alt text](image-19.png)
--------------------
-----------------useEffect() usecase-1: with empty dependecy array like- useEffect(func,[])--------------------------------------
so,
![alt text](image-20.png)
![alt text](image-21.png)
--output---
![alt text](image-22.png)
![alt text](image-23.png)

by observing output we can say that if the useEffect has empty array dependecy then that useEffect will call one time after once render not after each render.
-----------------useEffect() usecase-2: with empty dependecy array like- useEffect(func)---------------------
![alt text](image-24.png)
--output--
![alt text](image-25.png)
![alt text](image-26.png)
so by observing the output we can say that if we have useEffect without  empty array then that useEffect will call each time after the render.

-----------------useEffect() usecase-3: with  dependecy array like- useEffect(func,dependecy_aarray)---------------------
![alt text](image-27.png)
![alt text](image-28.png)
![alt text](image-29.png)
--output---
![alt text](image-30.png)
![alt text](image-31.png)
now after clcik on ad-task button 
![alt text](image-32.png)
here after click on add-task button that useEffect has call beausce in that depenecy array we mantain the taskList to change its state.
now see to inpput fileds
code image--
![alt text](image-33.png)
--output--
![alt text](image-34.png)
![alt text](image-35.png)

-----------------useEffect() usecase-4: with callback inside callback cleanUp functiion and dependecy array like- useEffect(func)---------------
code--
![alt text](image-36.png)
![alt text](image-37.png)
--output---
![alt text](image-38.png)
then after clcik on add task
![alt text](image-39.png)
![alt text](image-40.png)
![alt text](<Screenshot 2024-10-07 233344.png>)

----------now routrs----------------------------------------
npm create vite@latest
cd 2nd_1Routing
  npm install
  npm run dev
---
react-router---> 
1) for the 1st render we get a bundle with UI + Data 
2) in single page application , no reload should take place  why?, beacuse as reload means getting both UI + Data thats why react works in a way where response only have Data comming from server.
3) when our website got relaod then all the data related to that website will stored in router and based on url it will render, that data.
4) install the npm install react-router-dom

## ---------------------------------------spring_4_day_7: for router concept-----------------------------
1) npm create vite@latest
2) 3rd_2Routing
3)  cd 3rd_2Routing
  npm install
  npm run dev
4)  npm install react-router-dom

## --------- use this website to use the apis ---------------
![alt text](image-64.png)
----------------------------------------------------------------
5) six types of Routing 
   1) Normal Routing
   2) Link Routing
   3) Dynamic Routing/ emplate Routing
   4) Nested Routing
   5) custom Routing
   6) Redirecting Routing

6) Link Routing--> when ever we yse the Link tag then reload doesn't happend when we go from one page to other using this Link tag.   
![spring_4_day_7](image-41.png) 
![alt text](image-42.png)
![alt text](image-43.png)
--output----
![alt text](image-44.png)
![alt text](image-45.png)
![alt text](image-46.png)

 1) Dynamic Routing/ emplate Routing---> it is used to create a dynatic route path 
   1) useParams()--> Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path
   ![alt text](image-47.png)
   ![alt text](image-48.png)
-----------------------------------
   ![alt text](image-49.png)
   ![alt text](image-50.png)
----------------------------------
![alt text](image-51.png)
--output---
![alt text](image-52.png)
![alt text](image-53.png)
---------------------------------------------------------
Q- how to make our route redirect to some link or some page autometically.
ans--> 
![alt text](image-54.png)
to 
![alt text](image-55.png)
ans--> using the six type of Rotuting called as Redirecting Routing 

![alt text](image-58.png)
--output----
![alt text](image-56.png)
![alt text](image-57.png)
---------------------------------------------------------------
problem--
 ![alt text](image-59.png) to fix this type of proble we are using the  4) Nested Routing
 examplee--
 ![alt text](image-60.png)
 -------------------------
 ![alt text](image-61.png)
 ![alt text](image-62.png)
 ![alt text](image-63.png)
 
 

 -----------------
 ![alt text](image-65.png)
## ------------------------------------------------------------------------------------------------------------------
## ------------------Spring_4_day_8 continue the project-----------------------------------------------------------
1) npm create vite@latest
  3rd_3Routing
  cd 3rd_3Routing
  npm install
  npm install react-router-dom
  npm run dev
2) copy all the code of Spring_4_daay_7 and then continuneee
3)  go to thie website for style https://mui.com/material-ui/
4)  go to get stated and click on installation and copy the command and paste in terminal.
5)  ![alt text](image-66.png)
6)  ![alt text](image-67.png)
7)  npm install @mui/material @emotion/react @emotion/styled
8)  ![alt text](image-68.png) copy the and paste in code of Home
9)  ![alt text](image-69.png)
10) it is comming error so comment it 
11) ![alt text](image-70.png)
12) to fix this error again  in terimal  npm install @mui/icons-material
13) ![alt text](image-71.png)
14) ![alt text](image-72.png)
15) ![alt text](image-73.png)
16) ![alt text](image-74.png)
17) ![alt text](image-75.png)
18) ![alt text](image-76.png)
19) now to filter the itmes based on category 
20) this are the apis ![alt text](image-77.png) , ![alt text](image-78.png)
21) now to fetch the data based on category we have to write the code using the useEffect().
22) ![alt text](image-79.png)
23) ![alt text](image-80.png)
24) ![alt text](image-81.png)
25) -------output------------------
26) ![alt text](image-82.png)
27) ![alt text](image-83.png)
28) ![alt text](image-84.png)
29) ![alt text](image-85.png)
--------------------


