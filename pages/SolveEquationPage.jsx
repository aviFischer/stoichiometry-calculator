import React from 'react';
import { Text, View, StyleSheet, Button, TextInput, Header} from 'react-native'

const TextInputRow = props => {
    return (
        <View style = {styles.row}>
            <TextInput 
                style = {styles.textInput}
                placeholder = 'Reactants'
            />
            <Text style = {{padding: 10}}>-></Text>
            <TextInput 
                style = {styles.textInput}
                placeholder = 'Products'
            />
        </View>
    )
}

const ButtonRow = props => {
    return (
        <View style = {styles.row}>
            <Button
                title = 'button1'
                color = '#BBB'
            />
            <Button
                title = 'button1'
                color = '#BBB'
            />
        </View>
    )
}

const SolveEquationPage = props => {
    return (
        <View style = {styles.container}>
            <TextInputRow/>
            <ButtonRow/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        fontSize: 20
    }
})

export default SolveEquationPage;