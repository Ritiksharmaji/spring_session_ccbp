


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