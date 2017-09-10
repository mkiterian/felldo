import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Card, CardTitle } from 'material-ui/Card';
import {cyan500} from 'material-ui/styles/colors';
const style = {
    marginLeft: 30 + '%',
    marginTop: 10 + '%',
    width: 40 + '%',
    height: 200,
    color: 'white',
    backgroundColor: cyan500
  };

//   function onSignIn(){
//     window.location.replace('/feed');
//   }

class Login extends Component {
  

    render() {
        return (
            <div>
                <AppBar
                    title="Felladoor"
                    titleStyle={{ marginLeft: 40 + '%' }}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Card style={style}>
                    <h3 className="sign-in">Sign In To Get Started</h3>
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>
                </Card>

            </div>);
    }
}

export default Login;