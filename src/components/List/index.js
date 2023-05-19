import { View, Text } from "react-native";
import { Container, Card, Info } from "./styles";
import Icon from "react-native-ionicons";

export const List = ({ data }) => {
    return (
        <Container>
            <Card>
                <Card.Text>
                    {data.value}
                </Card.Text>
            </Card>
            <Info>
                <Icon name="globe-outline"></Icon>
            </Info>
        </Container>
    )
}