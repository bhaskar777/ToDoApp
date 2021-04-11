import React, { Component } from 'react';
import { View, Text,SafeAreaView } from 'react-native';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <SafeAreaView style={{backgroundColor:'#565',flexDirection:'row', padding:12,  justifyContent:'center'}}>
            <Text>Heder</Text>
            </SafeAreaView>
        );
    }
}

export default Header;