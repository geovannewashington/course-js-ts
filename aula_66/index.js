// Function to multiply CPF digits by their respective weights
function multiplyDigits(cpfArray, weight) {
    let multipliedArray = [];
    cpfArray.forEach((digit) => {
        if (weight >= 2) {
            multipliedArray.push(digit * weight);
            weight--;
        }
    });
    return multipliedArray;
}

// Function to update the array with a new digit at the end
function appendDigit(newDigit, cpfArray) {
    cpfArray.pop();
    const updatedArray = [...cpfArray, newDigit];
    return updatedArray;
}

// Function to calculate the sum of multiplied CPF digits
function calculateSum(multipliedArray) {
    return multipliedArray.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue),
        0
    );
}

// Function to calculate the check digit from a sum
function calculateCheckDigit(sum) {
    let result = 11 - (sum % 11);
    return result > 9 ? 0 : result;
}

// Function to convert CPF string to an array of numbers
function convertCPFStringToArray(cpfString) {
    const cleanCPF = cpfString.replace(/\D+/g, '');
    const cpfArray = Array.from(cleanCPF).map(Number);
    return cpfArray;
}

// Function to verify if the generated CPF matches the original CPF
function verifyCPF(generatedCPF, originalCPF) {
    return generatedCPF === originalCPF ? 'CPF VÁLIDO!' : 'CPF INVÁLIDO!';
}

// Main function to validate CPF
function validateCPF(cpf) {
    const cpfArray = convertCPFStringToArray(cpf);
    const sum1 = calculateSum(multiplyDigits(cpfArray, 10));
    const firstCheckDigit = calculateCheckDigit(sum1);
    const cpfWithFirstCheckDigit = appendDigit(firstCheckDigit, cpfArray);
    const sum2 = calculateSum(multiplyDigits(cpfWithFirstCheckDigit, 11));
    const secondCheckDigit = calculateCheckDigit(sum2);
    const fullCpfArray = appendDigit(secondCheckDigit, cpfWithFirstCheckDigit);
    
    const generatedCPF = fullCpfArray.join('');
    const originalCPF = cpf.replace(/\D+/g, '');

    return verifyCPF(generatedCPF, originalCPF);
}

console.log(validateCPF('705.484.450-52')); // Expected: CPF VÁLIDO!
console.log(validateCPF('148.556.300-35')); // Expected: CPF INVÁLIDO!
