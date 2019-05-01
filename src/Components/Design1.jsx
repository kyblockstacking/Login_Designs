import React, { Component } from 'react';
import '../Stylesheets/Design1.css';

export default class Design1 extends Component {
    render() {
        return (
            <div className='wrapper-design-1'>

                <form class='form-design-1' action="" method="post">
                    <label for="username">
                        <span>Username</span><input className='input-username' type="text" name="username" required="true" />
                    </label>
                    <label for="password">
                        <span>Password</span><input className='input-password' type="password" name="password" required="true" />
                    </label>
                    <label>
                        <span> </span><input type="submit" value="Sign In" />
                    </label>
                </form>

            </div>
        );
    };
};