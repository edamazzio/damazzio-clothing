import React from "react";
import './custom-button.scss'

interface CustomButtonProps {
    children?: any
    isGoogleSignIn?: boolean,
    type?: string
    onClick?: ()=> void
}

const CustomButton = (props: CustomButtonProps) => {
    const {children, isGoogleSignIn, onClick} = props;
    return (<button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button `} onClick={onClick}>
            {children}
        </button>
    )
}

export default  CustomButton;
