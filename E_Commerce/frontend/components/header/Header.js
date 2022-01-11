import React ,{useContext}from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icons/bar.svg'
import Cart from './icons/cart.svg'
import Close from './icons/close.svg' // download icons frim font awesome 
import { Link } from 'react-router-dom'
import './Header.css'

function  Header  () {
    const value = useContext(GlobalState)
    return (
        <header>
            {/* <h1> header </h1> */}
            {/* {value} */}
            <div className='menu'>

                <img src={Menu} alt="hhjj" width="50"/>
            </div>
            <div className='logo'>
                <h1>
                    <Link to='/'> MY SHOP </Link>
                </h1>
            </div>

            <ul>
                <li>
                    <Link to='/'> Products</Link> <br/>
                    <Link to='/login'> Login</Link>
                    <li>
                        <img src={Close} alt="close"  width='30'/>
                    </li>

                </li>
            </ul>

            <div className='cart-icon'>
                <span> 0</span>
                <Link to=''>
                    <img src={Cart} alt="cart" width='36'/>
                </Link>
            </div>
        </header>
    )
}

export default Header
