import { useEffect, useState } from "react";
import { Post } from "../interfaces/interfaces";

import ContentContainer from "../ContentContainer/ContentContainer"
import Card from "../Card/Card";



const HomePage:React.FC = () => {
    const [postData, setPostData] = useState<Post[] | null>(null)

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(data => 
            setPostData(data.categories)
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
                        <Card key={post.strCategory} data={post}/>
                    )
                })
            ) : ( <div>loading ...</div> )}
        </ContentContainer>
    )
}

export default HomePage