import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput} from 'react-native'
import EquationParser from '../calculations/equationParser'
import EquationBalancer from '../calculations/equationBalancer'

export default class BalanceEquationPage extends React.Component {

    constructor(){
        super()
        this.state = {
            textValue: 'Press balance to see results',
            reactants: '',
            products: ''
        }
        this.onPressBalance = this.onPressBalance.bind(this)
        this.onPressClear = this.onPressClear.bind(this)
        this.TextInputRow = this.TextInputRow.bind(this)
        this.ButtonRow = this.ButtonRow.bind(this)
        this.OuputRow = this.OuputRow.bind(this)
    }
        
    onPressBalance () {
        var products = EquationParser.parseSkeletonEquation(this.state.products)
        var reactants = EquationParser.parseSkeletonEquation(this.state.reactants)
        this.setState({
            textValue: JSON.stringify(EquationBalancer.balance(reactants, products))
        })
    }

    onPressClear () {
        this.setState({
            reactants: '',
            products: ''
        })
    }

    TextInputRow () {
        return (
            <View style = {styles.row}>
                <TextInput 
                    style = {styles.textInput}
                    placeholder = 'Reactants'
                    value = {this.state.reactants}
                    onChangeText = {(reactants) => this.setState({reactants})}
                />
                <Text style = {{padding: 10}}>→</Text>
                <TextInput 
                    style = {styles.textInput}
                    placeholder = 'Products'
                    value = {this.state.products}
                    onChangeText = {(products) => this.setState({products})}
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
                    defaultValue = {this.state.textValue}
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