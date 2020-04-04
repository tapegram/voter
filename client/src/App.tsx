import React from 'react';
import './App.css';
import {Drizzle} from "@drizzle/store";

type Props = {
    drizzle: Drizzle,
};

type State = {
    loading: boolean,
    drizzle: Drizzle,
    unsubscribe: Function,
}

class App extends React.Component<Props> {
    state: State;
    constructor(props: Props) {
        super(props);
        this.state = {
            loading: true,
            unsubscribe: () => ({}),
            drizzle: props.drizzle,
        };
    }

    componentDidMount() {
        const { drizzle } = this.state;

        // subscribe to changes in the store
        this.setState({
            unsubscribe: drizzle.store.subscribe(() => {
                // every time the store updates, grab the state from drizzle
                const drizzleState = drizzle.store.getState();

                // check to see if it's ready, if so, update local component state
                if (drizzleState.drizzleStatus.initialized) {
                    this.setState({ loading: false, drizzleState });
                }
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        if (this.state.loading) return "Loading Drizzle...";
        return <div className="App">Drizzle is ready</div>;
    }
}

export default App;
