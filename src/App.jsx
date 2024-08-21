/* const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part= (props) =>{
  return(
    <div>
      <p>
        {props.nombre} {props.number}
      </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part nombre={props.parts[0].name} number={props.parts[0].exercises}/>
      <Part nombre={props.parts[1].name} number={props.parts[1].exercises}/>
      <Part nombre={props.parts[2].name} number={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
    {
    name:'Fundamentals of React',
    exercises: 10
  },
  {
    name:'Using props to pass data',
    exercises:7
  },
  {
    name:'State of a component',
    exercises: 14
  }
]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
 */
/* const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
} */
/* import { useState } from "react"

const App = () => {
  const [counter,setCounter] = useState(0)
  setTimeout(()=>{
    setCounter(counter + 1)
  ,1000})
  console.log("rendering....",counter)
  return (
    <div>{counter}</div>
  )
} */

/* import { useState } from "react"

const App = () => {
  const[counter,setCounter]= useState(0)
  const increase = () => setCounter(counter + 1)
  const reset = () => setCounter(0)
   const handleClick = () =>{
    setCounter(counter + 1)
    console.log('clicked')
  } 


  return(
    <div>
      <div>{counter}</div>
      <button onClick={increase}>
        Plus
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  )
} */
/*import { useState} from "react"

const Display = ({counter}) => <div>{counter}</div>

const Button = ({event, name}) => (
    <button onClick={event}>
    {name}
    </button>
)


const App = () => {
  const [counter,setCounter] = useState(0)
  const increase = () => setCounter(counter+1)
  const decrease = () => setCounter(counter - 1)
  const reset = () => setCounter(0)

  return(
    <div>
      <Display counter={counter}/>
      <Button event={increase} name='Plus' />
      <Button event={reset} name='Reset' />
      <Button event={decrease} name='Minus'/>
    </div>
  )
}*/

/* import { useState } from "react"

const App = () =>{
  const[clicks,setClicks] = useState({left:0,right:0})
  
  const handleLeftClick = () =>{
    const newClicks = {
      left:clicks.left + 1,
      right:clicks.right
    }
    setClicks(newClicks)
  }

  const handleRightClicks = () =>{
    const newClicks = {
      left:clicks.left ,
      right:clicks.right + 1
    }
    setClicks(newClicks)
  }
  return(
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClicks}>right </button>
      {clicks.right}
    </div>
  )
} */

/* import { useState } from "react"

const History = (props) =>{
  if(props.allClicks.length == 0){
    return(
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({event, name}) => (
  <button onClick={event}>
  {name}
  </button>
)

const App = () =>{
  const[left,setLeft] = useState(0)
  const[right,setRight] = useState(0)
  const[allClicks,setAll] = useState([])
  const[total,setTotal] = useState(0)

  const handleLeftClick = () =>{
    setAll(allClicks.concat('L'))
    const updateLeft = left+1
    setLeft(updateLeft)
    setTotal(updateLeft+right)
  }

  const handleRightClick = () =>{
    setAll(allClicks.concat('R'))
    const updateRight = right + 1
    setRight(updateRight)
    setTotal(left+updateRight)
  }

  return(
    <div>
      {left}
      <Button event={handleLeftClick} name='Left'/>
      <Button event={handleRightClick} name='Right'/>
      {right}
      <History allClicks={allClicks}/>
      <p>Total {total}</p>
    </div>
  )
} */

import { useState } from "react"


const Button = (props) =>{
  return(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)}

const Display = (props) => {
  return(
    <div>{props.value}</div>
  )
}

const App = () =>{
  const[value,setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('Value now', newValue)
    setValue(newValue)
  }

  return(
    <div>
      <Display value={value}/>
      <Button handleClick={()=>setToValue(1000)} text='Thousand'/>
      <Button handleClick={()=>setToValue(0)} text="Reset"/>
      <Button handleClick={()=>setToValue(value+1)} text='Increment'/>
    </div>
  )
}
 
export default App

