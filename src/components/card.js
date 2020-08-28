import React from 'react';
import styled from 'styled-components'


const StyledDiv = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;;
align-content: flex-start;
justify-content: space-evenly;
padding: 10vh 0 0;
background-color: grey;
color:white;`;

const ImgDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 50%;
  max-height: 90vh;`;

const StyledImg = styled.img`
display: block;
object-fit: contain;
width: 100%;
height: 100%;
padding: 10px 10px 0px 10px;`;

const InfoDiv = styled.div`
display: flex
flex-direction: column;
max-width: 40%;
`

const StyledH1 = styled.h1`
border-bottom: 2px solid black;
`

const StyledP = styled.p`
font-size: ${props => {
        return props.small = `20px`
    }};
`

const StyledEx = styled.p`
font-size: ${props => {
        return props.small = `15px`
    }};
`




const Card = ({ copyright, date, explanation, title, url }) =>{
    console.log(title)
    return (
        <StyledDiv>
            <InfoDiv>
                <StyledH1>{title}</StyledH1>

                <StyledEx>{explanation}</StyledEx>
            
            
                <StyledImg src={url}/>
                
            
            <StyledP>{copyright}</StyledP>
                <StyledP>Date: {date}</StyledP>
            </InfoDiv>
        </StyledDiv>
    )
}
export default Card