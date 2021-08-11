import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function ReviewDetails({navigation}) {
    
    const pressHandler = () => {
        navigation.goBack();
    }
    
    return (
        <View style= { styles.container }>
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('body') }</Text>
            <Text>{ navigation.getParam('rating') }</Text>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});