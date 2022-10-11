import React from 'react';
import { useParams,useLocation,useNavigate} from 'react-router-dom';

const User=()=>{

    const {name,myname}=useParams();
    const location=useLocation();
    // console.log(location);
    const history=useNavigate();
    console.log(history);

    const mypg=()=>{
        history('/contact')
    }

    return(
    <>
    <h1>I am a user {name} {myname} page</h1>
    <h3>your current location is {location.pathname}</h3>
    <button onClick={mypg}>go to contact page</button>
    {location.pathname === `/user/ahsan/omerjee` ? <button>click</button> : null}
    </>
    )
}

export default User;