import styled, {css} from "styled-components";

const basicButton = css`
background-color: black;
color: white;
border: none;


&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  
}
`;

const invertedButtonstyles = css`
background-color: white;
color: black;
border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
const googleSignInButtonstyles = css`
background-color: #4285f4;
color: white;


&:hover {
  background-color: #357ae8;
  border: none;
}
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn){
        return googleSignInButtonstyles
    }
    return props.inverted ? invertedButtonstyles: basicButton;

}

export const CustomButtonContainer = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 15px 0 15px;
font-size: 15px;

text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;

cursor: pointer;
display: flex;
justify-content: center;

${getButtonStyles}

`;
