import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return <button
        className={`${inverted ? 'inverted' : '' } custom-button`}
        {...otherProps}>
        {console.log(isGoogleSignIn)}
        {children}
    </button>
}

export default CustomButton;