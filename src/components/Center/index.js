import { View, Image} from "react-native"
import { Container } from "./styles"

export const CenterCard = () => {
    return(
        <Container>
            <Image source={{uri:"https://em-content.zobj.net/source/microsoft-teams/337/dollar-banknote_1f4b5.png"}} style={{width:150, height:150, resizeMode:"contain"}}/>
        </Container>
    )
}