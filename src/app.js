import React from "react"
import ReactDom from "react-dom"
 
const App = () => {
    return (
        <div>
        <p> New York hello 😇 </p>
        </div>
    )
}

export default App

ReactDom.render(<App />, document.getElementById("app"))