import loginn from './images/loginn.png';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
const [username, setUserName] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("");

const userData={
    usename:"admin",
    password:"admin"
} 

function submit(){
    if(username===userData.usename && password===userData.password){
        localStorage.setItem("user",JSON.stringify(true))
        setError("");
        history.push('/Home')
    }else{
        setError("invalid credentials");
    }
}

    const history = useHistory();
    return (<>
        <div className="back-img">
            <img src={loginn} alt="login" />
            </div>
        <div className="login">
            <div>
            <h2>User Login</h2>
            <div>
                <p><b>User Name</b></p>
                <input style={{width:"90%",height: "3vh"}} onChange={(e)=>setUserName(e.target.value)} value={username}  type="text" />
            </div>
            <div>
                <p><b> Password</b></p>
                <input style={{width:"90%", height: "3vh"}}  onChange={(e)=>setPassword(e.target.value)} value={password} type="password" />
            </div>
            <div>
            <p style={{color:"red"}}>{error}</p>
            <button className='Login-Button' onClick={submit}>Login</button>
            </div>
            </div>
        </div>
        </>
    );
}

export default Login;