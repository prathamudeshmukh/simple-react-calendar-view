import React, {Component} from 'react'
import {render} from 'react-dom'

import Calendar from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <Calendar/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
