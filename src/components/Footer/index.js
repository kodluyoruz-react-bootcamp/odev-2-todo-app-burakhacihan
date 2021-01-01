import {useEffect,useState} from 'react'

function Footer({propsdata}) {
    const [count,setCount] = useState(0);
    const todos = JSON.parse(localStorage.getItem("todos_pollos_armanos"));
    const deleteCompletedTask = () => {
        let i = 0;
        while(i < todos.length){
            if(todos[i].isComplete){
                todos.splice(i,1);
                localStorage.setItem("todos_pollos_armanos",JSON.stringify(todos))
            }
            else{
                i++;
            }
        }
        propsdata.setTodoList(JSON.stringify(todos)) 
    }

    const filterData = (e) => {
        let filtered = [];
        if(e === "all"){
            filtered = todos.filter((item) => item.isComplete === true || item.isComplete === false);
            propsdata.setTodoList(JSON.stringify(filtered));
        }
        else if(e === "active"){
            filtered = todos.filter((item) => item.isComplete === false);
            propsdata.setTodoList(JSON.stringify(filtered));
        }
        else if(e === "completed"){
            filtered = todos.filter((item) => item.isComplete === true);
            propsdata.setTodoList(JSON.stringify(filtered));
        }
    }

    useEffect(() => {
        setCount(JSON.parse(localStorage.getItem("todos_pollos_armanos")).length);
    }, [propsdata])
    
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{count}</strong> items left
            </span>

            <ul className="filters">
                <li>
                    <a onClick={() => { filterData("all") }} className="selected">All</a>
                </li>
                <li>
                    <a onClick={() => { filterData("active") }}>Active</a>
                </li>
                <li>
                    <a onClick={() => { filterData("completed") }}>Completed</a>
                </li>
            </ul>
            <button onClick={deleteCompletedTask} className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}

export default Footer
