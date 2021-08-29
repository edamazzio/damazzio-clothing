import React from "react";
import FormInput from "../form-input/form-input";
import './sign-in.scss'

class SignIn extends React.Component{
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",

        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
               <h2>I already have ana ccount</h2>
               <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        value={this.state.email}
                        type='email'
                        hangleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        name='password'
                        value={this.state.password}
                        type='password'
                        hangleChange={this.handleChange}
                        label="password"
                        required
                    />

                    <input type='submit' value='Submit form'/>
                </form>
            </div>
        )
    }
}

export default SignIn;