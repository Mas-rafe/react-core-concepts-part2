
import './App.css'
import Batsman from './Batsman'

import Counter from './Counter'

function App() {
  function handleClick(){
    alert('I am Clicked')
  }
 const handleClick3 =() =>{
  alert('clicked 3')
 } 

 const handleAdd5 = (num) =>{
  const newNum = num + 5;
  alert (newNum)
 }
  return (
    <>
    
      <h1>Vite + React</h1>
        
        <Batsman></Batsman>
        <Counter></Counter>

      {/* <button onClick={handleClick}>Click Me</button>
     
      <button onClick={function handleClick2(){
        alert('clicked 2')
      }}>Click Me2</button>
      <button onClick={handleClick3}>Click me3</button>
      <button onClick={()=>handleAdd5(10)}>Click Add 5</button> */}
    </>
  )
}

export default App
