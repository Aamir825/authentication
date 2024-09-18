
import { useSelector } from 'react-redux'
import './App.css'
import Login from './Components/Login/Login'
import UserProfile from './Components/UserProfile/UserProfile'

function App() {

  const userStatus = useSelector((state) => state.user);
  const logginCheck = userStatus.isLoggedin;
  console.log(logginCheck)
  return (
    <>
      {logginCheck == true ? <UserProfile /> : <Login />}
    </>
  )
}

export default App
