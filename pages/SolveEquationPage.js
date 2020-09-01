import React, {Component} from 'react'
import {View, Text, TextInput, Switch, StyleSheet, Button} from 'react-native'
import EquationParser from '../calculations/equationParser'

export default class SolveEquationPage extends React.Component{

    constructor(){
        super()
        this.state = {
            reactants: '',
            products: '',
            compoundToMeasure: '',
            amount: '',
            moles: false,
            textValue: 'Press solve to see results'
        }

        this.ComponentInputRow = this.ComponentInputRow.bind(this)
        this.AmountInputRow = this.AmountInputRow.bind(this)
        this.OutputRow = this.OutputRow.bind(this)
        this.onPressClear = this.onPressClear.bind(this)
        this.onPressSolve = this.onPressSolve.bind(this)
        this.ButtonRow = this.ButtonRow.bind(this)
    }

    ComponentInputRow () {
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

    PromptRow(){
        return (
            <View style = {styles.row}>
                <Text style = {styles.output}>Enter the amount of the known substance</Text>
            </View>
        )
    }

    AmountInputRow(props){
        return(
            <View style = {styles.row}>
                <TextInput
                    style = {styles.textInput}
                    placeholder = 'Substance'
                    value = {this.state.compoundToMeasure}
                    onChangeText = {(compoundToMeasure) => this.setState({compoundToMeasure})}
                />
                <TextInput
                    style = {styles.textInput}
                    placeholder = 'Amount'
                    value = {this.state.amount}
                    onChangeText = {(amount) => this.setState({amount})}
                />
                <Switch
                    value = {this.state.moles}
                    onValueChange = {(moles) => this.setState({moles})}
                />
                <Text style = {styles.output}>{this.state.moles ? 'moles': 'grams'}</Text> 
            </View>
        )
    }

    onPressSolve(){
        EquationParser.parseBalancedEquation(this.state.reactants)
    }

    onPressClear(){
        this.setState({
            reactants: '',
            products: '',
            compoundToMeasure: '',
            amount: ''
        })
    }

    ButtonRow(){
        return(
            <View style= {styles.row}>
                <Button
                    title='Solve'
                    color='#BBB'
                    onPress = {() => this.onPressSolve()}
                />
                <Button
                    title='Clear'
                    color='#BBB'
                    onPress = {() => this.onPressClear()}
                />
            </View>
        )
    }

    OutputRow(){
        return(
            <View style = {styles.row}>
                <Text style = {styles.output}>{this.state.textValue}</Text>
            </View>
        )
    }

    render(){
        return(
            <View style = {styles.container}>
                <this.ComponentInputRow/>
                <this.PromptRow/>
                <this.AmountInputRow/>
                <this.ButtonRow/>
                <this.OutputRow/>
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
        color: 'black',
    }
})