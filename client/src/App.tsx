import React from "react";
import "./App.css";
import { Drizzle } from "@drizzle/store";

type Props = {
  drizzle: Drizzle;
};

const App: React.FC<Props> = ({ drizzle }) => {
  const [loading, setLoading] = React.useState(true);
  const [drizzleState, setDrizzleState] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = drizzle.store.subscribe(() => {
      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        setLoading(false);
        setDrizzleState(drizzleState);
      }
    });

    return unsubscribe;
  });

  console.log(drizzleState);

  if (loading) return <>"Loading Drizzle..."</>;

  return <div className="App">Drizzle is ready</div>;
};

export default App;
