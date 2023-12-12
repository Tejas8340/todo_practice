
import './App.css';
import { useState } from 'react';
import deleteIcon from './del.png';
import editIcont from './edit.png';

function App() {
  const [input, setInput] = useState("");
  const[list, setList] = useState([]);
  const[uid, setUid] = useState();
  const[Update, setUpdate] = useState(false);

  const handleInput = (e) => {
     setInput(e.target.value);
  }
  const handleUpdate = () => {
    list.splice(uid, 1, input)
    setInput(""); 
    setUpdate(false);
  }

  const handleTask = (e) => {
    setList([...list, input]);
    setInput("");
 }
 const handleDelete = (i) => {
  const filterList = list.filter((ele) => ele !== list[i])
  console.log("filterList", filterList);
  setList(filterList);
 }

 const handleEdit = (i) => {
  const filterList = list.filter((ele) => ele === list[i])
  setInput(filterList[0]);
  setUid(i);
  setUpdate(true);

 }
  return (
    <div className="App">
      <h2>Todo App</h2>
      <div className="container">
        <div className="input-box">
          <input type="text" value={input} onChange={(e) =>handleInput(e)} />
          {Update ? <button onClick={handleUpdate} style={{marginLeft: '10px'}}>Update</button> : <button onClick={handleTask} style={{marginLeft: '10px'}}>Add Task</button>}
        </div>
        <div className="list">
          <ul>
            {list.map((item, i) => <li key={i}>{item}<img src={deleteIcon} alt='de' className='dlt-icon' style={{width: '10px', height:'10px', marginLeft: '430px'}} onClick={() => handleDelete(i)}/>
            <img src={editIcont} alt='de' className='edit-icon' style={{width: '10px', height:'10px', marginLeft: '430px'}} onClick={() => handleEdit(i)}/>
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
