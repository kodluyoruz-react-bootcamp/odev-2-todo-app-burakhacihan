function ListItems({propsdata}) {

    const todos = JSON.parse(localStorage.getItem("todos_pollos_armanos"));

    const checkOnChangeHandle = (id,status) => {
        for(let i in todos){
            if(todos[i].id === id){
                todos[i].isComplete = !status;
                localStorage.setItem("todos_pollos_armanos",JSON.stringify(todos))
                break;
            }
        }
        propsdata.propsdata.setTodoList(JSON.stringify(todos)) 
    }

    const deleteTask = (id) => {
        for(let i in todos){
            if(todos[i].id === id){
                todos.splice(i,1);
                localStorage.setItem("todos_pollos_armanos",JSON.stringify(todos))
                break;
            }
        }
        propsdata.propsdata.setTodoList(JSON.stringify(todos)) 
    }

    return (
        todos.map((item) => (
            <li className={item.isComplete ? "completed" : "" } key={item.id}>
                <div className="view">
                    <input onChange={() => checkOnChangeHandle(item.id,item.isComplete) } className="toggle" checked={item.isComplete ? "checked" : ""} property={item.isComplete ? "done" : ""} type="checkbox" />
                    <label>{item.task}</label>
                    <button onClick={() => { deleteTask(item.id) }} className="destroy"></button>
                </div>
            </li>
        ))
    )
}

export default ListItems
