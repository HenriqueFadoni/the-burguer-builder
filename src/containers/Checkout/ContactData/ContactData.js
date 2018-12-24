import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data:</h4>
                <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Insert Your Name'/>
                    <input className={classes.Input} type='email' name='email' placeholder='Insert Your Email'/>
                    <input className={classes.Input} type='text' name='postal' placeholder='Insert Your Postal Code'/>
                    <input className={classes.Input} type='text' name='street' placeholder='Insert Your Street Name'/>
                    <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;