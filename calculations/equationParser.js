
export default class EquationParser {

    static parseSkeletonEquation(input) {
        input = input.replace(/\s/g,'')
        var compounds = input.split('+')
        var output = []
        console.log(compounds)
        for(var compound of compounds){
            var atoms = {}
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
            output.push(atoms)
        }
        return output
    }

}