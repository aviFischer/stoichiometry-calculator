import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput} from 'react-native'
import EquationParser from '../calculations/equationParser'
import MolarMassCalculator from '../calculations/molarMassCalculator'

export default class CalculateMolarMassPage extends React.Component {

    constructor(){
        super()
        this.state = {
            textValue: 'Press calculate to see result',
            equation: ''
        }
        this.onPressCalculate = this.onPressCalculate.bind(this)
        this.onPressClear = this.onPressClear.bind(this)
        this.TextInputRow = this.TextInputRow.bind(this)
        this.ButtonRow = this.ButtonRow.bind(this)
        this.OuputRow = this.OuputRow.bind(this)
    }
        
    onPressCalculate () {
        var parsedEquation = EquationParser.parseCompound(this.state.equation)
        this.setState({
            textValue: MolarMassCalculator.calculate(parsedEquation).toString()
        })
        console.log(this.state.textValue)
    }

    onPressClear () {
        this.setState({
            equation: ''
        })
    }

    TextInputRow () {
        return (
            <View style = {styles.row}>
                <TextInput 
                    style = {styles.textInput}
                    placeholder = 'Molecule'
                    value = {this.state.equation}
                    onChangeText = {(equation) => this.setState({equation})}
                />
            </View>
        )
    }

    ButtonRow () {
        return (
            <View style= {styles.row}>
                <Button
                    title='Calculate'
                    color='#BBB'
                    onPress = {() => this.onPressCalculate()}
                />
                <Button
                    title='Clear'
                    color='#BBB'
                    onPress = {() => this.onPressClear()}
                />
            </View>
        )
    }

    OuputRow () {
        return (
            <View style = {styles.row}>
                <TextInput 
                    style = {styles.output}
                    editable = {false}
                    value = {this.state.textValue}
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
    },
    output: {
        height: 42,
        fontSize: 20,
        color: 'black'
    }
})