
import React  from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import Login from './Login';
import Register from './Register';


import icon from '../images/logo.png'
import { useState } from 'react';
import { useEffect } from 'react';
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
    const [currentForm, setCurrentform] = useState("login");

    


    const toggleForm = (formName) => {
        setCurrentform(formName);
      }

    
      
      
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
                {
                    currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
                }
            <>
               
            </>    

            </Menu>
            
        )}


        
            

    </div>
    
  )
}

export default Navbar