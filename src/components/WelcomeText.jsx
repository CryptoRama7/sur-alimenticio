import { Wrapper } from "./StyledComponents";


const WelcomeText = ({greeting}) => {

    return (
        <>
            <Wrapper>{greeting}</Wrapper>
        </>
    );
}

export default WelcomeText;