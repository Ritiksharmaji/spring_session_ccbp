import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserMiddleWare } from '../../redux/middleware/userMiddleWare';

function UserRedux() {
    const { loading, error, user } = useSelector((store) => store.userState);

    const dispatch = useDispatch();
    useEffect(function(){
        dispatch(fetchUserMiddleWare)
    },[])

    const heading = <h2>User Example</h2>;
    if (loading) {
        return (
            <>
                {heading}
                <h3>.....Loading</h3>
            </>
        );
    }
    if (error) {
        return (
            <>
                {heading}
                <h3>Error happened</h3>
            </>
        );
    }
    return (
        <>
            {heading}
            <h4>Name: {user?.name}</h4> {/* Optional chaining to avoid undefined errors */}
            <h4>Phone: {user?.phone}</h4>
        </>
    );
}
export default UserRedux;
