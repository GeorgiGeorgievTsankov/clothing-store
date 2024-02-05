import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { ReactComponent as CrwnLogo } from '../../Components/Assets/crown.svg'
import './NavigationCSS.css'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { singOutUser } from '../../Utils/Firebase/Firebase.utils'


export const NavigationComponent = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const singOutHandler = async () => {
     await singOutUser()
     setCurrentUser(null);
  }
  

  return (
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <CrwnLogo className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
        {
          currentUser ?
            (<span className='nav-link' onClick={singOutHandler}>SING OUT</span>)
            :
            (<Link className='nav-link' to='/sign-in'>
              SIGN IN
            </Link>
            )
        }

      </div>
    </div>
  )
}
