// Import Libraries
import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import List from './list';
import Top from './Top';
import Main from './main';

// Create component
function App(){
  return (
    <div>
    <h1>Hello React</h1>
    <Header list='10 Daftar Makanan terenak menurut gwe, no 1 pengen di nikahin 🤭'/>
    <Top/>
    <h1>Component dari Class App</h1>
    <List /> 
    <Footer judul='Halaman Footer' nama='Dio DWi Prassetyo' />
    </div>
  );
}

// Export Default
export default App;
