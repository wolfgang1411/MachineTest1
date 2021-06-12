import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../redux/action/todoAction';
import Task from '../task/task.component';
import './home.css';

const Home = ({ addTodo, todoDataGet }) => {

    //set form data using hook
    const [todo, setFormData] = useState('')
    return (
        <div className='container'>
            <form action="" className='form' onSubmit={(e) => {
                e.preventDefault()
                //sending data to action
                addTodo({ todo })
            }}>
                <div className="form__group">
                    <input type="text" className='from__input' id='todo-data' placeholder='Input Your Entry'
                        name='todo' value={todo}
                        onChange={e => {
                            setFormData(e.target.value)
                        }} />
                    <button className='add--btn' type='submit'>Add Task</button>
                </div>
            </form>
            <div className="tasks">
                <Task></Task>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    todoDataGet: state.todo.data
})

export default connect(mapStateToProps, { addTodo })(Home);
