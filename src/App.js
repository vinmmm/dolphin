import React, { Component } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  createBatchingNetworkInterface,
} from 'react-apollo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeView from './views/HomeView'
import CreateView from './views/CreateView'
import DetailView from './views/DetailView'

import './App.css';
import Adminv2ContainerComponent from './adminv2/Adminv2ContainerComponent';
import AdminApolloApp from './adminv2/AdminApolloApp';

import ZosoContainer from './zoso/ZosoContainer';

import DolphinConsultingContainer from './consulting/DolphinConsultingContainer';

import ProfileContainer from './profile/ProfileContainer';


import ProfileContainerRedux from './profile-w-redux/ProfileContainerRedux';

import ZReduxContainer from './zredux/ZReduxContainer';

import ReduxCommentComponent from './commentsredux/ReduxCommentComponent';

import ReduxOne from './counter-redux/ReduxOne'; 

const networkInterface = createBatchingNetworkInterface({
  uri: 'http://localhost:3030/graphql',
  batchInterval: 10,
  opts: {
    credentials: 'same-origin',
  },
})

const client = new ApolloClient({
  networkInterface: networkInterface,
})


class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path="/" component={Adminv2ContainerComponent} />
            <Switch>
              <Route exact path="/home/" component={HomeView} />
              <Route exact path="/tacos/create/" component={CreateView} />
              <Route exact path="/tacos/:salsa/" component={DetailView} />
              <Route exact path="/zoso" component={ZosoContainer} />
              <Route exact path="/consulting" component={DolphinConsultingContainer} />  
              <Route exact path="/profile" component={ProfileContainer} />
              <Route exact path="/profile-w-redux" component={ProfileContainerRedux} /> 
              <Route exact path="/zredux" component={ZReduxContainer} />
              <Route exact path="/commentsredux" component={ReduxCommentComponent} />
              <Route exact path="/counter-redux" component={ReduxOne} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
