import React from "react";
import classes from './ToolBar.module.css';
import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleBtn from "../SideDrawer/ToggleButton/ToggleButton";
const toolBar = ( props ) => (
    <header className={classes.Toolbar}>
        <ToggleBtn clicked={props.togglebtnclicked}/>
        {/* <Logo height="100%"/> */}
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolBar;