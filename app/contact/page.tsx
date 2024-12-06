'use client'
import React from 'react'
import Style from './contact.module.css'
import { Input } from '@/components/ui/input';
const contact = () => {
  return (
    <><div className='container py-8 xl:py-12'>
      <p>whats app  : 087820721988</p>
        <p>email      : dorisunandi@gmail.com </p> 
    </div>
    <div className={Style.centered} >
      <div className={Style.wrapper}>
      <div className= {Style.fromwrapper}>
        <form action="">
          <h2 id='h2'className={Style.centered}>login</h2>
          <div className={Style.inputgroup}>
            <Input type='text' required></Input>
            <label htmlFor="">username</label>
          </div>
          <div className={Style.inputgroup}>
            <Input type='password' required></Input>
          <label htmlFor="">password</label>
          </div>
          <div className={Style.remeber}>
            <label htmlFor=""><input type='checkbox'></input> Remember me</label>
          </div>
          <button type="submit" className={Style.button}>Login</button>
          <div className={Style.signUplink}>
            <p>Don't have an account?<a href='#'
            className={Style.signUplink}>Sign Up</a></p>
          </div>
        </form>
      </div>

    </div>
    
    </div>
    </>
  )
}

export default contact