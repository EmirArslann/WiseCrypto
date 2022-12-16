import React, { useState } from "react";

export const Login = (props) => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(Email);
        try {
            const body = {Email, password};
            
            const response = await fetch("http://localhost:8000/users", {
                method : "POST",
                headers : { "Content-Type" : "application/json" },
                body : JSON.stringify(body),
                
            });
            console.log(response)
        } catch (err) {
            console.error(err.message);
            
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={Email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}

export default Login;