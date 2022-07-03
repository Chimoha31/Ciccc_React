import { useDispatch, useSelector } from "react-redux";
import { decrementNumber, incrementNumber } from "./actions/actions";
import "./App.css";

function App() {
  // useSelector() -- Excessing the global state, similar to useContext
  // useDispatch()

  const dispatch = useDispatch();
  const state = useSelector((value) => value.changeNumber);
  return (
    <div className="App">
      <button onClick={() => dispatch(incrementNumber())}>+</button>
      <span>{state}</span>
      <button onClick={() => dispatch(decrementNumber())}>-</button>
    </div>
  );
}

export default App;
