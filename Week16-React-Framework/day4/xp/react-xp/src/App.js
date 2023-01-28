import React, { Component } from 'react'
import {ErrorBoundary} from './component/ErrorBoundary.component'
import { BrowserRouter, Route, Routes, NavLink, json } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { PortList } from './component/PostList';
import { SocialMedia } from './component/socialMedia.component';
import { SKills } from './component/Skills.component';
import { Experiences } from './component/Experience.component';

const routes = (
    <Routes>
      <Route path='/' element={<PortList />}> </Route>
      <Route path='/profile' element={<ProfilePage />}> </Route>
      <Route path='/shop' element={<ShopPage />}> </Route>
      <Route path='/social' element={<SocialMedia />}> </Route>
      <Route path='/skill' element={<SKills />}> </Route>
      <Route path='/experiences' element={<Experiences />}> </Route>
    </Routes>
);

export default class App extends Component {

  handleClick = async() => {
    const url = 'https://webhook.site/a0e3479d-01d8-46d5-bd25-ea890b0165c3'
    try {
      const body = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      };
      const options = {
        method: "POST",
        Headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
      const res = await fetch(url, options);
      const resJson = await res.json();
      console.log(resJson);
    } catch (err) {
      console.error(err);
    }
  }; 
  render() {
    return (
      <>
        <ErrorBoundary>
          <button onClick={this.handleClick}>Press me to post data</button>
          <BrowserRouter>
            <Navbar />
            <ErrorBoundary>
              {routes}
            </ErrorBoundary>
          </BrowserRouter>
        </ErrorBoundary>
      </>
      
    );
  }
}

function Navbar() {
  return (
  <>
    <h1>Welcome on the landing page</h1>
    <p>
      <NavLink to='/'>Home</NavLink>
    </p>
    <p>
      <NavLink to='/profile'>Profile</NavLink>
    </p>
    <p>
      <NavLink to='/skill'>Skills</NavLink>
    </p>
    <p>
      <NavLink to='/shop'>Shop</NavLink>
    </p>
    <p>
      <NavLink to='/social'>Social Media </NavLink>
    </p>
    <p>
      <NavLink to='/experiences'>Experiences</NavLink>
    </p>
    
  </>
  )
}



function ProfilePage(){
  return <h1>Profile</h1>
}

function ShopPage(){
  throw new Error("error occured");
  return <h1>Shop</h1>
}