import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TitleComponent = () => {
    return (
        <Container className="w-full flex justify-center items-center">
            <h1 className="w-full text-center text-6xl">희영왕국</h1>
        </Container>
    )
}

export default TitleComponent