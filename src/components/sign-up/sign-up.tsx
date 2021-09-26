import React from 'react';

import FormInput from '../form-input/form-input'
import CustomButton from "../custom-button/custom-button";
import {createUserWithEmailAndPassword} from "firebase/auth"

import {auth, createUserProfileDocument} from "../../firebase/utils";

import './sign-up.scss'
import {IUserSignUp} from "../../interfaces/Users";

class SignUp extends React.Component<any, IUserSignUp> {
    constructor(props) {
        super(props);

        this.state = {
            confirmPassword: "",
            displayName: "",
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const {confirmPassword, displayName, email, password} = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            await createUserProfileDocument(user, {displayName});
            this.clearState();

        } catch (e) {
            console.error(e);
        }
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {name, value} = event.target as HTMLInputElement;
        this.setState({[name]: value} as unknown as IUserSignUp);

    }

    clearState = () => this.setState({
        confirmPassword: "",
        displayName: "",
        email: "",
        password: ""
    });

    render() {
        const {confirmPassword, displayName, email, password} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} handleChange={this.handleChange}
                               label='Display Name' required/>
                    <FormInput type='email' name='email' value={email} handleChange={this.handleChange} label='Email'
                               required/>
                    <FormInput type='password' name='password' value={password} handleChange={this.handleChange}
                               label='Password' required/>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword}
                               handleChange={this.handleChange} label='Confirm Password' required/>
                    <CustomButton type='submig'>SIGN UP</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp;