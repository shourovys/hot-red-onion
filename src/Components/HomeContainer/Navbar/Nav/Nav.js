import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Navbar.css';



const Nav = (props) => {
    const { handleMenuClose, isMenuOpen, isMobileMenuOpen, handleProfileMenuOpen, handleMobileMenuClose, menuId, mobileMenuId, anchorEl, mobileMoreAnchorEl } = props;

    const history= useHistory()

    return (
        <div>
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >

                <MenuItem onClick={()=>{history.push('/dashboard/profile'); handleMenuClose()}}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>My Profile</p>
                </MenuItem>
                <MenuItem onClick={()=>{history.push('/dashboard/myOrder'); handleMenuClose()}} >
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <DashboardIcon />
                        </Badge>
                    </IconButton>
                    <p>Dashboard</p>
                </MenuItem>
                <MenuItem onClick={()=>{history.push('/dashboard/logout'); handleMenuClose()}}>
                    <IconButton aria-label="show 4 new mails" color="inherit" >
                        <Badge color="secondary">
                            <ExitToAppIcon />
                        </Badge>
                    </IconButton>
                    <p>Log out</p>
                </MenuItem>

            </Menu>

            {/* <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu> */}
        </div>
    );
};

export default Nav;