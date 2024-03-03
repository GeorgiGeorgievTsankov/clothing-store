import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { ReactComponent as CrwnLogo } from '../../Components/Assets/crown.svg'
import './NavigationCSS.css'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { CartContext } from '../../Contexts/CartContext'
import { singOutUser } from '../../Utils/Firebase/Firebase.utils'
import { CartIconComponent } from '../../Components/CartIcon/CartIconComponent'
import { CartDropdownComponent } from '../../Components/CartDropdown/CartDropdownComponent'




export const NavigationComponent = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
            (<span className='nav-link' onClick={singOutUser}>SING OUT</span>)
            :
            (<Link className='nav-link' to='/sign-in'>
              SIGN IN
            </Link>
            )
        }
        <CartIconComponent />
      </div>     
      {
        isCartOpen ? <CartDropdownComponent /> : ""
      }
    </div>
  )
}
