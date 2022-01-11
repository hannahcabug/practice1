import styled from 'styled-components';
import {bgcolor, textcolor, hcolor} from "../variables";
import {useTheme} from "../../utils/provider";

const ButCont = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props=>props.background};
    padding: 10px;
    margin: 10px;
    display: flex;
    max-width: 150px;
    border-radius: 5px;
`
const ButHead = styled.h3`
    color:${props=>props.headcolor};
`;

const ButLabel = styled.label`
    color:${props=>props.color};
`;

const ButImg = styled.img`
`;

const StyledButton = ({
    bg=bgcolor
}) =>{

    const {theme} = useTheme();
    return <ButCont background={bg[theme]}>
        <ButHead headcolor={hcolor[theme]}>Good Morning</ButHead>
        <ButImg src="https://i.pinimg.com/564x/cc/d3/2d/ccd32dd1c37652204170206f90b8692c.jpg"></ButImg>
        <ButLabel color={textcolor[theme]}>Have a good day!</ButLabel>
    </ButCont>
    }
export default StyledButton;