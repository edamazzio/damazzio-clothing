import React from "react";
import FormInput from "../form-input/form-input";
import './sign-in.scss'
import CustomButton from "../custom-button/custom-button";
import {auth, signInWithGoogle} from "../../firebase/utils";
import { signInWithEmailAndPassword } from "firebase/auth"


class SignIn extends React.Component<{},{email:string, password:string}>{
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try{
            await signInWithEmailAndPassword(auth, email, password)
            this.setState({email: '', password: ''});
        } catch (e) {
            console.error(e);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({...this.state, [name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        value={this.state.email}
                        type='email'
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        name='password'
                        value={this.state.password}
                        type='password'
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;