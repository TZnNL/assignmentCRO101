import React from "react";
import { View, Text } from "react-native";

export default ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'wheat' }}>
              <Text>{route.params.us} adajdaks {route.params.pw} check </Text>
              {sol(route)}
        </View>
    );

}
sol = (route)=> {
    if(route.params.isCheck){
        return <Text>true</Text>
    }
    return <Text>false</Text>
}