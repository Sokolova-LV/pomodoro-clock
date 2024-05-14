import styled from "@emotion/styled";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Wrap = styled.div`
    margin-top: 30px;
`;

export const StyledCircularProgressbar = styled(CircularProgressbar)`
    width: 200px;
    height: 200px;

    @media screen and (min-width: 480px) {
        width: 300px;
        height: 300px;
    }
`;