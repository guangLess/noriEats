import React, {Component} from 'react'
import ReactDom from 'react-dom'

// const getAppleTest = (callback) => {
//     fetch('/api/apple').then(res => res.json())
//     .then(callback(resJson))
// }

class App extends Component{
    constructor(props){
        super()
        this.state = {
            content: ''
        }
    }
    componentDidMount() {
        fetch('/api/apple')
        .then(res => res.json())
        .then(resJson => {
            console.log("----->", resJson)
            this.setState({
                content: JSON.stringify(resJson)
            })
        })
        //localStorage.setItem('nori', 'eats apple')
    }
    render(){
      return (
        <div>
            <p> New York hello 😇 front, nori likes apples. </p>
            <p>content: {this.state.content}</p>
        </div>
        )
    }
}

// const App = () => {
//     return (
//         <div>
//         <p> New York hello 😇 front, nori likes apples. </p>
//         </div>
//     )
// }

export default App

ReactDom.render(<App />, document.getElementById('app'))
