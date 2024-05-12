import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa6";

import Badge from '@mui/material/Badge';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./navbar.css"
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <ul className='nav-list'>
                        <li>
                            <Link>Shop </Link>
                        </li>
                        <li>
                            <Link>Philosophy</Link>
                        </li>
                        <li>
                            <Link>Farmer's Movement</Link>
                        </li>
                        <li>
                            <Link>Engage</Link>
                        </li>
                        <li>
                            <Link>Connect</Link>
                        </li>
                        <li>
                            <Link>Rewards</Link>
                        </li>
                    </ul>
                    <ul className='nav-search'>
                        <div className='input-search'>
                            <input type="text" name="" id="" placeholder='Search' />
                        </div>
                        <div className='nav-account'>
                            <li className='color-gray cursor-pointer'><FaUser /></li>
                            <li>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <FavoriteBorderIcon />
                                    </StyledBadge>
                                </IconButton>
                            </li>
                            <li className='cursor-pointer'> <Badge badgeContent={8} color="primary">
                                <ShoppingCartIcon color="action" />
                            </Badge></li>

                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
