import styled from "styled-components/native";
import { COLORS } from "../../Global";

export const Container = styled.View`
    width: 300px;
    height: 300px;
    border-radius: 150px;
    background-color: ${COLORS.MAIN};
    border-color: ${COLORS.SECONDARY};
    border-width: 10px;
    align-items: center;
    justify-content: center;
    align-self: center;
    elevation: 3;
`