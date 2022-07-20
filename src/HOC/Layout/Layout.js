import React, { Component } from "react";
import Aux from "../Auxilliary/auxilliary";
import classes from './Layout.module.css';
import ToolBar from "../../components/Navigation/ToolBar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer:false
        });
    }

    sideDrawerTogglebtnHandler = () => {
        this.setState(( prevState ) => {
            return {
                    showSideDrawer: !prevState.showSideDrawer
            };
        });
        // this.setState({
        //     showSideDrawer: true
        // })
    }

    render () {
        return (
            <Aux>
                <ToolBar togglebtnclicked={this.sideDrawerTogglebtnHandler}/> 
                <SideDrawer 
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                
            </Aux>
        )
    }
};

export default Layout;