import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children, ...Props}) => (
    <CustomButtonContainer {...Props}>
        {children}

    </CustomButtonContainer >
)
export default CustomButton;