import { FlatList, TouchableOpacity, View, useWindowDimensions } from "react-native"
import { ListView, OptionsContainer, Options} from "./styles"

import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { List } from "../../components/List"

import { Swipeable } from "react-native-gesture-handler"
import { CenterChart } from '../../components/CenterChart';

export const Stats = () => {

    const items = [
        {id: 1, value: "Conta de luz"},
        {id: 2, value: "Conta de luz"},
        {id: 3, value: "Conta de luz"},
    ]
    
    const { width } = useWindowDimensions();

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
            <View style={{ marginBottom: 10}}/>
        )
    }

    return(
        <Card>
            <Header></Header>
            <CenterChart radius={width/4}/>
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