


paste the babel cdn
ex- <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>





























--------------------------------------------------------------------------------------------------------------------------
spring_4_day_4
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
spring_4_day-6 : for router and useeffect concetp

step-1: npm create vite@latest
step-2:   cd 1useEffect
          npm install
          npm run dev
step-3; 

--------------------
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
