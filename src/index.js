import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './index.css';

import Main from './components/Main';
import Start from './components/Start';
import Summary from './components/Summary';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: new HttpLink( {uri: 'https://api.graph.cool/simple/v1/cjeqyvb6a5gal0100af7ufpdi'}),
    cache: new InMemoryCache(),
});

const withApolloProvider = Comp => (
  <ApolloProvider client={client}>{Comp}</ApolloProvider>
);

var routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/start" component={Start}></Route>
      <Route path="/summary" component={Summary}></Route>
      <Route path="/" component={Main}></Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(withApolloProvider(routes), document.getElementById('root'));
registerServiceWorker();
