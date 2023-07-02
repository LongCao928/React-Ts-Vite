// 导入标准钩子
// import { useDispatch, useSelector } from 'react-redux'
// 导入预类型钩子
import { useAppDispatch, useAppSelector } from '../hook'
import { increment, decrement } from '../store/counterSlice'
// import type { RootState } from '../store/index'

export default function Counter() {
  // const count = useSelector((state: RootState) => state.counter.value)
  // `state` 参数已正确推断为 `Rootstate` 类型
  const count = useAppSelector((state) => state.counter.value)
  // const dispatch = useDispatch()
  const dispatch = useAppDispatch()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
