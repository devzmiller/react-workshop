import React, { Component } from 'react';
import logo from '../logo.svg';
import Navbar from '../containers/Navbar'
import ProfileCard from './ProfileCard'
import Content from './Content'

class Page extends Component {
  constructor() {
    super();
    this.state = {
      content: "home"
    }
  }
  go(event) {
    this.setState({content: event.target.id})
  }
  render() {
    return (
      <div className="App">

        <Navbar onClick={(event) => this.go(event)} />

      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard name='Devin Miller' />
          </div>
          <div className='col-md-8'>
            <Content content={this.state.content} />
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default Page;
