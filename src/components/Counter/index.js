import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button type="button" className="button" onClick={this.onDecrement}>
            Decrement
          </button>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
