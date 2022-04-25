import { useEffect, useState } from "react";
import { Post } from "../interfaces/interfaces";

import ContentContainerMeals from "../ContentContainerMeals/ContentContainerMeals";
import CardMeals from "../CardMeals/CardMeals";
import { useParams } from "react-router-dom";

const HomePage: React.FC = () => {
  const [postData, setPostData] = useState<Post[] | null>(null);
  //URL params form react router dom
  const { categoryName } = useParams();

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    )
      .then((response) => response.json())
      .then((data) => setPostData(data.meals))
      .catch
      // handle errors
      ();
  }, []);

  return (
    <ContentContainerMeals>
      {postData ? (
        postData.map((post: Post) => {
          return <CardMeals key={post.strMeal} data={post} />;
        })
      ) : (
        <div>loading ...</div>
      )}
    </ContentContainerMeals>
  );
};

export default HomePage;
