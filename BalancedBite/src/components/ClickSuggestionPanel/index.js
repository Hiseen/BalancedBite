import React, { Component } from "react";
import { View, Text } from "react-native";


class ClickSuggestionPanel extends Component {

    static navigationOptions = {
        title: "ClickSuggestion"
    }
    
    render() {
        return (
            <View>
                <Text>Suggestion panel</Text>
            </View>
        );
    }
}


export default ClickSuggestionPanel;