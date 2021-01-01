
import ListItems from "./ListItems"

function Content({propsdata}) {
    const todos = JSON.parse(localStorage.getItem("todos_pollos_armanos"));
    const markAllComplete = () => {
        for(let i = 0; i < todos.length; i++){
            todos[i].isComplete = true;
        }
        localStorage.setItem("todos_pollos_armanos",JSON.stringify(todos))
        propsdata.setTodoList(JSON.stringify(todos))
    }

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label onClick={markAllComplete} htmlFor="toggle-all">
            Mark all as complete
            </label> 

            <ul className="todo-list">
                <ListItems propsdata={{propsdata}} />
            </ul>
        </section>
    )
}

export default Content
