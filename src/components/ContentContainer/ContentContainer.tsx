import styled from "styled-components"

const Container = styled.div`
    width: 80%;
    margin: 6rem auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    
`

const ContentContainer:React.FC = ({children}) => {
    return <Container>{children}</Container>
}

export default ContentContainer