import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectHiddenCart } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';


import { ReactComponent as Logo} from  '../../assets/logo.svg'
import { HeaderContainer, LogoContainer, OptinsContainer, OptionLink} from './header.styles'
import './header.style.scss';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>

        <OptinsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>

            {
                currentUser ?

                (<OptionLink as='div' onClick={() => auth.signOut()}>
                SIGN OUT
                </OptionLink>)
                :
                (<OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>)
            }

            <CartIcon />
        </OptinsContainer>
        {
            hidden ?
            null
            :
            <CartDropdown />      
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHiddenCart
})

export default connect(mapStateToProps)(Header);