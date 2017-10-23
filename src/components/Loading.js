import React, {Component} from 'react'
import catgif from '../catgif.gif'

class Loading extends Component {
  render () {
    return (
      <div>
        <img src={catgif} alt="loading-cat" />
      </div>
    )
  }
}

export default Loading;
