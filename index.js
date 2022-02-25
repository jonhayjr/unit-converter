/*Set default unit value to 20*/
let unit = 20;

/*Function to convert length*/
const convertLength = (value, UOM) => {
    if (UOM === 'feet') {
        const feet = value * 3.280839895;
        return (Math.round(feet * 1000) / 1000) + ' feet';
    } else if (UOM === 'meters') {
        const meters = value === 0 ? 0 : value / 3.280839895
        return (Math.round(meters * 1000) / 1000) + ' meters';
    }
}

/*Function to convert volume*/
const convertVolume = (value, UOM) => {
    if (UOM === 'gallons') {
        const gallons =  value === 0 ? 0 : value / 3.785412;
        return (Math.round(gallons * 1000) / 1000) + ' gallons';
    } else if (UOM === 'liters') {
        const liters = value * 3.785412;
        return (Math.round(liters * 1000) / 1000) + ' liters';
    }
}

/*Function to convert mass*/
const convertMass = (value, UOM) => {
    if (UOM === 'pounds') {
        const pounds = value * 2.2046;
        return (Math.round(pounds * 1000) / 1000) + ' pounds';
    } else if (UOM === 'kilos') {
        const kilos = value === 0 ? 0 : value / 2.2046;
        return (Math.round(kilos * 1000) / 1000) + ' kilos';
    }
}

/*Function to update conversion display values*/  
const updateConversionDisplay = () => {
    /*Update main unit value*/ 
    const conversionAmount = document.getElementById('conversion-amount');
    conversionAmount.value = unit;

    /*Update length values*/
    const length = document.getElementById('length');
    length.textContent = unit + ' meters = ' + convertLength(unit, 'feet') + ' | ' + unit + ' feet = ' + convertLength(unit, 'meters');

    /*Update length values*/
    const volume = document.getElementById('volume');
    volume.textContent = unit + ' liters = ' + convertVolume(unit, 'gallons') + ' | ' + unit + ' gallons = ' + convertVolume(unit, 'liters');

    /*Update mass values*/
    const mass = document.getElementById('mass');
    mass.textContent = unit + ' kilos = ' + convertMass(unit, 'pounds') + ' | ' + unit + ' pounds = ' + convertMass(unit, 'kilos');
}

/*Run function to update conversion values*/
updateConversionDisplay();

const handleSubmit = () => {
    const conversionAmount = document.getElementById('conversion-amount');
    const conversionAmountValue = parseInt(conversionAmount.value);

    if (!Number.isInteger(conversionAmountValue) || conversionAmountValue <= 0) {
        alert('Value must be a number and greater than 0')
    } else {
        unit = conversionAmountValue;
        updateConversionDisplay();
    }
}


const conversionUpdateButton = document.getElementById('conversion-update-btn');
conversionUpdateButton.addEventListener('click', handleSubmit);

/*Testing queries*/
// console.log(convertLength(unit, 'feet'))
// console.log(convertLength(unit, 'meters'))
// console.log(convertVolume(unit, 'gallons'))
// console.log(convertVolume(unit, 'liters'))
// console.log(convertMass(unit, 'pounds'))
// console.log(convertMass(unit, 'kilos'))