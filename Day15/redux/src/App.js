import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {increment, decrement} from './reducer/counterSlice';

function App() {
  // useSelector() -- Excessing the global state, similar to useContext
  // useDispatch()

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
