import React from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bellicon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'

function Navbar() {
    return (
        <div className={style.navbar}>
            <div className='right'>
                <img src={logo} alt="" />
                <ul className={style.li}>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>My List</li>
                    <li>Browse My Language</li>
                </ul>
            </div>
            <div className="left">
                <img src={search} alt="" className='icon' />
                <p>Children</p>
                <img src={bellicon} alt="" className='icon' />
                <div className="profile">
                    <img src={profile} alt="" className='profile' />
                    <img src={bellicon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar

