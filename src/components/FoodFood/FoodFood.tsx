import { useEffect, useState } from "react";
import { Post } from "../interfaces/interfaces";
import { useParams } from "react-router-dom";

import ContentContainer from "../ContentContainer/ContentContainer"
import CardFood from "../CardFood/CardFood";

const FoodFood:React.FC = () => {
    const [postData, setPostData] = useState<Post[] | null>(null)
    const { foodId } = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
        .then(response => response.json())
        .then(data => 
            setPostData(data.meals)
            )
        .catch(
            // handle errors
        )
    }, [])

    return (
        <ContentContainer>
            {postData ? (
                postData.map((post: Post) => {
                    return (
                        <CardFood key={post.idMeal} data={post}/>
                    )
                })
            ) : ( <div>loading ...</div> )}
        </ContentContainer>
    )
}

export default FoodFood