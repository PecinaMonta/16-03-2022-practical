import styled from "styled-components";
import { Post } from "../interfaces/interfaces";
import { Link } from "react-router-dom";

const StyledCard = styled(Link)`
  height: 12rem;
  padding: 1rem;
  display: flex;
  border: 1px solid black;
  margin-bottom: 1rem;
  width: 100%;
`;

const Image = styled.img`
  max-width: 14rem;
  padding-right: 2rem;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-right: 2rem;
`;

const FoodCard: React.FC<{ data: Post }> = ({ data }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription, idMeal } = data;


  return (
    <StyledCard
      onClick={(): void => {}}
      to={`/food/${idMeal}`}
    >
      <Image src={strCategoryThumb} alt={strCategory} />
      <Description>
        <h3>{strCategory}</h3>
        {strCategoryDescription}
      </Description>
    </StyledCard>
  );
};

export default FoodCard;
