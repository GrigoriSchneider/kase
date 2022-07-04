import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';
import About from './page/About';
import Error from './page/Error';
import { RoomProvider } from './context';
import Appartment from './page/Appartment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoomProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/appartment/:id' component={Appartment} />
          <Route exact path='/about' component={About} />
          <Route path='*' component={Error} />
        </Switch>
      </BrowserRouter>
    </RoomProvider>
  </React.StrictMode>
);
