import React, { Component } from 'react';
import '../Stylesheets/Design1.css';

export default class Design1 extends Component {
    render() {
        return (
            <div className='wrapper-design-1'>

                <form class='form-design-1' action=''>
                    <label for='username'>
                        <span className='text-username'>Username</span>
                        <input className='input-username' type='text' name='username' required='true' />
                    </label>
                    <label for='password'>
                        <span className='text-password'>Password</span>
                        <input className='input-password' type='password' name='password' required='true' />
                    </label>
                    <label>
                        <input className='sign-in' type='submit' value='Sign In' />
                    </label>
                    <label class='kevin'>
                        <input type='checkbox' />
                        <span class='checkmark'></span>Stay signed in
                    </label>
                </form>

            </div>
        );
    };
};