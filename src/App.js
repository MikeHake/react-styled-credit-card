import React from 'react';
import styled from 'styled-components';
import CreditCard from './CreditCard';
import './App.css';


const StyledParagraph = styled.p`
    font-size: 1.6rem; 

    /* 
     * Add margin bottom to all paragraps except the last one 
     */
    &:not(:last-child) {
        margin-bottom: 3rem; 
    }
`;


function App() {
  return (
    <div>
      <h1>ReactJS Styled Credit Card Demo</h1>
      <StyledParagraph>Cards are rendered in different sizes below to demonstrate how everything is relative
        and continues to look right in diffrent sizes. 
      </StyledParagraph>
      <StyledParagraph>Hover over card to flip over. 
      </StyledParagraph>
      <h2>Size = 20</h2>
      <CreditCard size={20} cardholder={"Michael Jordan"} number={"4242 4242 4242 4242"} cvv={123}/>
      <h2>Size = 30</h2>
      <CreditCard size={30} cardholder={"Michael Jordan"} number={"4242 4242 4242 4242"} cvv={123}/>
      <h2>Size = 40</h2>
      <CreditCard size={40} cardholder={"Michael Jordan"} number={"4242 4242 4242 4242"} cvv={123}/>
    </div>
  );
}

export default App;
