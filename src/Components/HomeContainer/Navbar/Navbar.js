import React, { useEffect, useState } from 'react';
import Logo from '../../Common/Logo/Logo';
import Nav from './Nav/Nav';
import './Navbar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { MaterialNavbarStyle } from './MaterialStyle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'



function Navbar({ cart, currentUserInfo }) {
    const classes = MaterialNavbarStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const location = useLocation()
    const [currentPath, setCurrentPath] = useState('')
    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location.pathname])

    return (
        <div className='navbar' className={classes.grow}>
            <AppBar position="static">
                <Toolbar>

                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to='/' className='link'>
                            <Logo />
                        </Link>
                    </Typography>


                    <div className={classes.grow} />
                    {
                        currentUserInfo.isLogin &&
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={cart.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>

                    }
                    {
                        currentUserInfo.isLogin &&
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                    }
                    {
                        !currentUserInfo.isLogin && currentPath !== '/login' &&
                        <Link to='/login' className='link'>
                            <button className="btn">Login</button>
                        </Link>
                    }


                    <div className={classes.sectionDesktop}>
                        {/* <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={cart.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton> */}
                        {/* <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton> */}
                        <IconButton
                            edge="end"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Nav
                handleMenuClose={handleMenuClose}
                handleProfileMenuOpen={handleProfileMenuOpen}
                isMenuOpen={isMenuOpen}
                isMobileMenuOpen={isMobileMenuOpen}
                menuId={menuId}
                mobileMenuId={mobileMenuId}
                anchorEl={anchorEl}
                mobileMoreAnchorEl={mobileMoreAnchorEl}
                handleMobileMenuClose={handleMobileMenuClose}
            />
        </div >
    );
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        cart: state.cart.cart,
        currentUserInfo: state.userInfo.currentUserInfo
    }
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
