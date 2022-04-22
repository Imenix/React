import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import Counter from './components/Counter'



const App = () => (
  
    <div>
      <h1>My counter app</h1>
      <Counter />
    </div>
    )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>
  //         My React App Mikul
  //       </h1>

  //     </header>
  //     <main>
  //     <img src={logo} className="App-logo" alt="logo" />
  //       <p>Hello Vite + React!</p>
  //       <p>
  //         <button type="button" onClick={() => setCount((count) => count + 1)}>
  //           count is: {count}
  //         </button>
  //         <button onClick={()=> setCount(count -1)}>Minus</button>
  //       </p>
  //       <p>
  //         Edit <code>App.jsx</code> and save to test HMR updates.
  //       </p>
  //       <p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //         {' | '}
  //         <a
  //           className="App-link"
  //           href="https://vitejs.dev/guide/features.html"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Vite Docs
  //         </a>
  //       </p >
  //     </main>
  //   </div>
  // )


export default App
