import React, { Component } from 'react';
import '../Stylesheets/Design1.css';

export default class Design1 extends Component {
    render() {
        return (
            <div className='wrapper-design-1'>

                <form className='form-design-1' action=''>
                    <label htmlFor='username'>
                        <span className='text-username'>Username</span>
                        <input className='input-username' type='text' name='username' required={true} />
                    </label>
                    <label htmlFor='password'>
                        <span className='text-password'>Password</span>
                        <input className='input-password' type='password' name='password' required={true} />
                    </label>
                    <label>
                        <input className='sign-in' type='submit' value='Sign In' />
                    </label>
                    <label className='kevin'>
                        <input type='checkbox' />
                        <span className='checkmark'></span>Stay signed in
                    </label>
                </form>

            </div>
        );
    };

};