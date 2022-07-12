import React, {useState} from 'react';

const Todo = () =>{
    const [todo, setTodo] = useState('');
    const [completed, setCompleted] = useState(false);
    const [todoList, setTodoList] = useState([]);

    const createTodo = (newTodo) => setTodoList([...todoList, newTodo]);

    const updatedList = (updateList) => setTodoList(updateList);

    const newTodo = {
        todo: todo,
        completed: completed
    };

    const strike = {
        textDecoration: 'line-through'
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        createTodo(newTodo);
        setTodo('');
    }

    const handleCheck = (e, i) => {
        const newTodoList = [...todoList];
        newTodoList[i].completed = e.target.checked;
        updatedList(newTodoList);
    }

    const handleDelete = (e, i) => {
        const newTodoList = [...todoList];
        newTodoList.splice(i, 1);
        updatedList(newTodoList);
    }
    
    return(
        <div className='w-25 mx-auto'>
            <h1>Todos!</h1>
            <form onSubmit={handleSubmit}>
                <div className='d-flex align-items-center'>
                    <label className='form-label me-3'>Todo:</label>
                    <input className='form-control' type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                </div>
                <div className='d-flex flex-column align-items-end mx-auto'>
                    <button className='btn btn-primary mt-3' type='submit'>Add</button>
                </div>
            </form>
            <h2>Your Todos:</h2>
            {todoList.map((item, i) => {
                return(
                    <div key={i} className="d-flex justify-content-between mb-2">
                        { item.completed ? <p style={strike}>{item.todo}</p> : <p>{item.todo}</p> }
                        <input checked={item.completed} type="checkbox" onChange={(e) => handleCheck(e, i)}/>
                        <button onClick={(e) => handleDelete(e, i)} className='btn btn-danger'>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}
export default Todo;