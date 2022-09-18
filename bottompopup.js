import React from "react";
import { Dimensions, FlatList, Modal, TouchableWithoutFeedback, View } from "react-native";
const deviceHeigh = Dimensions.get("window").height;
const data = [
    {
        id: 1,
        name: 'Task 1'
    },
    {
        id: 2,
        name: 'Task 2'
    }
]
export class Bottompopup extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                show : false
            }
    }

    show = () => {
        this.setState({show: true})
    }

    close = () => {
        this.setState({show:false})
    }

    renderOutsiseTouchable(onTouch) {
        const view = <View style={{flex:1, width:'100%'}}></View>
        if (!onTouch) return view;
        return(
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: '100%'}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    renderItem = ({item}) => {
        return (
            <View style={{height:50, flex: 1,alignItem:'center'}}>
                <Text>{item.name}</Text>
            </View>
        )
    }

    renderSeparator = () => {
        return (
            <View
            style={{
                opacity:0.1,
                backgroundColor:'#18Af23',
                height: 1
            }}>

            </View>
        )
    }
    render() {
        let {show} = this.state.show;
        const  {onTouchOutside} = this.props.onTouchOutside;
        return (
            <Modal
            animationType={'fade'}
            transparent={true}
            visible={show}
            onRequestClose={this.close}
            >
                <View style={{
                    flex:1,
                    backgroundColor:'#000000AA',
                    justifyContent: 'flex-end'
                }}>
                    {this.renderOutsiseTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor:'#FFFFFF',
                        width:'100%',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        paddingHorizontal: 10,
                        maxHeight: deviceHeigh * 0.4
                    }}>
                        <View>
                            <Text style={{
                                color: '#182E44',
                                fontSize: 20,
                                fontWeigth: '500',
                                margin:15
                            }}>
                                Demo
                            </Text>
                        </View>
                        <View>
                            <FlatList
                                style={{marginBottom: 20}}
                                showsVerticalScrollIndicator={false}
                                data={data}
                                renderItem={this.renderItem}
                                extraData={data}
                                keyExtractor={(item,index)=>index.toString()}
                                ItemSeparatorComponent={this.rederSeparator}
                                contentContainerStyle={{
                                    paddingBottom: 40
                                }}
                            ></FlatList>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}