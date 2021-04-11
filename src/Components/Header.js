import React, { Component } from 'react';
import { View, Text,SafeAreaView, StyleSheet } from 'react-native';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <SafeAreaView style={styles.parentView}>
            <Text style={styles.text}>{this.props.title}</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        color:'#fff',
        fontSize:16,
        marginBottom:12
    },
    parentView:{
        backgroundColor:'#565',
        flexDirection:'row', 
        padding:12,  
        justifyContent:'center'}
})

export default Header;