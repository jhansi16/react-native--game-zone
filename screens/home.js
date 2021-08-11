import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
    
    {/*const pressHandler = () => {
      //navigation.navigate('ReviewDetails');
      navigation.push('ReviewDetails');
    }*/}

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key:'1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key:'2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key:'3' },
    ]);
    
    return (
        <View style= { styles.container }>
            {/*<Text>Home Screeen</Text>
            <Button title='go to review dets'  onPress={pressHandler}/>*/}
            <FlatList 
             data={reviews}
             renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text >{ item.title }</Text>
                </TouchableOpacity>
             )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});