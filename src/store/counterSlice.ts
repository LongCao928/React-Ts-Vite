import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// 每个 slice 文件都应该为其初始 state 顶一个类型，以便 createSlice 可以在每种情况下正确推断 state 的类型 reducer。
interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}
// or 某些情况下，TypeScript 可能会对初始 state 进行不必要的类型收束.
// 如果发生这种情况，你可以通过使用 as 转换初始 state 来解决它.

/* const initialState = {
  value: 0
} as CounterState */

export const counterSlice = createSlice({
  name: 'counter',
  /*initialState: {
    value: 0
  },*/
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit 允许我们在 reducers 写可变逻辑。
      // 它并不是真正的改变状态库，因为它使用了 Immer 库，
      // 可以检测到 "草稿状态" 的变化并且基于这些变化生产全新的不可变的状态。
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer