import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/layout'
import Gists from './containers/gists'
import Gist from './containers/gist'
import GistsByUser from './containers/user-gists'

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/gists/:id">
            <Gist />
          </Route>
          <Route path="/user">
            <GistsByUser />
          </Route>
          <Route path="/">
            <Gists />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}
