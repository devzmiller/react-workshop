import React, {Component} from 'react'

class Stats extends Component {
  render() {
    return(<div>
      <p className='q'>Where am I located?</p>
      <p>{this.props.location}</p>
      <p className='q'>What is my cat's name?</p>
      <p>{this.props.catName}</p>
      <p className='q'>What is my favorite flavor of yogurt?</p>
      <p>{this.props.yogurt}</p>
    </div>)
  }
}

export default Stats;