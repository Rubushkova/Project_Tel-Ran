import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <nav className={s.nav}>
    <Link to='/'>MainPage</Link>
    <Link to='/categories'>Categories</Link>
    <Link to='/all_products'>AllProducts</Link>
    <Link to='/discounted_products'>All sales</Link>
</nav>
  )
}
