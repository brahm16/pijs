import React, { useState, useEffect,Component } from 'react';

import { NavLink, Redirect  } from "react-router-dom";
import { getCookie } from '../helpers/auth';

let url="http://localhost:3000/login"

const deplace=()=>{
  window.location.replace(url);
}

const user =getCookie("user");
const username=getCookie("username");

const Header=()=> {
  
    return (
      <div className="header">
        <div className="wrap">
          <div className="wrap_float">
            <div className="header__top">
              <div className="tel">
                <a href="tel:0000000000">+1 1235 6789 10</a>
              </div>
            
              <div className="email" >
              
              </div>
              <div className="socials">
                <a href="#" className="a facebook"></a>
                <a href="#" className="a instagram"></a>
                <a href="#" className="a pinterest"></a>
                <a href="#" className="a twitter"></a>
              </div>
            </div>
            <div className="header__bottom">
              <div className="logo">
                <NavLink to="/home">
                  {" "}
                  <span className="my-title">Zaghouan</span>
                </NavLink>
              </div>
              
                  {
                    /* 
                    <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                      <Label htmlFor="username">Username</Label>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        innerRef={(input) => (this.username = input)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        innerRef={(input) => (this.password = input)}
                      />
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="remember"
                          innerRef={(input) => (this.remember = input)}
                        />
                        Remember me
                      </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">
                      Login
                    </Button>
                  </Form>
                    */
                  }
                  
             

              <div className="menu" id="js-menu">
                <div className="close"></div>
                <div className="scroll">
                  <a className="current">Home</a>
                  <div className="scroll_wrap">
                    <ul>
                      <li className="dropdown_li">
                      </li>
                      <li className="dropdown_li">
                        <NavLink to="/"> Home</NavLink> 
                      </li>
                      <li className="dropdown_li">
                       <NavLink to="/about"> About</NavLink>
                      </li>
                      <li className="dropdown_li">
                        <NavLink to="/services">Services</NavLink>
                      </li>
                      <li className="dropdown_li">
                       <NavLink to="/">Places</NavLink>
                      </li>
                      <li className="dropdown_li">
                       <NavLink to="/contact">Contact</NavLink>
                      </li>
                      <li className="dropdown_li">
                       
                        
                      </li>
                      <li className="dropdown_li">
               
                   {/**
                    *  na7inehh nchoufoulou 7all m3a login 
                    * <button
                  onClick={() => {
                    signout(() => {
                      toast.error('Signout Successfully');
                      his.push("/login")
                    });
                  }}
                  className='mt-5 tracking-wide font-semibold bg-pink-500 text-gray-100 w-full py-4 rounded-lg hover:bg-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-out-alt  w-6  -ml-2' />
                  <span className='ml-3'>Signout</span>
                </button>
                    */} 
                    {
                      username? (<a>{username}</a>): (<a onClick={deplace}>Login</a>)
                    }
                     
                    
                                                 
                        
                      {/*  {
                          user.name ?
                          (""):
                          (
                            <NavLink to="/login">  <span>{t('login')}</span></NavLink>

                             
                          )
                        }
                           */}               </li>
                     
                    </ul>
                  </div>
                  <div className="bottom">
                    <div className="tel">
                      <a href="tel:+11235678910">+1 1235 6789 10</a>
                    </div>
                    <div className="email">
                      <a href="mailto:info@hellodigi.ru">info@hellodigi.ru</a>
                    </div>
                    <div className="socials">
                      <div className="links">
                        <a href="#" className="fb"></a>
                        <a href="#" className="instagram"></a>
                        <a href="#" className="pinterest"></a>
                        <a href="#" className="twitter"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mobile_btn" id="mobile_btn">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



export default (Header);
