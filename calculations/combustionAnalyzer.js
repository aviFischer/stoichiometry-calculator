const C_IN_CO2 = 0.2727
const H_IN_H2O = 0.1121

const MOLAR_MASS_C = 12.0
const MOLAR_MASS_H = 1.01
const MOLAR_MASS_O = 16.0

class CombustionAnalyzer{
    constructor(co2, h2o, mass){
        this.co2 = parseFloat(co2)
        this.h2o = parseFloat(h2o)
        this.mass = parseFloat(mass)
    }

    static checkInput(co2, h2o, mass){
        return ! (co2.length == 0 || h2o.length == 0|| mass.length == 0 || isNaN(co2) || isNaN(h2o) || isNaN(mass))
    }

    analyze(){
        var massC = this.co2 * C_IN_CO2
        var massH = this.h2o * H_IN_H2O
        var massO = this.mass - massC - massH

        var molesC = massC / MOLAR_MASS_C
        var molesH = massH / MOLAR_MASS_H
        var molesO = massO / MOLAR_MASS_O

        var totalMoles = molesC + molesH + molesO
        var fractionC = molesC / totalMoles
        var fractionH = molesH / totalMoles
        var fractionO = molesO / totalMoles

        return molesC + ' ' + molesH + ' ' + molesO

    }
}

export default CombustionAnalyzer