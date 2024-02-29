import React from 'react'
import { useSelector } from 'react-redux'
import { usersSelector } from '../redux/user/userSlice'




const About = () => {


  const { isErrorUser, userName } = useSelector(usersSelector)
  const user = useSelector(state => state.userName.userName
  )

  console.log('*****User is*****', user)
  console.log('*****Mesage*****', user.message
  )


  if (user.message
    === 'Not Found') {
    return <h1>User Not Found</h1>
  }

  const items = [

    {
      name: 'Name: ',
      text: user?.login,
    },
    {
      name: 'Repositories: ',
      text: user?.public_repos,
    },
    {
      name: 'Create: ',
      text: user?.created_at?.slice(0, 10),
    },
    {
      name: 'Follower: ',
      text: user?.followers,
    },
    {
      name: 'Following: ',
      text: user?.following,
    },

  ]
  console.log('*****Items*****', items)


  if (isErrorUser) {
    return <h1>Ошибка в запросе</h1>
  }

  return (
    <div>
      {
        <div className="info__box">
          <div className="info__box_left">
            <img src={userName.avatar_url} alt="" className="info__box_left_img" />
            <a href={userName.html_url} className="info__box_left_link" >ПОСЕТИТЬ</a>

          </div>

          <div className="info__box_right">
            {items?.map(item => (

              <div key={item.name} className="info__box_right_item">

                <p className="info__box_right_item_text">{item.name}</p>
                <p className="info__box_right_item_value">{item.text}</p>

              </div>



            ))
            }
          </div>
        </div>

      }


    </div>
  )
}

export default About
