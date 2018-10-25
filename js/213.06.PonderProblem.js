/*****************************************************************
 * Author: Tony Moraes
 * BYUI CS213
 *
 * To use this validation js, you need to indicate in the html the element like below:
 * <element oninput="methodToBeUsed(this)"></element>
 ********************************************************************/

/**
 * Reusability: That method is responsable for changing the visibility of the given element.
 * @param element
 * @param show
 */
function toogleValidationMessage(element, show) {
    if (show) {
        element.nextElementSibling.style.display = 'inline';

        return;
    }

    element.nextElementSibling.style.display = 'none';
}

/**
 * Shows error message if age is under 0 or above 118
 * @param input
 */
function validateAge(input) {
    var age = input.value.trim();
    var show = age == '' || age < 0 || age > 118;

    toogleValidationMessage(input, show);
}

/**
 * Shows error according with the pattern.
 * @param input
 */
function validateSSN(input) {
    var number = input.value.trim();
    var pattern = /\d{3}-\d{2}-\d{4}/g;
    var show = number == '' || number.length != 11 || !pattern.test(number);

    toogleValidationMessage(input, show);
}

/**
 * Shows error if there is more or less the 16 digits
 * @param input
 */
function validateCCNumber(input) {
    var number = input.value.replace(/\s/g, '');
    var pattern = /^\d+$/g;
    var show = number.length != 16 || !pattern.test(number);

    toogleValidationMessage(input, show);
}

/**
 * Shows Error if the user input an invalid date.
 * it considerate leap years for february 29.
 * @param input
 */
function validateDate(input) {
    var inputValue = input.value.trim();

    if (inputValue.length < 8) {
        toogleValidationMessage(input, true);
        return;
    }

    var dateInput = inputValue.split('/');
    var month = dateInput[0];
    var day = dateInput[1];
    var year = dateInput[2];

    //These validations shows the warning
    var dayWithError = day.length > 2 || day < 1 || day > 31;
    var yearWithError = year.length > 4 || year < 1753 || year > 2100;

    var show = dayWithError
        || yearWithError
        || monthWithError(year, month, day)
    ;

    toogleValidationMessage(input, show);
}

/**
 * Shows error if the input were not listed
 * @param input
 */
function validateStateAbbreviation(input) {
    var abbreviation = input.value.trim().toUpperCase();

    var states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
        'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
        'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
        'VA','WA','WV','WI','WY'];

    var show = !states.includes(abbreviation);

    toogleValidationMessage(input, show);
}

/**
 * Shows error if the user input unapropriate signes or less then two decimal digits when it exists.
 * it considerate the dollar currency.
 * @param input
 */
function validateDollar(input) {
    var dollar = input.value.trim().toUpperCase();
    var pattern = /^\${0,1}(\d+|\d{1,3}(\,\d{3})*)(\.\d{2}){0,1}$/g;

    var show = dollar == '' || !pattern.test(dollar);

    toogleValidationMessage(input, show);
}

/**
 * Auxiliar method to check if the month and its days are valid
 * @param year
 * @param month
 * @param day
 * @returns {boolean}
 */
function monthWithError(year, month, day) {
    if (month.length > 2 || month < 1 || month > 12) {
        return true;
    }

    if ([4,6,9,11].includes(Number(month)) && Number(day) > 30) {
        return true;
    }


    if (Number(month) != 2) {
        return false;
    }

    if (isLeapYear(year)) {
        console.log('IsLeapYear');
        return day > 29;
    } else {
        return day > 28;
    }
}

/**
 * Auxiliar method to check if it is leap year.
 * @param year
 * @returns {boolean}
 */
function isLeapYear(year) {
    //divisible by 4, not divisable by 100
    if (!(year % 4) && (year % 100)) {
        return true;
    }

    if ((year % 4) && (year % 400)) {
        return false;
    }

    if ((year % 4) && !(year % 400)) {
        return true;
    }

    return false;
}