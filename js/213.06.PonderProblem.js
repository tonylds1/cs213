function toogleValidationMessage(element, show) {
    if (show) {
        element.nextElementSibling.style.display = 'inline';

        return;
    }

    element.nextElementSibling.style.display = 'none';
}

function validateAge(input) {
    var age = input.value.trim();
    var show = age == '' || age < 0 || age > 118;

    toogleValidationMessage(input, show);
}

function validateSSN(input) {
    var number = input.value.trim();
    var pattern = /\d{3}-\d{2}-\d{4}/g;
    var show = number == '' || number.length != 11 || !pattern.test(number);

    toogleValidationMessage(input, show);
}

function validateCCNumber(input) {
    var number = input.value.replace(/\s/g, '');
    var pattern = /^\d+$/g;
    var show = number.length != 16 || !pattern.test(number);

    toogleValidationMessage(input, show);
}

function validateDate(input) {
    var dateInput = input.value.trim().split('/');
    var month = dateInput[0];
    var day = dateInput[1];
    var year = dateInput[2];

    //These validations shows the warning
    var monthValidation = month.length > 2 || month < 1 || month > 12;
    var dayValidation = day.length > 2 || day < 1 || day > 31;
    var yearValidation = year.length > 4 || year < 1753 || year > 2100;

    var februaryValidation = Number(month) == 2 && day > 28;

    var month30Validation = [2,4,6,9,11].includes(Number(month)) && Number(day) > 30;

    var show = input.value.trim().length < 8
        || monthValidation
        || dayValidation
        || yearValidation
        || februaryValidation
        || month30Validation
    ;

    toogleValidationMessage(input, show);
}

function validateStateAbbreviation(input) {
    var abbreviation = input.value.trim().toUpperCase();

    var states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
        'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
        'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
        'VA','WA','WV','WI','WY'];

    var show = !states.includes(abbreviation);

    toogleValidationMessage(input, show);
}

function validateDollar(input) {
    var dollar = input.value.trim().toUpperCase();
    var pattern = /^\${0,1}(\d+|\d{1,3}(\,\d{3})*)(\.\d{1,2}){0,1}$/g;

    var show = dollar == '' || !pattern.test(dollar);

    toogleValidationMessage(input, show);
}
