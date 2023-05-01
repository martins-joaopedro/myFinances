import { FlatList } from "react-native"
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { List } from "../../components/List"
import { ListView } from "./styles"

export const Stats = () => {
    
    const items = [
        {id: 1, value: "Conta de luz"},
        {id: 2, value: "Conta de água"},
        {id: 3, value: "Internet"},
        {id: 4, value: "Academia"},
        {id: 5, value: "Conta de luz"},
        {id: 6, value: "Conta de água"},
        {id: 7, value: "Internet"},
        {id: 8, value: "Academia"},
    ]

    const renderList = (item) => {
        return(
            <List data={item}/>
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
                />
            </ListView>
        </Card>
    )
}