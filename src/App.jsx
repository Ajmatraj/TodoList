import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

 
 

  const [todo, setTodo] = useState("")
  //arry for holding the a;l todos.
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    let todoString = localStorage.getItem("todos")
    if(todoString){
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
    }
  },[])

  const saveToLS = (params)=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handelEdit =(e, id)=>{
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)

    let newTodos = todos.filter(items=>{
      return items.id!== id;
    });
    setTodos(newTodos)
    saveToLS();
  }

  const handelDelete = (e, id)=>{
    let index = todos.findIndex(items=>{
      return items.id === id;
    })
   
    let newTodos = todos.filter(items=>{
      return items.id!== id;
    });
    setTodos(newTodos)
    saveToLS();
  }

  const handelAdd = ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    saveToLS();
  }

  const handelChange= (e)=>{
    setTodo(e.target.value)
  }

  const handelCheckBox = (e) => {
    let id = e.target.name;
   
    let index = todos.findIndex(items=>{
      return items.id===id;
    })
    
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS();
  }
  

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]"h>
        
        <div className="addTodo">
          <h2 className='text-xl font-bold my-2'>Add a Todo</h2>
          <input onChange={handelChange} value={todo} on type="text" className='w-1/2' />
          <button onClick={handelAdd} className='bg-violet-800 hover:bg-violet-500 p-3 py-1 text-white font-sans font-bold rounded-xl mx-1'>Save</button>
        </div>

        <h1 className='text-xl font-bold'>Your Todo</h1>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No todo is</div>}
          {todos.map(items=>{

         return <div key={items.id} className="todo flex w-full justify-between py-2 my-3">
          <div className='flex gap-5 justify-center align-middle'>
            <input name={items.id} onChange={handelCheckBox} type="checkbox" value={todo.isCompleted} id='' />
            <div className={items.isCompleted?"line-through":""}>{items.todo}</div>
          </div>
            <div className="buttons">
            <button onClick={(e)=>{handelEdit(e, items.id)}} className='bg-violet-800 hover:bg-violet-500 p-3 py-1 text-white font-sans font-bold rounded-xl mx-1'>Edit</button>
            <button onClick={(e)=>{handelDelete(e, items.id)}} className='bg-violet-800 hover:bg-violet-500 p-3 py-1 text-white font-sans font-bold rounded-xl mx-1'>Delete</button>

            </div>
          </div>
           })}
        </div>

        
      </div>
    </>
  )
}

export default App
