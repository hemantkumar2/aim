import React from 'react';
import Header from './Header'
import Footer from './Footer'
import { Route, Switch } from 'react-router-dom'
import Contact from '../Contact'
import About from '../About';
import Home from '../Home'
import Faculty from '../Faculty'
import Goal from '../Goal'
import Classroom from '../Classroom'
import StudentSection from '../StudentSection'
import Notification from '../Notification'
import Media from '../Media'

const Layout = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/About' component={About} />
        <Route exact path='/faculty' component={Faculty} />
        <Route exact path='/Goal' component={Goal} />
        <Route exact path='/student-section' component={StudentSection} />
        <Route exact path='/classroom' component={Classroom} />
        <Route exact path='/notification' component={Notification} />
        <Route exact path='/Media' component={Media} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Layout;
