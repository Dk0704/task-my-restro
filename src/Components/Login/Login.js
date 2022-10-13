import React, { useEffect, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login, selectUser } from '../../features/counter/userSlice';


const Login = ({ setUser }) => {
    const [creds, setCreds] = useState({ uname: "", password: "" });
    const dispatch = useDispatch();
    let users = [];

    let history = useNavigate();
    const fetchUsers = async () => {
        const usersdata = await fetch('https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view', {
            headers: {
                'Authorization': 'Bearer keyfXgn8PL6pB3x32'
            }
        });
        users = (await usersdata.json()).records
        console.log(users)
    }
    useEffect(() => {
        fetchUsers();
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inside subbmot")
        const auth = new Promise(function (resolve,reject) {
            console.log("authenticat ing")
            console.log(creds)
            for (let i = 0; i < users.length; i++) {
                console.log("inside auth")
                if (users[i].fields['username'] === creds.uname && users[i].fields["password"] === creds.password) {
                    resolve("mathched ")
                    //
                    return
                }
            }
        });
        auth.then(() => {
            console.log("loggedin ")
            dispatch(login({
                // id: users[i].id,
                username: creds.uname,
                password: creds.password
            }))
            setUser(creds)
            history('/home')
        }, console.log("login unsucc essful"))
    };

    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }
    return (
        <div className='login'>

            <div className='box'>
                <h1>Login to LoopKitchen </h1>

                <form onSubmit={handleSubmit}>
                    {/* <form > */}
                    <label htmlFor="uname" className="form-label">User Name</label>
                    <input type="uname" className="form-control" value={creds.uname} onChange={onChange} id="uname" name="uname" aria-describedby="unamehelp" />
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={
                        creds.password} onChange={onChange} id="password" name="password" />


                    {/* <button type="submit" className="" >Login</button> */}
                    <Button variant="contained" className='add' onClick={handleSubmit}> Login </Button>
                    {/* <button className="btn btn-primary mx-2" onClick={handleForgot} >Forgot Password</button> */}
                </form>
            </div>
        </div>
    )
}

export default Login

