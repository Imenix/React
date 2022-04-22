import { useState } from 'react'

const Counter = () => {
const [count, setCount] = useState(0)   
const increase = event => setCount(count + 1)
    return(

            <section>
            <button onClick={increase}>Click to increase</button>
            <p>The value is {count}</p>
            </section>
        
        )
}

export default Counter