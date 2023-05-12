import { View, Text } from "react-native";
import { Container, Card, Icon } from "./styles";

export const List = ({ data }) => {
    return (
        <Container>
            <Card>
                <Card.Text>
                    {data.value}
                </Card.Text>
            </Card>
            <Icon>
            </Icon>
        </Container>
    )
}