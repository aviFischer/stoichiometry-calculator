class EquationParser {
    
    static parseEquation(input) {
        var compounds = input.replace(' ','').split('+')
        var output = {}
        for(compound in compounds){
            var number;
            for(var i = 0; i < compound.length; i ++){
                if(! isNaN(compound.charAt(i))){
                    number += compound.charAt(i)
                } else {
                    compound = compound.substring(i)
                    if(number.length == 0){
                        number == '1';
                    }
                    output.compound = parseInt(number);
                }
            }
        }
        return output
    }

}