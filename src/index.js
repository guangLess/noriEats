import App from "./app"

console.log('webpack entry point🍯')

const arr = [5,4,3]
const esSix = () => console.log(...arr)
window.esSix = esSix
