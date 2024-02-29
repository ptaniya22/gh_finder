// import { useEffect } from 'react'
import Top from './components/Top'
import About from './components/About'
import Loader from './components/loader/Loader'
import Repos from './components/Repos'
import { useSelector, useDispatch } from 'react-redux'
 import { usersSelector } from './redux/user/userSlice'

// import Bottom from './components/Bottom'


function App() {
  // const user = useSelector(state => state.userName)
   const { userName } = useSelector(usersSelector)



  return (
    <>
      <div className="container">
        <Top />
        {userName ? 
          (<>
          <About />
          <Repos/>
          </>) : <Loader />

        }
        
        
        
           
      </div>
      

      
      
    </>
  )
}

export default App
