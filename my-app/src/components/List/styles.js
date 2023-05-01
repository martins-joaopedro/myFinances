import styled from "styled-components/native"

export const Container = styled.View`
    flex-direction: row;
    min-height: 60px;

    background-color: #c4c4c4;
    elevation: 3;
    boder-radius: 10px;

    margin-top: 10px;
    padding: 0px 5px;
    justify-content: space-between;
    align-items: center;
`

export const Card = styled.View`
    max-width: 85%;
    align-items: center;
    justify-content: center;
    padding: 10px;
`
Card.Text = styled.Text`
    font-size: 16px;
`

export const Icon = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #303030;
`