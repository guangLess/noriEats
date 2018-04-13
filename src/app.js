import React, {Component} from "react"
import ReactDom from "react-dom"
 

const getAppleTest = (callback) => {
    fetch('/api/apple').then(res => res.json())
    .then(callback(resJson))
}


class App extends Component{
    constructor(props){
        super()
        this.state = {
            content: ''
        }
    }
    componentDidMount() {
        fetch('/api/apple').then(res=> {
            console.log(res.json())
        })
        // .then(resJson => {
        //     this.setState({
        //         content: resJson.message
        //     })
        // })
    }
    render(){
        return(
       <div>
        <p> New York hello 😇 front, nori likes apples. </p>
        <h1>content: {this.state.content}</h1>
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

ReactDom.render(<App />, document.getElementById("app"))