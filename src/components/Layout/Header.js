import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import { Link as RouterLink} from "react-router-dom";
import ContainedButtonEl from "../UI/ContainedButton";
import OutlinedButtonEl from "../UI/OutlinedButton";

// Material UI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { IconButton, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// Accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';

import logo from '../../assets/ftplogo.jpeg';

// Customized style
const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  logo: {
    height: "2em",
    padingLeft: "8px",
  },
  tabContainer: {
    marginLeft: "auto",
    // marginRight: "auto"
  },
  drawerItem: {
    ...theme.typography,
  },
  expansion: {
    boxShadow: "none",
    "&.Mui-expanded": {
      margin: "0px !important",
      borderBottom: "0",
      boxShadow: "none"
    }
  },
  detailsExpansion: {
    padding: "0px !important",
    paddingTop: "0px !important",
    backgroundColor: "#21C7C4",
    color: "white",
    fontSize: "20px"
  },
  contentExpansion: {
    margin: "0px !important",
    "&.Mui-expanded": {
      margin: "0px !important"
    }
  }
}))

// Scroll menu
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// Header component
const Header = (props) => {
  // Routes
  const routes = useMemo(() => [
    {name: "Home", link: "/", activeIndex: "one"}, 
    {name: "Program", link: "/innovation-lab", activeIndex: "two"}, 
    {name: "Apply", link: "/submission-form", activeIndex: "three"}, 
    {name: "Events", link: "/tech-events", activeIndex: "four"},
    {name: "About Us", link: "/about-us", activeIndex: "five"},
    {name: "Our Contacts", link: "/contacts", activeIndex: "six"},
    
  ], []);

  // About Menu Routes 
  const aboutMenuOptions = useMemo(() => [
    {name: "Fintechport - FinTech Hub of SZ", link: "/about-us/fintech-hub-of-sz", activeIndex: "five", selectedAboutMenuIndex: 0}, 
    {name: "Organisation & Managment", link: "/about-us/organisation-managment", activeIndex: "five", selectedAboutMenuIndex: 1},
    {name: "Business Partners", link: "/about-us/partners", activeIndex: "five", selectedAboutMenuIndex: 2},
    {name: "Photo Gallery", link: "/about-us/gallery", activeIndex: "five", selectedAboutMenuIndex: 3},
    {name: "Career Opportunities", link: "/about-us/open-positions", activeIndex: "five", selectedAboutMenuIndex: 4}    
  ], [])

  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  // Main menu

  const handleChange = (event, newValue) => {
    props.setHeaderValue(newValue);
    props.setSelectedAboutMenuIndex(null);
  };

  // Dropdown menu for About Us page
  const [aboutMenuAnchorEl, setAboutMenuAnchorEl] = useState(null);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  const aboutMenuHandleClick = (event) => {
    setAboutMenuAnchorEl(event.currentTarget);
    setAboutMenuOpen(true);
  };
  const aboutMenuHandleClose = () => {
    setAboutMenuAnchorEl(null)
    setAboutMenuOpen(false);
  };

  const handleAboutUsMenuItemClick = (event, index) => {
    setAboutMenuAnchorEl(null);
    setAboutMenuOpen(false);
    props.setSelectedAboutMenuIndex(index);
  }

  useEffect(() => {
    [...aboutMenuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`: 
          if (props.headerValue !==route.activeIndex) {
            props.setHeaderValue(route.activeIndex)
            if (route.selectedAboutMenuIndex && route.selectedAboutMenuIndex !== props.selectedAboutMenuIndex){
              props.setSelectedAboutMenuIndex(route.selectedAboutMenuIndex)
            } else {
              props.setSelectedAboutMenuIndex(null)
            }
          }
          break;
        default:
          break;
      }
    })
  }, [props.headerValue, aboutMenuOptions, routes, props.selectedAboutMenuIndex, props]);

  // Desktop menu 
  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.headerValue}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        className={classes.tabContainer}
      >
        <Tab 
          value="one" 
          label="Home" 
          className={classes.tab}
          component={RouterLink}
          to="/"
          sx={{fontSize: "1.4rem"}}
        />
        <Tab 
          value="two" 
          label="Program" 
          className={classes.tab}
          component={RouterLink}
          to="/innovation-lab"
          sx={{fontSize: "1.4rem"}}
        />
        <Tab 
          value="three" 
          label="Apply" 
          className={classes.tab}
          component={RouterLink}
          to="/submission-form"
          sx={{fontSize: "1.4rem"}}
        />
        <Tab 
          // aria-owns={whatIsNewAnchorEl ? "what-is-new-menu" : undefined}
          // aria-haspopup={whatIsNewAnchorEl ? "true" : undefined}
          // onMouseOver = {event => whatIsNewHandleClick(event)}
          value="four" 
          label="Events" 
          className={classes.tab}
          component={RouterLink}
          to="/tech-events"
          sx={{fontSize: "1.4rem"}}
        />
        <Tab
          aria-owns={aboutMenuAnchorEl ? "about-us-menu" : undefined}
          aria-haspopup={aboutMenuAnchorEl ? "true" : undefined}
          onMouseOver = {event => aboutMenuHandleClick(event)}
          value="five" 
          label="About Us" 
          className={classes.tab}
          component={RouterLink}
          to="/about-us"
          sx={{fontSize: "1.4rem"}}
        />
        <Tab 
          value="six" 
          label="Our Contacts" 
          className={classes.tab}
          component={RouterLink}
          to="/contacts"
          sx={{fontSize: "1.4rem"}}
        />
      </Tabs>
      {/* <Stack spacing={2} direction="row">
        <ContainedButtonEl action={"Log In"} component={RouterLink} to="/login"/>
        <OutlinedButtonEl action={"Sign Up"} component={RouterLink} to="/signup"/>
      </Stack> */}
      <Menu 
        id="about-us-menu" 
        anchorEl={aboutMenuAnchorEl} 
        open={aboutMenuOpen} 
        onClose={aboutMenuHandleClose}
        MenuListProps={{onMouseLeave: aboutMenuHandleClose}}
        variant="menu"
        autoFocus={false}
      >
        {aboutMenuOptions.map((option, index) => (
          <MenuItem
            key={option}
            onClick={(event) => {handleAboutUsMenuItemClick(event, index) ; props.setHeaderValue("five") ; aboutMenuHandleClose()}}
            selected = {index === props.selectedAboutMenuIndex && props.headerValue === "five"}
            component={RouterLink} to={option.link} 
            sx={{ 
              color: props.selectedAboutMenuIndex === index ? `${theme.palette.common.lightBlue}` : `${theme.palette.text.secondary}`, 
              fontSize: "16px", 
              fontFamily: "Barlow", 
              fontWeight: "400",
              minWidth: "120px"
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )

  // Mobile menu
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer 
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS} 
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#21C7C4",
            color: "white",
            width: "68%",
          }
        }}
      >
        <List>
          <ListItem 
            onClick={() => {setOpenDrawer(false); props.setHeaderValue("one"); props.setSelectedAboutMenuIndex(null)}} 
            selected={props.headerValue === "one"}
            button 
            component={RouterLink} to="/"
          >
            <ListItemText 
              className={classes.drawerItem}
            >
              Home
            </ListItemText>
          </ListItem>

          <ListItem 
            onClick={() => {setOpenDrawer(false); props.setHeaderValue("two"); props.setSelectedAboutMenuIndex(null)}} 
            selected={props.headerValue === "two"}
            button 
            component={RouterLink} to="/innovation-lab"
          >
            <ListItemText>
                Program
              </ListItemText>
          </ListItem>

          <ListItem 
            onClick={() => {setOpenDrawer(false); props.setHeaderValue("three"); props.setSelectedAboutMenuIndex(null)}} 
            selected={props.headerValue === "three"}
            button 
            component={RouterLink} to="/submission-form"
          >
            <ListItemText>
              Apply
            </ListItemText>
          </ListItem>

          <ListItem 
            onClick={() => {setOpenDrawer(false); props.setHeaderValue("four"); props.setSelectedAboutMenuIndex(null)}} 
            selected={props.headerValue === "four"}
            button 
            component={RouterLink} to="/tech-events"
          >
            <ListItemText>
              Events
            </ListItemText>
          </ListItem>
{/* 
          <ListItem 
            onClick={() => {props.setHeaderValue("five")}} 
            selected={props.headerValue === "five"}
            button 
          >

            <ListItemText>
              <Accordion />
            </ListItemText>            
          </ListItem> */}

          <Accordion elevation={0} classes={{root: classes.expansion}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              // aria-controls="panel1a-content"
              // id="panel1a-header"
              className={{content: classes.contentExpansion}}
              sx={{
                background: "#21c7c4",
                color: "white",
                fontSize: "20px",
                boxShadow: "none",
                position: "relative",
                margin: 0
              }}
            >
              <ListItemText disableTypography>
                About Us
              </ListItemText>
            </AccordionSummary>
            <AccordionDetails classes={{root: classes.detailsExpansion}}>
              <Grid container direction="column">
                {aboutMenuOptions.map((route, index) => {
                  return (
                  <Grid item>
                    <ListItem 
                      divider
                      key={`${route}${route.selectedAboutMenuIndex}`}
                      button 
                      component={RouterLink} to={route.link}
                      selected={props.selectedAboutMenuIndex === route.selectedAboutMenuIndex}
                      onClick={() => {setOpenDrawer(false); props.setHeaderValue(route.activeIndex); props.setSelectedAboutMenuIndex(route.selectedAboutMenuIndex)}} 
                      sx={{border: "0"}}
                    >
                      <ListItemText
                        disableTypography
                      >
                        {route.name}
                      </ListItemText>
                    </ListItem>
                  </Grid>)
                })}


                {/* <Menu 
        id="about-us-menu" 
        anchorEl={aboutMenuAnchorEl} 
        open={aboutMenuOpen} 
        onClose={aboutMenuHandleClose}
        MenuListProps={{onMouseLeave: aboutMenuHandleClose}}
        variant="menu"
        autoFocus={false}
      >
        {aboutMenuOptions.map((option, index) => (
          <MenuItem
            key={option}
            onClick={(event) => {handleAboutUsMenuItemClick(event, index) ; props.setHeaderValue("five") ; aboutMenuHandleClose()}}
            selected = {index === props.selectedAboutMenuIndex && props.headerValue === "five"}
            component={RouterLink} to={option.link} 
            sx={{ 
              color: props.selectedAboutMenuIndex === index ? `${theme.palette.common.lightBlue}` : `${theme.palette.text.secondary}`, 
              fontSize: "16px", 
              fontFamily: "Barlow", 
              fontWeight: "400",
              minWidth: "120px"
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu> */}

              </Grid>
            </AccordionDetails>
          </Accordion>

          <ListItem 
            onClick={() => {setOpenDrawer(false); props.setHeaderValue("six"); props.setSelectedAboutMenuIndex(null)}} 
            divider
            button 
            component={RouterLink} to="/contacts"
            selected={props.headerValue === "six"}
            sx={{padingBottom: "24px"}}
          >
            <ListItemText>
              Our Contacts
            </ListItemText>
          </ListItem>
          {/* <ListItem 
            onClick={() => {setOpenDrawer(false); props.setHeaderValue("one"); props.setSelectedAboutMenuIndex(null)}} 
            button 
            component={RouterLink} to="/signup"
          >
            <ListItemText>
              Sign Up
            </ListItemText>
          </ListItem>
          <ListItem 
            onClick={() => {setOpenDrawer(false); props.setHeaderValue("one")}} 
            button 
            component={RouterLink} to="/login"
          >
            <ListItemText>
              Log In
            </ListItemText>
          </ListItem> */}
        </List>
      </SwipeableDrawer>
      <IconButton 
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
          sx={{ marginLeft: "auto" }}
        >
          <MenuIcon sx={{color: "#666666", height: "3.8rem", width: "3.8rem"}}/>
        </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
          <AppBar position="fixed">
            <Toolbar disableGutters={false}>
              <Link component={RouterLink} to="/" underline="none" onClick={() => props.setHeaderValue("one")}>
                <Stack direction="row">
                  <Typography variant="h3" color="black">FINTECHPORT</Typography>
                  <img src={logo} alt="Fintechport Logo" style={{height: "28px", paddingLeft: "8px"}} />
                </Stack>
              </Link>
              {matches ? drawer : tabs}
            </Toolbar>
          </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
    </React.Fragment>
  )
}

export default Header;