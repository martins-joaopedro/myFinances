import styled from "styled-components/native"

export const Container = styled.View`
    flex-direction: row;
    min-height: 60px;
    justify-content: space-between;
`

export const Card = styled.View`
    max-width: 85%;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #c4c4c4;
`

Card.Text = styled.Text`
    font-size: 16px;
`

export const Info = styled.View`
    width: 50px;
    height: 50px;
    background-color: #303030;
    border-radius: 25px;
`

