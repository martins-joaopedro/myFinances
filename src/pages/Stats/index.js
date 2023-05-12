import { FlatList, Text, Touchable, TouchableOpacity, View } from "react-native"
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { List } from "../../components/List"
import { ListView, OptionsContainer, Options} from "./styles"
import { Swipeable } from "react-native-gesture-handler"

export const Stats = () => {
    
    const items = [
        {id: 1, value: "Conta de luz"},
        {id: 2, value: "Conta de luz"},
        {id: 3, value: "Conta de luz"},
    ]
    
    const renderOptions = () => {
        return(
            <OptionsContainer>
                <TouchableOpacity>
                    <Options>Editar</Options>
                </TouchableOpacity>
            </OptionsContainer>
        )
    }

    const renderList = (item) => {
        return(
            <Swipeable renderLeftActions={renderOptions}>
                <List data={item}/>
            </Swipeable>
        )
    }
    
    const Separator = () => {
        return(
            <View style={{height: 1, backgroundColor:"#303030", marginBottom: 10}}/>
        )
    }

    return(
        <Card>
            <Header></Header>
            <ListView>
                <FlatList
                    data={items}
                    renderItem={({item}) => renderList(item)}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <Separator />}
                />
            </ListView>
        </Card>
    )
}