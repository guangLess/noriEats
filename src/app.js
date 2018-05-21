import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {getFoodResult} from './networkRequest'

// const getAppleTest = (callback) => {
//     fetch('/api/apple').then(res => res.json())
//     .then(callback(resJson))
// }

//TODO: inplement API clint side request, add a big form, add auth login from firebase


class App extends Component{
    constructor(props){
        super()
        this.state = {
            content: ''
        }
    }
    componentDidMount() {
        //localStorage.setItem('nori', 'eats apple')
        /*
        getFoodResult('apple', callback => {
            console.log('---->', callback)
            this.setState({
                content: JSON.stringify(callback)
            })
        })
        */
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
