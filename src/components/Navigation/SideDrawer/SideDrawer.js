import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from "../../../HOC/Auxilliary/auxilliary";

const sideDrawer = ( props ) => {
    let attClass = [classes.SideDrawer, classes.Close];
    if(props.open){
        attClass = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <BackDrop 
            show={props.open}
            clicked={props.closed}/>
                <div className={attClass.join(' ')}>
                    {/* <Logo height="11%"/> */}
                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
        </Aux>
    );
};

export default sideDrawer;