import * as React from "react";
import TodoContainer from "./components/containers/TodoContainer";

export const App: React.FC<any> = (props: any) => {
    return (
        <>
            <h1>React Redux Typescript</h1>
            <TodoContainer {...props} />
        </>
    );
};