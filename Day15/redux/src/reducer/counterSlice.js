import { createSlice } from "@reduxjs/toolkit";


// toolkitを使用する前の書き方(Reducer)
// const initial_State = 0;

// export const changeNumber = (state = initial_State, action) => {
  // switch(action.type) {
    //   case "INCREMENT":
    //     // (How to do)
    //     return state + 1;
    
    //   case "DECREMENT":
    //     return state - 1;
    
    //   default:
    //     return state;
    // }
  // }
  
  const initialState = {
    value: 0,
  }
  
  export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
    increment: (state) => {
      // 第二引数のinitialStateのvalue
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
});

export const {increment, decrement} = counterSlice.actions; //何故actionsか？=>> toolkit仕様する前はactionsフォルダにtype:increment, type:decrementとして記載するのが一般的だった。

export default counterSlice.reducer; //何故reducerか？=>> toolkit仕様する前はreducerフォルダに8-18のようにswitch文を使って記載するのが一般的だった。
