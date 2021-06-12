import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../redux/action/todoAction';

const Task = ({ todo, deleteTodo }) => (

    <Fragment>
        {
            todo.length > 0 ? <Fragment>
                {

                    todo.map(task => (
                        <div className="task" key={task.id}>
                            <p className="task__text">{task.todo}</p>
                            <button className='delete--btn' onClick={() => deleteTodo(task.id)}>Delete</button>
                        </div>
                    ))
                }
            </Fragment> : <div className="task">
                <p className="task__text">There is no data</p>
            </div>
        }
    </Fragment>

)

const mapStateToProps = state => ({
    todo: state.todo.data
})
export default connect(mapStateToProps, { deleteTodo })(Task);
