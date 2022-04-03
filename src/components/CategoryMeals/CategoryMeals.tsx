import { useEffect, useState } from "react";
import { Post } from "../interfaces/interfaces";

import ContentContainerMeals from "../ContentContainerMeals/ContentContainerMeals"
import CardMeals from "../CardMeals/CardMeals";

const HomePage:React.FC = () => {
    const [postData, setPostData] = useState<Post[] | null>(null)

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(response => response.json())
        .then(data => 
            setPostData(data.meals)
            )
        .catch(
            // handle errors
        )
    }, [])

    return (
        <ContentContainerMeals>
            {postData ? (
                postData.map((post: Post) => {
                    return (
                        <CardMeals key={post.strMeal} data={post}/>
                    )
                })
            ) : ( <div>loading ...</div> )}
        </ContentContainerMeals>
    )
}

export default HomePage