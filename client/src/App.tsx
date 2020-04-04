import React from 'react';
import './App.css';
import {Drizzle} from "@drizzle/store";

type Props = {
    drizzle: Drizzle,
};

const App: React.FC<Props> = ({ drizzle }) => {
    return (
        <div className="App">
            Hell World
        </div>
    )
};

export default App;
