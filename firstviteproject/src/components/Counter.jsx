import { useState } from 'react'

const Counter = () => 
    {
        const [count, setCount] = useState(12)
        const increase = event => setCount(count +1)
        return(
        <section>
                <button onClick={increase}>
                Increase +1
                </button>
                <p>The value is:: {count}.</p>
        </section> 
        )
    }

export default Counter