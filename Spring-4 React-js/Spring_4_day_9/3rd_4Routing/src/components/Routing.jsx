import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, Navigate } from "react-router-dom";
const Routing = () => {
    return (
        <div>
            <h1>Routing..</h1>
            <nav>
            <ul>
                {/* <li>home</li>
                <li>login</li>
                <li>About</li> */}
               <li> <Link to='/home'>Home</Link> </li>
               <li> <Link to='/about'>About</Link> </li>
                <li> <Link to='/login'>Login</Link> </li>
               <li>  <Link to='/service'>Service</Link> </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/home" element={<Home/>} ></Route>
            <Route path="/about/*" element={<About/>}/>
            {/* the blow Routing is for Dynamic Routing    */}
            <Route path='/users/:id' element={<User isAdmin={true} />}/>  
            {/*tthe below routing is for Redirecting Routing  */}
            <Route path='/' element={<Navigate to='/home' />}/>

            <Route path='*' element={<PageNotFound/>} />
        </Routes>
        </div>
    );


    function PageNotFound(){
        return(
            <>
            <h3>Page Not Found</h3>
            </>
        )
    }

    function Home(){
        return(
            <>
            <h3>Home page</h3>
            </>
        )
    }

    function About(){
        return(
            <>
            <h3>About page</h3>
            <Routes>
                <Route path='company' element={<Company/>}/>
                <Route path='ceo' element={<Ceo/>}/>
                <Route path='chairman' element={<Chairman/>}/>
            </Routes>
            </>
        )
    }

    function Company(){
        return(
            <>
            <h1>RKJ Company</h1>
            <h2>sence from 2021 to till</h2>
            </>
        )
    }

    function Ceo(){
        return(<>
        <h1>CEO of this company is Priyanshu sharma</h1>
        </>)
    }

    function Chairman(){
        return(
            <>
            <h1>Chairman of this company id Ankit sharma</h1>
            </>
        )
    }

    function User(props) {
        let params = useParams();
        let [user, setUser] = useState(null);

        useEffect(() => {
            const fetchUser = async () => {
                console.log("useEffect run...")
                const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`);
                const userData = await resp.json();
                console.log(userData);
                setUser(userData);
            };

            fetchUser();
        }, []);

        console.log("Render...")
        return (
            <>
                <h1>User Page</h1>
                {user === null ? <p>Loading...</p> : (
                    <div>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                    </div>
                )}
            </>
        );
    }
}
export default Routing;
