import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/Page'
import Loading from './components/Loading'

class App extends Component {
  constructor () {
    super();
    this.state = {
      view: "loading"
    }
    this.loadPage = this.loadPage.bind(this)
  }
  loadPage() {
    this.setState({view: 'page'})
  }
  componentDidMount() {
    window.setTimeout(this.loadPage, 3000)
  }
  render() {
    if (this.state.view === 'loading') {
      return (
        <Loading />
      )
    } else {
      return (
        <Page />
    )}
  }
}

export default App;
