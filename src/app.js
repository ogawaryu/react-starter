import React from "react"
import ReactDOM from "react-dom"


class MainApp extends React.Component {
  render() {
    return (
            <div>
              <h1>First Component 1</h1>
            </div>
          )
  }
}

ReactDOM.render(<MainApp/>, document.getElementById('react-aplication'))
