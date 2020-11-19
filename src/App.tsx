import * as React from "react";
import TodoContainer from "./components/containers/TodoContainer";

export const App: React.FC<{}> = () => {
    return (
        <>
            <h1>React Redux Typescript</h1>
            <TodoContainer count={2} todoList={['1']} />
        </>
    );
};