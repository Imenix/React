import { useState } from 'react'
import Counter from './Counter'
import './Darkmode.css'

const ShowHide = () => {

    const [isVisible, setIsVisible] = useState(true)
    const [isVisible2, setIsVisible2] = useState(true)
    const toggle = () =>{ setIsVisible(!isVisible)}
    const toggle2 = () => {setIsVisible2(!isVisible2)}

    return (
        <section className="theme-container">
            <button onClick={toggle}>Toggle existence</button>
            {isVisible ? <p>Here I am
                <Counter />
            </p> : null}
            
            
            
            <button onClick={toggle2}>
                Toggle Visibility
            </button>
            <div className={isVisible2 ? '' : 'hidden'}>
            
            <p>Here I am Again</p>
            </div>
            

        </section>
    )
}

export default ShowHide