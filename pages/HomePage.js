import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

function HomePage ({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={styles.styleContainer}>
                <Text style={styles.text}>Welcome to Stoichiometry Calculator
                What would you like to do?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Balance Equation'
                    color='#ace'
                    onPress={() => navigation.navigate('Balance Equation')}
                    //onPress={()=> console.log('pressed')}
                />
                <Button
                    title='Solve Equation'
                    color='#ace'
                    onPress={() => navigation.navigate('Solve Equation')}
                />
                <Button
                    title='Combustion Analysis'
                    color='#ace'
                    onPress={() => navigation.navigate('Combustion Analysis')}
                />
                <Button
                    title='Settings'
                    color='#ace'
                    onPress={() => navigation.navigate('Settings')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    textContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        justifyContent: 'space-around',
        alignItems: 'stretch',
        flex: 5,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 21
    }
})

export default HomePage