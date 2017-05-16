/**
 * Created by diannao on 2017/5/15.
 */

import {StackNavigator} from 'react-navigation';
import Home from "./page/Home";
import List from "./page/List";

const App = StackNavigator({
    Home: {screen: Home},
    List: {screen: List}
}, {
    navigationOptions: {
        headerTitleStyle: {alignSelf: "center"},//让Android中的title居中
        headerBackTitle: "返回",
    },
    mode: "card",
    headerMode: "screen",
});

export default  App;