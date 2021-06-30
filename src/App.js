import React from 'react';
//import Home from './routes/Home';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App(){
  return  (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      {/*
      route props에 데이터가 담아 보내지지 않음 
      <Route path="/movie-detail" component={Detail}>
        <Detail/>
      </Route> */
      }
      <Route path="/movie-detail" component={Detail}/>
      <Route path="/about" component={About}/>
    </HashRouter>
  )
  //return <Home />
}

export default App;
