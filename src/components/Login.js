import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Card, CardTitle } from 'material-ui/Card';
import { cyan500 } from 'material-ui/styles/colors';
import GoogleLogin from 'react-google-login';

const style = {
    marginLeft: 30 + '%',
    marginTop: 10 + '%',
    width: 40 + '%',
    height: 200,
    color: 'white',
    backgroundColor: cyan500
};

const responseGoogle = (response) => {
    window.sessionStorage.user = response.w3.ig;
    window.location.replace('/feed');
}

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
                    <GoogleLogin
                        className="g-signin2"
                        clientId="1057566456731-5e3chaqsc7gqtce52c2h184dbjg2kj2f.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </Card>

            </div>);
    }
}

export default Login;