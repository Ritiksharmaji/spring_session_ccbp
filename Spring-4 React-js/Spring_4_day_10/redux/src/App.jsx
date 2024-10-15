
import './App.css'
//import Counter from './components/Counter'
import CounterRedux from './components/reduxComponents/CounterRedux'
import UserRedux from './components/reduxComponents/userRedux'

function App() {
 
  return (
    <>
      <h1>welcome to redux </h1>
      {/* <Counter/> */}
      {/* <CounterRedux/> */}
      <UserRedux/>
    </>
  )
}

export default App
