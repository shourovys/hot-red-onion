import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';
import BorderAllRoundedIcon from '@material-ui/icons/BorderAllRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
// import RemoveCircleOutlineTwoToneIcon from '@material-ui/icons/RemoveCircleOutlineTwoTone';
import RestoreTwoToneIcon from '@material-ui/icons/RestoreTwoTone';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Logo from '../../Common/Logo/Logo';
import SideBarRoute from './SideBarRoute/SideBarRoute';
import { useStyles } from './SideBarStyle';




function SideBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const history = useHistory()
  const currentUser = useSelector(state => state.userInfo.currentUserInfo)
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      {
        currentUser.isLogin &&
        <List onClick={()=>{setMobileOpen(false)}}>
            <ListItem button key={'Profile'} onClick={()=>history.push('/dashboard/profile')}>
                <ListItemIcon><AccountCircleOutlinedIcon/></ListItemIcon>
                <ListItemText primary={'Profile'} />
            </ListItem>
            <ListItem button key={'My Order'} onClick={()=>history.push('/dashboard/myOrder')}>
                <ListItemIcon><BorderAllRoundedIcon/></ListItemIcon>
                <ListItemText primary={'My Order'} />
            </ListItem>
            <ListItem button key={'Order History'} onClick={()=>history.push('/dashboard/order/history')}>
                <ListItemIcon><RestoreTwoToneIcon/></ListItemIcon>
                <ListItemText primary={'Order History'} />
            </ListItem>
            <ListItem button key={'logOut'} onClick={()=>history.push('/dashboard/logout')}>
                <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                <ListItemText primary={'logOut'} />
            </ListItem>
        </List>}
      <Divider />
      {
        currentUser.isAdmin &&
        <List onClick={()=>{setMobileOpen(false)}}>
            <ListItem button key={'Orders'} onClick={()=>history.push('/dashboard/admin/orders')}>
                <ListItemIcon><AssignmentTurnedInSharpIcon/></ListItemIcon>
                <ListItemText primary={'Orders'} />
            </ListItem>
            <ListItem button key={'Privies Orders'} onClick={()=>history.push('/dashboard/admin/privies/order')}>
                <ListItemIcon><RestoreTwoToneIcon/></ListItemIcon>
                <ListItemText primary={'Privies Orders'} />
            </ListItem>
            <ListItem button key={'Add Admin'} onClick={()=>history.push('/dashboard/add/admin')}>
                <ListItemIcon><PersonAddOutlinedIcon/></ListItemIcon>
                <ListItemText primary={'Add Admin'} />
            </ListItem>
            <ListItem button key={'Add Food'} onClick={()=>history.push('/dashboard/add/food')}>
                <ListItemIcon><AddCircleOutlineTwoToneIcon/></ListItemIcon>
                <ListItemText primary={'Add Food'} />
            </ListItem>
            {/* <ListItem button key={'Remove Food'} onClick={()=>history.push('/dashboard/remove/food')}>
                <ListItemIcon><RemoveCircleOutlineTwoToneIcon/></ListItemIcon>
                <ListItemText primary={'Remove Food'} />
            </ListItem> */}
      </List>}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <Logo/>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
      <SideBarRoute/>
      </main>
    </div>
  );
}

SideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



export default SideBar;
