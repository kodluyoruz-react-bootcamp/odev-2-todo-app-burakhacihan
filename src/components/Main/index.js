import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'
import {useState} from 'react'

function Main() {

    const [todoList,setTodoList] = useState(!localStorage.getItem("todos_pollos_armanos") ? [] : localStorage.getItem("todos_pollos_armanos"));

    if(!localStorage.getItem("todos_pollos_armanos")){
        localStorage.setItem("todos_pollos_armanos",JSON.stringify(todoList));
    }

    return (
        <section className="todoapp">
            <Header propsdata={{todoList,setTodoList}} />
            <Content propsdata={{todoList,setTodoList}} />
            <Footer propsdata={{todoList,setTodoList}} />
        </section>
    )
}

export default Main
