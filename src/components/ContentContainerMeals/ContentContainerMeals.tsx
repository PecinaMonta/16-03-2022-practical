import styled from "styled-components"

const Container = styled.div`
    width: 80%;
    margin: 6rem auto;
    display: flex;
    flex: 22%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
`
const ContentContainerMeals:React.FC = ({children}) => {
    return <Container>{children}</Container>
}

export default ContentContainerMeals