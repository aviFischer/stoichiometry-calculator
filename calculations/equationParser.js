
export default class EquationParser {

    static parseSkeletonEquation(input) {
        input = input.replace(/\s/g,'')
        var compounds = input.split('+')
        var output = []
        console.log(compounds)
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
        console.log(atoms)
        return atoms
    }

}