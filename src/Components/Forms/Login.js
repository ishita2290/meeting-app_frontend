import React,{useState} from 'react'
import Axios from "axios";

function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const login = async() =>{
        const response = await Axios.post("http://localhost4014/user/login",{
           
             email,
             password
         })
         if(response){
             console.log(response);
         }
         }
    return (
        <div>
            <h1>Login</h1>
            {/* <div>
                <label>username :</label>
                <input type="text" value="username" placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
                
            </div> */}

            <div>
                <label>email :</label>
                <input type="email" value="email" placeholder="email"  onChange={(e)=>setEmail(e.target.value)}/>
                
            </div>

            <div>
                <label>password:</label>
                <input type="text" value="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
              
            </div>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login