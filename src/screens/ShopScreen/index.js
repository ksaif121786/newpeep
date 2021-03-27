import React from "react";
import { View,Text } from "react-native";
import styles from './styles';

const Index = () => {
    return (
        <View style={styles.container}>
        <Text style={{
        alignSelf:'center',
        fontSize:23,
        lineHeight:500
        }}>Feature is  currently not  available.</Text>
        </View>
    );
};

export default Index;
