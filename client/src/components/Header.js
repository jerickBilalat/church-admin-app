import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import EventAddButton from './events/EventAddButton';
import UserAddButton from './users/UserAddButton';

class Header extends Component{
    renderNavigation() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login with Google</a>
                    </li>
                ); 
            default:
                return (
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><EventAddButton /></li>
                        <li><UserAddButton /></li>
                        <li>
                            <a href="/api/logout">Logout</a>
                        </li>
                    </ul>
                );

        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to="/"
                        className="left brand-logo"
                    >
                        NLCF Admin
                    </Link>

                    <ul className="right">
                        {this.renderNavigation()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function MapStateToProps( {auth} ) {
    return {auth};
}

export default connect(MapStateToProps)(Header);