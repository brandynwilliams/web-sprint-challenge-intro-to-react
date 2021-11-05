// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledDiv2 = styled.div`
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin: auto;
        padding: 8px;
        background-color: black;
        opacity: 0.5;
        color: #0077b6;

    p {
        font-size: 20px;
        color: white;
    }

`

const Section = styled.section`
    h1 {
        font-size: 60px;
        color: black;
    }

`

const characterApp = (props) => {
  
    return(
      <Section>
          <h1>React Wars</h1>
           {
            props.character.map((character) => (
               <StyledDiv2>
               <p>{character.name}</p>
               <p>{character.birth_year}</p>
               </StyledDiv2>
               
               ))
             
            }

      </Section>   
    );
  }


export default characterApp;