import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';

const theme = {
    colorPrimary:'#55c57a',
    colorPrimaryLight:'#7ed56f',
    colorPrimaryDark:'#28b485',
  
    colorSecondaryLight: '#ffb900',
    colorSecondaryDark: '#ff7730',
  
    colorTertiaryLight: '#2998ff',
    colorTertiaryDark: '#5643fa',
  
    colorGreyLight1: '#f7f7f7',
    colorGreyLight2: '#eee',
  
    colorGreyDark: '#777',
    colorGreyDark2: '#999',
    colorGreyDark3: '#333',
  
    colorWhite: '#fff',
    colorBlack: '#000',
  };

const StyledCreditCard = styled.div.attrs(props => {
    const { img } = props; 
    const shadowColor = rgba(theme.colorBlack, 0.15);
    let fromColor = theme.colorPrimaryLight;
    let toColor = theme.colorPrimaryDark

    const fromColorTitle = rgba(fromColor, 0.85);
    const toColorTitle = rgba(toColor, 0.85);

    return {
        img,
        shadowColor,
        fromColor,
        toColor,
        fromColorTitle,
        toColorTitle
    }
  })`   

    perspective: 150rem;
    position: relative;
    height: 20rem;
    width: 30rem;

    .creditcard__side {
        height: 20rem;
        width: 30rem;
        transition: all .8s ease;
        font-size:2rem;

        position: absolute;
        top: 0;
        left: 0;

        backface-visibility: hidden;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 1.5rem 4rem ${props => props.shadowColor};
    }

    .creditcard__side--front {
        background-color: ${props => props.theme.colorWhite}; 
    }

    .creditcard__side--back {
        background-image: linear-gradient(to right bottom, ${props => props.fromColor}, ${props => props.toColor});
        transform: rotateY(180deg);
    }

    &:hover .creditcard__side--front {
        transform: rotateY(-180deg);
    }

    &:hover .creditcard__side--back {
        transform: rotateY(0deg);
    }

`;

const CreditCard = (props) => {

    return (
    <StyledCreditCard>
        <div className="creditcard__side creditcard__side--front">
            Front
        </div>
    
        <div className="creditcard__side creditcard__side--back">
            Back
        </div>
    </StyledCreditCard> 
    );
}

export default CreditCard;