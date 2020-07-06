import periodicTable from './periodicTable.json'

class MolarMassCalculator {
    static calculate(formula){
        var total = 0
        for(var element in formula){
            try{
                var mass = periodicTable[element]
                total += mass * formula[element]
            } catch(e){
                return 'Cannot find element ${element}'
            }
        }
        console.log(total)
        return total
    }
}

export default MolarMassCalculator