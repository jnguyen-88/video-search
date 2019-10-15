import React from 'react';

class UserNav extends React.Component {
    render() {
        return (
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <i class="camera icon" id="icon-camera"></i>
                </div>
                <div className="user-nav__icon-box">
                    <i class="copy outline icon" id="icon-outline"></i>
                </div>
                <div className="user-nav__icon-box">
                    <i className="bell icon" id="icon-bell"></i>
                    <span className="user-notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                    <img src="img/user-1.jpg" alt="user-1" className="user-photo" />
                    <span className="user-name">Justin</span>
                </div>
            </nav>
        );
    }
}

export default UserNav;