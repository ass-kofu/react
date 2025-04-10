import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState(["First Item"]);


    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
    const handleAddItem = () => {
      if (inputValue.trim() !== '') {
        setItems([...items,inputValue]);
        setInputValue("");
      }
    };

  return (
    <>
      <div class="App">
        <div>
          <h1 className="text-2xl font-bold text-teal-600 mb-4">Dynamic List Manager</h1>
        </div>
        <div className="flex mb-4">
          <input
          id='input'
          type='text'
          placeholder='Enter an item' 
          value={inputValue}
          onChange={handleInputChange} 
          />
          <button
          onClick={handleAddItem}
            >Add item
            </button>
        </div>
        <div class="App-body">
          <ul>
            {items.map ((item, index) => (
              <li key= {index} > {item}</li>
            ))}
          </ul> 
        </div>
      </div>
    </>
  )
}

export default App
