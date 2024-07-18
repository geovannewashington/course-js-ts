// Function to multiply CPF digits by their respective weights
function multiplyDigits(cpfArray, weight) {
    return cpfArray.map((digit, index) => digit * (weight - index)).slice(0, weight - 1);
}

// Function to calculate the sum of multiplied CPF digits
function calculateSum(digitArray) {
    return digitArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Function to calculate the check digit from a sum
function calculateCheckDigit(sum) {
    const result = 11 - (sum % 11);
    return result > 9 ? 0 : result;
}

// Function to convert CPF string to an array of numbers
function convertCPFStringToArray(cpfString) {
    return Array.from(cpfString.replace(/\D+/g, '')).map(Number);
}

// Function to generate the full CPF array including check digits
function generateFullCPFArray(cpfArray) {
    const sum1 = calculateSum(multiplyDigits(cpfArray, 10));
    const firstCheckDigit = calculateCheckDigit(sum1);
    const cpfWithFirstCheckDigit = [...cpfArray.slice(0, 9), firstCheckDigit];

    const sum2 = calculateSum(multiplyDigits(cpfWithFirstCheckDigit, 11));
    const secondCheckDigit = calculateCheckDigit(sum2);

    return [...cpfWithFirstCheckDigit, secondCheckDigit];
}

// Function to verify if the generated CPF matches the original CPF
function verifyCPF(generatedCPF, originalCPF) {
    return generatedCPF === originalCPF ? 'CPF VÁLIDO!' : 'CPF INVÁLIDO!';
}

// Main function to validate CPF
function validateCPF(cpf) {
    const cpfArray = convertCPFStringToArray(cpf);
    const fullCpfArray = generateFullCPFArray(cpfArray);
    const generatedCPF = fullCpfArray.join('');
    const originalCPF = cpf.replace(/\D+/g, '');

    return verifyCPF(generatedCPF, originalCPF);
}

console.log(validateCPF('705.484.450-52')); // Expected: CPF VÁLIDO!
console.log(validateCPF('148.556.300-33')); // Expected: CPF INVÁLIDO!
