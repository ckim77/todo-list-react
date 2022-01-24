import React, {useState} from 'react';
import uuid from "uuid";

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleChange = e => {
        setTodo({ ...todo, task: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4() });
            setTodo({ ...todo, task: "" });
        }
    }

    return <div>
        <form>
            <input
            name='task'
            type="text"
            value={todo.task}
            onChange={handleChange}
            />
            <button type='submit' />
        </form>
    </div>;
}

export default TodoForm;
