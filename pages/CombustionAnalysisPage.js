import React from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import CombustionAnalyzer from '../calculations/combustionAnalyzer'

class CombustionAnalysisPage extends React.Component {
    constructor(){
        super()
        this.state = {
            textValue: 'Press analyze to see results',
            co2: '',
            h2o: '',
            mass: ''
        }
        this.onPressAnalyze = this.onPressAnalyze.bind(this)
        this.onPressClear = this.onPressClear.bind(this)
        this.MassOfProductsInputRow = this.MassOfProductsInputRow.bind(this)
        this.MassInputRow = this.MassInputRow.bind(this)
        this.ButtonRow = this.ButtonRow.bind(this)
        this.OuputRow = this.OuputRow.bind(this)
    }
        
    onPressAnalyze () {
        var newValue = ''
        if(CombustionAnalyzer.checkInput(this.state.co2, this.state.h2o, this.state.mass)){
            analyzer = new CombustionAnalyzer(this.state.co2, this.state.h2o, this.state.mass)
            newValue = analyzer.analyze()
        } else {
            newValue = 'One or more inputs are not a number'
        }
        this.setState({
            textValue: newValue
        })
    }

    onPressClear () {
        this.setState({
            co2: '',
            h2o: '',
            mass: ''
        })
    }

    MassOfProductsPromptRow () {
        return(
            <View style = {styles.row}>
                <Text style = {styles.output}>Enter the number of grams of each compound</Text>
            </View>
        )
    }

    MassOfProductsInputRow () {
        return (
            <View style = {styles.row}>
                <TextInput 
                    style = {styles.textInput}
                    placeholder = 'CO2'
                    value = {this.state.co2}
                    onChangeText = {(co2) => this.setState({co2})}
                />
                <TextInput 
                    style = {styles.textInput}
                    placeholder = 'H2O'
                    value = {this.state.h2o}
                    onChangeText = {(h2o) => this.setState({h2o})}
                />
            </View>
        )
    }

    MassPromptRow () {
        return (
            <View style = {styles.row}>
                <Text style = {styles.output}>Enter the mass of the sample burned</Text>
            </View>
        )
    }

    MassInputRow () {
        return(
            <View style = {styles.row}>
                    <TextInput 
                        style = {styles.textInput}
                        placeholder = 'mass'
                        value = {this.state.mass}
                        onChangeText = {(mass) => this.setState({mass})}
                    />
            </View>
        )
    }

    ButtonRow () {
        return (
            <View style= {styles.row}>
                <Button
                    title='Analyze'
                    color='#BBB'
                    onPress = {() => this.onPressAnalyze()}
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
                <this.MassOfProductsPromptRow />
                <this.MassOfProductsInputRow />
                <this.MassPromptRow />
                <this.MassInputRow />
                <this.ButtonRow />
                <this.OuputRow />
            </View>
        )
    }
}

export default CombustionAnalysisPage

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
        height: 40,
        fontSize: 20,
        flexDirection: 'row',
    }
})