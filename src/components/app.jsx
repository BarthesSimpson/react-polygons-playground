import React from 'react'
import { Fragment, Link } from 'redux-little-router'
import styled from 'styled-components'

import Polygons from 'components/polygons'

const App = styled.div`
  margin: 30px;
`

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`

const ListItem = styled.li`
  display: inline;
`

export default () =>
  <App>
    <List>
      <ListItem><Link href="/polygons">Floor Planner</Link></ListItem>
    </List>

    <hr/>

    <Fragment forRoute="/polygons">
      <Polygons />
    </Fragment>
  </App>


/* If we want to do something after initial load:
import { initializeCurrentLocation } from 'redux-little-router';

// ...after creating your store
const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
} */
