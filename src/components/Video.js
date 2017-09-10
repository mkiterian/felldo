import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import Webcam from 'react-webcam';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Sidebar from './sidebar';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const style = {
    marginRight: 10,
    marginBottom: 2,
};

const Video = () => (
    <div>
    <AppBar
            title="Felladoor"
            iconElementRight={<FlatButton label={window.sessionStorage.user} />}
          />
        <div className="video-wrapper">
            <Sidebar />
            <Card>

                <div className="button_wrapper">
                </div>
                <div className="webcam">
                    <CardText>
                        <Webcam />
                    </CardText>
                </div>
            </Card>
        </div>
    </div>
);

export default Video;