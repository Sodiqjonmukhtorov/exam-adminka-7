import React from 'react'
import './css/home.css'
import { IoExit } from "react-icons/io5";


export const Home = () => {
  return (
    <div>
      <header>
<div className="header__block">
          <div>
            <h1 className='header__title'>Товары</h1>
            <p className='header__text'><a href="#">Главная</a> / <a href="#">Товары</a></p>
          </div>
          <a className='header__link' href="/login"><IoExit /> EXIT</a>
        </div>
      </header>
      <main>
        <section className='main'>
          
        </section>
      </main>
    </div>
  )
}
