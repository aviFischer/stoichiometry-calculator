import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput} from 'react-native'
import EquationParser from '../calculations/equationParser'

export default class BalanceEquationPage extends React.Component {

    constructor(){
        super()
        this.state = {
            textValue: 'Press balance to see results'
        }
        this.onPressBalance = this.onPressBalance.bind(this)
        this.TextInputRow = this.TextInputRow.bind(this)
        this.ButtonRow = this.ButtonRow.bind(this)
        this.OuputRow = this.OuputRow.bind(this)
    }
        
    onPressBalance () {
        this.setState({
            textValue: 'The button has been pressed'
        })
    }

    TextInputRow () {
        return (
            <View style = {styles.row}>
                <TextInput 
                    style = {styles.textInput}
                    placeholder = 'Reactants'
                />
                <Text style = {{padding: 10}}>→</Text>
                <TextInput 
                    style = {styles.textInput}
                    placeholder = 'Products'
                />
            </View>
        )
    }

    ButtonRow () {
        return (
            <View style= {styles.row}>
                <Button
                    title='Balance'
                    color='#BBB'
                    onPress = {() => this.onPressBalance()}
                />
                <Button
                    title='Clear'
                    color='#BBB'
                />
            </View>
        )
    }

    OuputRow () {
        return (
            <View style = {styles.row}>
                <TextInput 
                    style = {styles.textInput}
                    editable = {false}
                    placeholder = {this.state.textValue}
                />
            </View>
        )
    }

    render () {
        return (
            <View style = {styles.container}>
                <this.TextInputRow/>
                <this.ButtonRow />
                <this.OuputRow />
            </View>
        )
    }

}

styles = StyleSheet.create({
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