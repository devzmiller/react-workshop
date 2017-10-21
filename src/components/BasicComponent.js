import React, {Component} from 'react'
import MyFirstComponent from './MyFirstComponent'
import NewComponent from './NewComponent'

class BasicComponent extends Component {
  render(){
    return(<div>
        Hi, I'm a Basic Component!
        <MyFirstComponent />
        <NewComponent />
      </div>
      )
  }
}

export default BasicComponent;
