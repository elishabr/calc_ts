import { useState } from "react"

function Home() {

  const [data, setData] = useState('')

  const create = () => {
    
  }

  return (
  <div className="calculator">
    <input type="text" className="display" value={data}/>
    <button 
      className="button"
      onClick={() => setData(data+'7')}
    >7</button>
    <button className="button"
      onClick={() => setData(data+'8')}
    >8</button>
    <button className="button"
      onClick={() => setData(data+'9')}
    >9</button>
    <button className="button">С</button>
    <button className="button"
      onClick={() => setData(data+'4')}
    >4</button>
    <button className="button"
      onClick={() => setData(data+'5')}
    >5</button>
    <button className="button"
      onClick={() => setData(data+'6')}
    >6</button>
    <button className="button">AC</button>
    <button className="button"
      onClick={() => setData(data+'1')}
    >1</button>
    <button className="button"
      onClick={() => setData(data+'2')}
    >2</button>
    <button className="button"
      onClick={() => setData(data+'3')}
    >3</button>
    <button className="button"
      onClick={() => setData(data+'-')}
    >-</button>
    <button className="button"
      onClick={() => setData(data+'0')}
    >0</button>
    <button className="button"
      onClick={() => setData(data+'.')}
    >.</button>
    <button className="button">=</button>
    <button className="button"
      onClick={() => setData(data+'+')}
    >+</button>
  </div>)
  }
  
  export default Home
  