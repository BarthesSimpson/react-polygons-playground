import React from 'react'
import { Fragment, Link } from 'redux-little-router'
import styled from 'styled-components'

import Polygons from 'components/polygons'

import logo from '../img/Target-Logo.jpg'

const App = styled.div`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  background-color: #f3cccd;
`
const NavBarTop = styled.div`
display: flex;
`
const Logo = styled.div`
  background-color: #222;
  text-align: left;
  flex: 0.2;
  padding: 10px;
  padding-left: 30px;
`
const Nav = styled.ul`
  flex: 0.8;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #222;
`
const ListItem = styled.li`display: inline;`

const NavLink = styled(Link)`
  color: white;
  margin-right: 100px;
  font-size: 1.5em;
  text-decoration: none;
  &:visited {
    color: white;
  }
`

export default () => (
  <App>
    <NavBarTop>
      <Logo>
        <img src={logo} alt="Target Logo" width={40} height={40} />
      </Logo>
      <Nav>
        <ListItem>
          <NavLink href="/">Floor Planner</NavLink>
        </ListItem>
      </Nav>
    </NavBarTop>

    <hr />

    <Fragment forRoute="/">
      <Polygons />
    </Fragment>
  </App>
)

/* If we want to do something after initial load:
import { initializeCurrentLocation } from 'redux-little-router';

// ...after creating your store
const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
} */
