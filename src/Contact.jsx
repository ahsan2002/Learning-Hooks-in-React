import React from 'react';
import {useNavigate} from 'react-router-dom';

const Contact=()=>{
    const navi=useNavigate();

    const changepg=()=>{
        // alert('hi');
        navi('/');
    }

    return(<>
    <h1>Hello,i am Contact page</h1>
    <button onClick={changepg}>Go to About Page</button>
    </>) 
}

export default Contact;