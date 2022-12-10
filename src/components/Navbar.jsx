import React  from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import jwt_decode from 'jwt-decode';


import icon from '../images/logo.png'
import { useState } from 'react';
import { useEffect } from 'react';
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
    const [user, setUser] = useState([]);

    console.log(user)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize)

        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    }, []);

    useEffect(() => {
        if(screenSize< 768){
            setActiveMenu(false)
        }else{
            setActiveMenu(true)
        }

    }, [screenSize])
    
    function handleCallbackResponse(response) {
        const div =  document.getElementById("signInDiv")
        console.log("Encoded JWT ID token" + response.credential)
        let userObject = jwt_decode(response.credential)
        console.log(userObject)
        setUser(userObject);
        div.hidden = true;

    }

    function handleSignOut(event){
        const div =  document.getElementById("signInDiv")
        setUser({});
        div.hidden = false;

    }
     
    useEffect(() => {
        /* global google*/
        google.accounts.id.initialize({
            client_id: "275235180683-pmecb035a2i055fj6bfumc7enuf3vtjk.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        )
    }, [])


  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon}  size="xx-large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">WiseCrypto</Link>    
            </Typography.Title> 
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined></MenuOutlined>
            </Button>
        </div>
        <div id='signInDiv'>
        
        </div>
        < button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
        { user && 
                <div className='user-div' >
                    <img src={user.picture}></img>
                    <p className='user-name'>{user.name}</p>
                </div>
        
        }

        {activeMenu && (
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">CryptoCurrencies</Link>
                </Menu.Item>
                
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exhanges">Exchanges</Link>
                </Menu.Item>
                
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
                
            </Menu>
            
        )}


        
            

    </div>
    
  )
}

export default Navbar