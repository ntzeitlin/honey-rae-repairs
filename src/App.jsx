import { useState } from "react"

export const App = () => {

  const [count, setCount] = useState(0)

  const handleBtnClick = () => {
    setCount(count + 1)
  }

  return <>
    <h1 className="welcome">Hello World!
    </h1>
    <div>Count: {count}</div>
    <button className="btn-primary" onClick={handleBtnClick}>Click Me!</button>
  </>
}
