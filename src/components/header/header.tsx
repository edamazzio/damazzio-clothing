import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {Link} from "react-router-dom";
import './header.scss'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from "../../firebase/utils";

const Header = (props: HeaderProps) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                props.currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
            }
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

const connector = connect(mapStateToProps);

type HeaderProps = ConnectedProps<typeof connector>

export default connector(Header);
