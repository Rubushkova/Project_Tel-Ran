import React, { useEffect, useState } from 'react'
import s from './index.module.css'
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import NavMenu from '../NavMenu';
import { SlHeart } from "react-icons/sl";
import { SlHandbag } from "react-icons/sl";
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DarkMode from '../DarkMode';

export default function Header() {

  const favoriteState = useSelector((store)=> store.favoriteProducts);
  const favoriteCount = favoriteState.length 

  const [theme, setTheme] = useState('light'); // начальная тема

  useEffect(() => {
    // Загрузка сохранённой темы из localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme; // установка класса для body
  }, []);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // переключаем тему
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // сохраняем в localStorage
    document.body.className = newTheme; // установка класса для body
  };


  return (
    <header className={s.header}>

        <div className= {s.logo}>
           <img src={logo} alt="Logo"/>
           <div className={`${s.themeSwitch} ${theme}`} onClick={switchTheme}>
            <DarkMode/>
          {/* <FiSun className={s.sun}/>
          <FaCircle className={s.circle}/>
          <IoMoonOutline className={s.moon}/>              */}
           </div>
        </div>


        <div className={s.navigation}>
            <button>1 day discount!</button>
         <NavMenu/>   
        </div>

        
        <div className={s.icons}>
            <Link to='/favorite'>
            <SlHeart/> 
            {favoriteCount > 0 && <span>{favoriteCount}</span>}   
            </Link>

            <Link>
            <SlHandbag/>
            </Link>

        </div>


    </header>
  )
}
