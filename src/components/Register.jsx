import React, { useState } from "react";

export const Register = (props) => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(Email);
        try {
            const body = {Email, password, name};
            
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
            <h2>Register</h2>
        <form className="formlog" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={Email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="buton" type="submit">Log In</button>
        </form>
        <button className="buton" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}

export default Register;