import React, {Component} from 'react'

class ProfileCard extends Component {
  render(){
    return(<div>
      <h3>{this.props.name}</h3>
      <p>Made with cats, Ruby, JavaScript, magic.</p>
      </div>)
  }
}

export default ProfileCard;
