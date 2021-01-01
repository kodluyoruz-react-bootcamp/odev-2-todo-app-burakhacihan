import {useState,useEffect} from 'react'

function Header({propsdata}) {

    const [task,setTask] = useState("");

    const ChangeItemText = (e) => {
        setTask(e.target.value);
    }
    
    const addNewItem = (e) => {
        if(task){
            if(e.key === 'Enter'){
                const getTodoData = JSON.parse(localStorage.getItem("todos_pollos_armanos"));
                const getLastID = getTodoData.length > 0 ? getTodoData[getTodoData.length-1].id + 1 : 1;
                const senderVal = {id:getLastID, task: task , isComplete:false};
                propsdata.setTodoList(
                    [...localStorage.getItem("todos_pollos_armanos"),senderVal]
                );
                localStorage.setItem("todos_pollos_armanos",JSON.stringify([...getTodoData,senderVal]));
            }
        }
    }

    useEffect(() => {
        setTask("");
    }, [propsdata.todoList])

    return (
        <header className="header">
            <h1>Los Pollos Todos</h1>
             
                <input className="new-todo" value={task} onChange={ChangeItemText} onKeyDown={addNewItem} placeholder="What needs to be done?" />
             
        </header>
    )
}

export default Header;
