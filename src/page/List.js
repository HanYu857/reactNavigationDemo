/**
 * Created by diannao on 2017/5/15.
 */

import React, {Component} from "react";
import {View, Text, Button} from "react-native";

export default class List extends Component {

    static navigationOptions = ({navigation}) => ({
        title: `列表页 ${navigation.state.params.data}`,
        headerRight: (
            <Button title="返回" onPress={() => {
                navigation.state.params.callback("Hello World!");
                navigation.goBack();
            }}/>)
    });

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>
                    {params.data}
                </Text>
            </View>
        );
    }
}