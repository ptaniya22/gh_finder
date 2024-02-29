import React, { useState } from 'react'
import { getUser, usersSelector } from '../redux/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { getRepos } from '../redux/user/reposSlice'


const Top = () => {


  const { isErrorUser, userName } = useSelector(usersSelector)


  const dispatch = useDispatch()


  // const user =useSelector(state => state.userName)
  let [text, setText] = useState('')

  // console.log('****userName is****', userName)
  // console.log('*****User is*****', user.userName)





  const submitHandler = (event) => {
    event.preventDefault()
    if (text.length > 2) {
      dispatch(getUser(text));
      dispatch(getRepos(text))

      // console.log(repos)

    }
  }


  if (isErrorUser) {
    return <h1>Ошибка в запросе</h1>
  }


  return (
    <div className="container">

      <form onSubmit={submitHandler} className='search'>
        <input
          type="text"
          placeholder='Введите имя пользователя'
          className='search__input'
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className='search__btn'>НАЙТИ</button>
      </form>



    </div>
  )
}

export default Top
