import React, { useReducer, useState } from "react";

const AvancandoReducer = () => {
    const initialTasks = [
        { id: 1, text: "Fazer alguma coisa" },
        { id: 2, text: "Fazer outra coisa" },
    ];

    const taskReducer = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                };
                setTaskText("");

                // Sprad operator retorna os states que ja existes e mais o novo
                return [...state, newTask];
            case "DELETE":
                return state.filter((task) => task.id !== action.id);
            default:
                return state;
        }
    };

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchTasks({ type: "ADD" });
    };

    const removeTask = (id) => {
        dispatchTasks({ type: "DELETE", id: id });
    };

    return (
        <div>
            <h2>Avançando no Reducer</h2>
            <h3>Tarefas: </h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
                <input type="submit" value="Enviar" />
            </form>
            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
                    {task.text}
                </li>
            ))}
        </div>
    );
};

export default AvancandoReducer;
