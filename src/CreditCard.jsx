import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';

import logoImg from './visa_logo_white.png'

const theme = {
    colorFrontLight:'#053df5',
    colorFrontDark:'#04238a',
  
    colorBlack: '#000',
  };


const StyledCreditCard = styled.div.attrs(props => {
    const { size } = props; 
    const shadowColor = rgba(theme.colorBlack, 0.15);
    let fromColor = theme.colorFrontLight;
    let toColor = theme.colorFrontDark;

    // Credit card aspect ratio is 1.586 so make the width that much bigger than height
    const cardHeight = `${size}rem`;
    const cardWidth = `${size * 1.56}rem`;

    const fontSizeCardNumber = `${size / 8}rem`;
    const fontSizeCardHolder = `${size / 12}rem`;
    const fontSizeSmallPrint = `${size / 33}rem`;

    return {
        shadowColor,
        fromColor,
        toColor,
        cardHeight,
        cardWidth,
        fontSizeCardNumber,
        fontSizeCardHolder,
        fontSizeSmallPrint
    }
  })`   

    perspective: 150rem;
    position: relative;
    height: ${props => props.cardHeight};
    width: ${props => props.cardWidth};

    .creditcard__side {
        height: ${props => props.cardHeight};
        width: ${props => props.cardWidth};
        transition: all .8s ease;
        font-size:2rem;

        position: absolute;
        top: 0;
        left: 0;

        backface-visibility: hidden;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 1.5rem 4rem ${props => props.shadowColor};
    }

    .creditcard__side--front {
        background-image: linear-gradient(to right bottom, ${props => props.fromColor}, ${props => props.toColor});

        .card_number {
            display: block;
            width: 100%;
            word-spacing: 4px;
            font-size: ${props => props.fontSizeCardNumber};
            letter-spacing: 2px;
            color: #fff;
            text-align: center;
            position: absolute;
            top: 40%;
        }

        .card_holder {     
            font-size: ${props => props.fontSizeCardHolder};
            color: #fff;
            letter-spacing: 1px;
            text-transform: uppercase;
            position: absolute;
            bottom: 5%;
            left: 5%;
        }

        .card_exparation {
            position: absolute;
            bottom: 15%;
            left: 40%;
        }

        .card_exparation__label {
            font-size: ${props => props.fontSizeSmallPrint};
            color: #fff;
            line-height: normal;
            display: inline-block;
        }

        .card_exparation__date {
            font-size: ${props => props.fontSizeCardHolder};
            color: #fff;
            padding-left: 5px;
        }

        .card_logo {
            width: 25%;
            position: absolute;
            bottom: 5%;
            right: 5%;
        }

        .card__label {
            font-size: 10px;
            text-transform: uppercase;
            color: rgba(255,255,255,0.8);
            letter-spacing: 1px;
        }

    }

    .creditcard__side--back {
        background: #9e9e9e;
        transform: rotateY(180deg);

        .strip_black {
            position: absolute;
            top: 10%;
            left: 0;
            width: 100%;
            height: 20%;
            background: black;
        }

        .cvv {
            position: absolute;
            top: 40%;
            left: 0;
            right: 0;
            height: 15%;
            width: 90%;
            padding: 10px;
            margin: 0 auto;
            border-radius: 5px;
            text-align: right;
            letter-spacing: 1px;
            color: #000;
            background: white;
            font-size: ${props => props.fontSizeCardHolder};
        }
    }

    &:hover .creditcard__side--front {
        transform: rotateY(-180deg);
    }

    &:hover .creditcard__side--back {
        transform: rotateY(0deg);
    }


`;

const CreditCard = (props) => {
    const { size, cardholder, number, cvv } = props; 
    return (
    <StyledCreditCard size={size}>
        <div className="creditcard__side creditcard__side--front">
            <span className="card_number">{number}</span>
        
            <div className="card_exparation">
                <div className="card_exparation__label">GOOD<br/>THRU</div>
                <span className="card_exparation__date">10/25</span>
            </div>

            <span className="card_holder">{cardholder}</span>
            <img className="card_logo" src={logoImg} alt="Logo" />
        </div>
    
        <div className="creditcard__side creditcard__side--back">
            <div className="strip_black"></div>
            <div className="cvv">
                <span>{cvv}</span>
            </div>
        </div>
    </StyledCreditCard> 
    );
}

export default CreditCard;