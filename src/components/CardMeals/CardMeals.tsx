import styled from "styled-components";
import { Post } from "../interfaces/interfaces";
import { Link } from "react-router-dom";

const StyledCard = styled(Link)`
  max-height: 19rem;
  display: flex;
  border: 1px solid black;
  flex-flow: row wrap;
  width: 22.5%;
  margin: 1rem 2rem;
  justify-content: center;
  z-index: 0;
`;

const Image = styled.img`
  height: 19rem;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  filter: opacity(40%);
  background: red;
`;

const Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: ;
  -webkit-box-orient: vertical;
  text-align: center;
  overflow: hidden;
  max-width: 16rem;
  position: absolute;
  z-index: 2;
`;
const Title = styled.h3`
  color: black;
`;

const Card: React.FC<{ data: Post }> = ({ data }) => {
  const { strMeal, strMealThumb, idMeal } = data;

  return (
    <StyledCard onClick={(): void => {}} to={`/food/${idMeal}`}>
      <Image src={strMealThumb} alt={strMeal} />
      <Description>
        <Title>{idMeal}</Title>
        {strMeal}
      </Description>
    </StyledCard>
  );
};

export default Card;
