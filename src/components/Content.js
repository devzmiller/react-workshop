import React, {Component} from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class Content extends Component {
  render () {
    if (this.props.content === 'home') {
      return (<Home />)
    } else if (this.props.content === 'contact') {
      return (<Contact />)
    } else {
      return (<About />)
    }
  }
}

export default Content
