class InvalidInputError extends Error{
    constructor(message){
        super(message)
        this.name = "InvalidInputError"
    }
}

export default class EquationParser {

    static parseSkeletonEquation(input) {
        input = input.replace(/\s/g,'')
        if(! /[A-Za-z0-9\+]/.test(input)) {
            throw new InvalidInputError("Invalid Character(s)")
        }
        var compounds = input.split('+')
        var output = []
        for(var compound of compounds){
            output.push(EquationParser.parseCompound(compound))
        }
        return output
    }

    static parseCompound(compound) {
        compound = compound.replace(/\s/g,'')
        var atoms = {}

        for(var i = 0; i < compound.length; i ++){
            var index = 0
            while(index < compound.length){
                var element = compound.charAt(index)
                index ++
                while(/[a-z]/.test(compound.charAt(index))){
                    element += compound.charAt(index)
                    index ++
                }
                var number = ''
                while(/[0-9]/.test(compound.charAt(index))){
                    number += compound.charAt(index)
                    index ++
                }
                if(number == ''){
                    number = '1'
                }
                atoms[element] = parseInt(number)
            }
        }
        return atoms
    }

    static parseBalancedEquation(input) {
        input = input.replace(/\s/g,'')
        if(! /[A-Za-z0-9\+]/.test(input)) {
            throw new InvalidInputError("Invalid Character(s) in input")
        }
        var compounds = input.split('+')
        var output = []
        for(var compound of compounds){
            var number = ''
            index = 0
            while(/[0-9]/.test(compound.charAt(index))){
                index ++
                number += compound.charAt(0)
            }
            if(number == '')
                number = '1'
            parsedCompound = EquationParser.parseCompound(compound.substring(index + 1))
            parsedCompound['amount'] = parseInt(number)
            output.push[parsedCompound]
        }

        return output
    }

}