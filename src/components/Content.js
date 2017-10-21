import React, {Component} from 'react'
import Stats from './Stats'
import Blurb from './Blurb'

class Content extends Component {
  render(){
    return(<div>
      <h2>Home</h2>
      <p>Welcome to this practice website.</p>

      <Stats location='Seattle, WA' catName='Oolong Kittea' yogurt='lemon pear' />
      <Blurb />
      </div>)
  }
}

export default Content;
