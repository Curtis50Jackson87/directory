import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap'
import Home from './01-Home.jsx'
import Delete from './02-Delete.jsx'
import Update from './03-Update.jsx'
import Add from './04-Add.jsx'
import UniPage from './05-Uni.jsx'

export default class extends Component {
  render() {
   let brSty = { }
   let MainDiv = {  }
   let btn1 = {  }
   let bar1 ={  }
   const picSty = {  }



    return(
      <div style={MainDiv}>

        <Router>
          <div>

              <div>
                <Nav style={bar1}>
                  <NavItem> <Link style={btn1} to="/">Home</Link> </NavItem>
                  <NavItem> <Link style={btn1} to="/1">Add Contact</Link> </NavItem>
                  <NavItem> <Link style={btn1} to="/2">Delete Contact</Link> </NavItem>
                </Nav>
              </div>

              <hr style={ brSty } />

              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/1" component={Add}/>
                <Route path="/2" component={Delete}/>
                <Route path="/3" component={Update}/>

                <Route path="/:id" component={UniPage} />
              </Switch>


              <hr style={ brSty } />
          </div>
        </Router>

      </div>
    )
  }
}
