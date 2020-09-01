import RowReducer from './rowReducer'

class EquationBalancer{
    static balance(reactants, products){
        var elementList = []

        // creates a list of elements
        for(var reactant of reactants){
            for(element in reactant){
                if(! elementList.includes(element)){
                    elementList.push(element)
                }
            }
        }
        for(var product of products){
            for(element in product){
                if(! elementList.includes(element)){
                    elementList.push(element)
                }
            }
        }

        var matrix = []

        // creates the matrix
        for(var element of elementList){
            var row = []
            for(reactant of reactants){
                if(reactant[element]){
                    row.push(reactant[element])
                } else {
                    row.push(0)
                }
            }
            for(var product of products){
                if(product[element]){
                    row.push(product[element])
                } else {
                    row.push(0)
                }
            }
            matrix.push(row)
        }

        matrix = RowReducer.toRREF(matrix)

        //gets the last column of the matrix and determines what to multiply quantities by
        var lastColumn = []
        for(element of matrix){
            lastColumn.push(element[element.length - 1])
        }

        var multiplier = 1
        for(var element of lastColumn){
            if(element - Math.floor(element) > 0.01){
                var tempMultiplier = 1 / (element - Math.floor(element))
                for(var i = 0; i < lastColumn.length; i++){
                    lastColumn[i] *= tempMultiplier
                }
                multiplier *= tempMultiplier
            }
        }

        var outputString = ''
        //assembles the string
        var reactantCount = 0
        for(var i = 0; i < reactants.length; i ++){
            outputString += Math.round(lastColumn[i]) == 1 ? '':Math.round(lastColumn[i])
            for(var element in reactants[i]){
                outputString += element + (reactants[i][element] == 1 ? '':reactants[i][element])
            }
            
            if(i != reactants.length - 1){
                outputString += ' + '
            }
            reactantCount ++
        }

        outputString += ' → '

        for(var i = 0; i < products.length - 1; i ++){
            outputString += Math.round(lastColumn[i + reactantCount] * -1) == 1 ? '':Math.round(lastColumn[i + reactantCount] * -1)
            for(var element in products[i]){
                outputString += element + (products[i][element] == 1 ? '': products[i][element])
            }
            outputString += ' + '
        }

        outputString += Math.round(multiplier) == 1 ? '':Math.round(multiplier)
        for(var element in products[products.length - 1]){
            outputString += element + (products[products.length - 1][element] == 1 ? '':products[products.length - 1][element])
        }

        return outputString

    }
}

export default EquationBalancer