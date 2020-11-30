import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Logo from '../../Common/Logo/Logo';
import { MaterialNavbarStyle } from './MaterialStyle';
import Nav from './Nav/Nav';
import './Navbar.css';



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

    const history= useHistory()

    return (
        <div className='navbar' className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton> */}

                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to='/' className='link'>
                            <Logo />
                        </Link>
                    </Typography>

                    <div className={classes.grow} />
                    
                        <IconButton aria-label="show 4 new mails" color="inherit" >
                            <Badge badgeContent={cart.length} color="secondary" onClick={()=> cart.length && history.push('/order')}>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>

                    
                    {/* {
                        currentUserInfo.isLogin &&
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                    } */}
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
                        {
                            currentUserInfo.isLogin &&
                            <IconButton
                            edge="end"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>}
                    </div>

                    <div className={classes.sectionMobile}>
                       {
                       currentUserInfo.isLogin &&
                       <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>}
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
