import { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as TodoActions}  from './store/ducks/todos'

const TodoList = ( { todos, addTodo, toggleTodo, removeTodo } ) => {

    const [ todo , setTodo ] = useState('')

    const onSubmitAddTodo = event => {
        event.preventDefault();
        addTodo( todo );
        setTodo('')
    }
    
    const onClickToggleTodo = id => {
        toggleTodo(id)
    }

    const onClickRemoveTodo = id => {
        removeTodo(id)
    }

    return (
        <div className="container">
            <div className="row">
                <form onSubmit={onSubmitAddTodo}>
                    <input className="input" placeholder="Task" value={ todo } onChange={ event => setTodo( event.target.value ) } />
                </form>
            </div>
            <div>
                <ul className="lista">
                    { todos.map( todo => { 
                        const completeTodo = todo.complete ? 'completeTodo' : ''
                        return (
                            <li key={todo.id}> 
                                <span className={completeTodo}> { todo.text } </span>
                                <button 
                                    onClick={ () => onClickToggleTodo( todo.id ) } > {!completeTodo ? 'Finalizar' : 'Retomar'} </button>  

                                <button 
                                    onClick={ () => onClickRemoveTodo( todo.id ) } > Remover </button>  
                            </li> ) })
                    }
                </ul>
            </div>
        </div>
    );
} 

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions , dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);