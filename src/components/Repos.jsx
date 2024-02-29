import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reposSelector, sortRepositories } from '../redux/user/reposSlice'


const Repos = () => {

  const { isErrorRep, repos } = useSelector(reposSelector)
  const dispatch = useDispatch()
  const userRepos = useSelector(state => state.repos.repos
  )

  console.log('*****ReposUser is*****', userRepos)


  const onClick = (sort) => {
    dispatch(sortRepositories(sort))
  }

  if (isErrorRep) {
    return <h1>Ошибка в запросе</h1>
  }


  return (
    <div>
      <h2 className='repos__title'>Сортировка </h2>
      <ul className="repos__search-list">
        <li ><button onClick={() => onClick("name")} className="repos__search_item" href="">ИМЯ</button> </li>
        <li > <button onClick={() => onClick("forks_count")} className="repos__search_item" href="">ЗВЁЗДЫ</button> </li>
        <li > <button onClick={() => onClick("updated_at")} className="repos__search_item" href="">ДАТА</button> </li>
      </ul>

      {userRepos && userRepos?.map(item => (



        <ul className='repos__list' key={item.name}>
          <li className='repos__list_item'>
            <div className="repos__list_item_left">
              <h2 className='repos__list_item_left_title'>{item.name}</h2>
              <p className='repos__list_item_left_text'> Кол-во звёзд: {item.forks_count}</p>
              <p className='repos__list_item_left_text'> Дата добавления: {item.updated_at.slice(0, 10)}</p></div>
            <div className="repos__list_item_rigth">
              <a className="repos__list_item_rigth_btn" href={item.homepage}>Проект</a>
              <a className="repos__list_item_rigth_btn" href={item.html_url}>Репозиторий</a>
            </div>

          </li>
        </ul>

        //        <div key={item.name} className="info__box_right_item">

        //  <h2>{item.name}</h2>
        //         <p className="info__box_right_item_text">{item.name}</p>
        //         <p className="info__box_right_item_value">{ item.text}</p>

        //      </div>            



      ))
      }
    </div>
  )
}

export default Repos
