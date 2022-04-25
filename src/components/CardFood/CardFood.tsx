import styled from "styled-components"
import { Post } from "../interfaces/interfaces";


const StyledCard = styled.div`
    text-decoration: none;  
    height: 12rem;
    padding: 1rem;
    display: flex;
    border: 1px solid black;
    margin-bottom: 1rem;
    background: lightgrey;
`

const Image = styled.img`
    max-width: 14rem;
`

const Description = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    
`
const Title = styled.h3`
  color: black;
`;

const CardFood: React.FC<{data: Post}> = ({data}) => {
    const {strMeal, idMeal,  strMealThumb, strInstructions} = data;
    
    return (
        <StyledCard>
            
            <Image src={strMealThumb} alt={strMeal}/>
            <Title>{idMeal}</Title>
                <Title>{strMeal}</Title>
                <Title>{strMeal}</Title>
            <Description>
                
                {strInstructions}
            </Description>
        </StyledCard>
    )
}

export default CardFood