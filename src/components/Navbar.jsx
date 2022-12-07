import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/logo.png'
const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon}  size="xx-large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">WiseCrypto</Link>    
            </Typography.Title> 
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

        </div>
    </div>
  )
}

export default Navbar