// Запрет ввода спец-символов и цифр в поля имя и фамилия
let inputNameAndSurname = document.querySelectorAll('.text');
inputNameAndSurname.forEach(function (inputText) {
    inputText.addEventListener('input', () => {
        inputText.value = inputText.value.replace(/[^a-zа-яё]/, '');
    });
})
// Запрет ввода русских букв в пароли
let inputPasswords = document.querySelectorAll('.password');
inputPasswords.forEach(function (inputPassword) {
    inputPassword.onkeyup = function () {
        if (this.value.search(/[а-яА-ЯёЁ]/g) != -1) {
            this.value = this.value.replace(/[а-яА-ЯёЁ]/g, '');
        }
    }
})

// Валидация поля имя--------------------------------------------------
const name = document.getElementById('name');

// Функция валидации поля имя
function validName() {

    const nameValue = name.value.trim();

    if (nameValue === '') {
        setError(name, 'Заполните поле имя');
    } else if (nameValue.length < 2) {
        setError(name, 'Слишком короткое имя');
    } else if (nameValue.length > 30) {
        setError(name, 'Слишком длинное имя');
    } else if (nameValue.match(/(?=(.))\1{3,}/g)) {
        setError(name, 'Введите пожалуйста корректное имя');
    } else {
        setSuccess(name);
    }
}

// Валидация поля фамилия--------------------------------------------------
const surName = document.getElementById('surName');

// Функция валидации поля фамилия
function validSurname() {

    const surNameValue = surName.value.trim();
    if (surNameValue === '') {
        setError(surName, 'Заполните поле фамилия');
    } else if (surNameValue.length < 2) {
        setError(surName, 'Слишком короткая фамилия');
    } else if (surNameValue.length > 30) {
        setError(surName, 'Слишком длинная фамилия');
    } else if (surNameValue.match(/(?=(.))\1{3,}/g)) {
        setError(surName, 'Введите пожалуйста корректную фамилию');
    } else {
        setSuccess(surName);
    }
}

// Валидация поля Email--------------------------------------------------
const email = document.getElementById('email');

// Регулярное выражение для поля Email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Функция валидации поля Email
function validEmail() {

    const emailValue = email.value.trim();
    if (emailValue === '') {
        setError(email, 'Заполните поле Email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Укажите действительный адрес электронной почты');
    } else {
        setSuccess(email);
    }
}

// Валидация поля Пароль--------------------------------------------------
const password = document.getElementById('password');

// Функция валидации поля пароль

function validPassword() {
    const passwordValue = password.value.trim();

    if (passwordValue === '') {
        setError(password, 'Заполните поле пароль');
    } else if (passwordValue.length < 8) {
        setError(password, 'Пароль должен состоять не менее чем из 8 символов.')
    } else if (!passwordValue.match(/[a-z]/g)) {
        setError(password, 'Пароль должен содержать минимум один строчный символ')
    } else if (!passwordValue.match(/[A-Z]/g)) {
        setError(password, 'Пароль должен содержать минимум один заглавный символ')
    } else if (!passwordValue.match(/[0-9]/g)) {
        setError(password, 'Пароль должен содержать минимум одну цифру')
    } else if (!passwordValue.match(/[^a-zA-Z\d]/g)) {
        setError(password, 'Пароль должен содержать минимум один специальный символ(?!|/...)')
    } else {
        setSuccess(password);
    }
}

// Валидация поля повторите пароль--------------------------------------------------
const password2 = document.getElementById('password2');
// Функция валидации поля пароль
function validPassword2() {
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if (password2Value === '') {
        setError(password2, 'Заполните поле подтверждение пароля');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Поле подтверждение пароля не совпадает с полем пароль");
    } else {
        setSuccess(password2);
    }
}

// Валидация поля дата рождения------------------------------------------------------------
const data = document.getElementById('dateOfBirth')
// вызов функции максимального значения
data.addEventListener('click', () => {
    maxValueInputDate()
})
// функция максимального значения
function maxValueInputDate() {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear() - 18;
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();
    var maxDate = year + '-' + month + '-' + day;
    data.max = maxDate
}
// Функция валидации поля дата рождения
function validDateOfBirth() {
    maxValueInputDate()
    const dataValue = data.value.trim()

    var datValueCorrect = new Date(dataValue)
    var day2 = datValueCorrect.getDate()
    var mounth2 = datValueCorrect.getMonth() + 1
    var year2 = datValueCorrect.getFullYear()
    var datValueCorrected = mounth2 + '/' + day2 + '/' + year2;

    var today = new Date();
    var day1 = today.getDate();
    var month1 = today.getMonth();
    month1++;
    var year1 = today.getFullYear()
    var noTime = month1 + '/' + day1 + '/' + year1;

    var year11 = today.getFullYear() - 18;
    var current = month1 + '/' + day1 + '/' + year11;

    var fullAge = Math.abs(new Date(noTime) - new Date(current))
    var diff = Math.abs(new Date(noTime) - new Date(datValueCorrected));
    var result = diff - fullAge

    if (dataValue === '') {
        setError(dateOfBirth, 'Заполните поле Дата рождения');
    } else if (result < 0) {
        setError(dateOfBirth, 'Вам нет 18 лет');
    }
    else {
        setSuccess(dateOfBirth)
    }
}
// Валидация пройдена----------------------------------------------------------
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
// Валидация выдала ошибку---------------------------------------------------------
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
// Валидация всей формы по средством кнопки------------------------------------------------
const form = document.getElementById('form');
// функция валидации
form.addEventListener('submit', e => {
    // сброс стандартного поведения браузера
    e.preventDefault();
    // вызов всех валидирующих функций
    validName()
    validSurname()
    validEmail()
    validPassword()
    validPassword2()
    validDateOfBirth()
    // проверка все ли поля заполнены верно
    formValidation();

});
// функция проверки все ли поля заполнены верно
const inputsControl = document.querySelectorAll('.input-control')
const inputsValue = document.querySelectorAll('input')
const formValidation = () => {
    let valid = true
    inputsControl.forEach(function (inputControl) {
        if (inputControl.classList.contains('error')) {
            valid = false
        }
    })
    if (valid === true) {
        alert('Регистрация прошла успешно!')
        inputsValue.forEach(function (inputValue) {
            inputValue.value = ''
        })
    }
}

// Смена типа input password на text для отображения пароля-----------------------------------------------------
const eyeslash = document.querySelector('.fa-eye-slash')
const eye = document.querySelector('.fa-eye')
const inputsPassword = document.querySelectorAll('.password')
eyeslash.addEventListener('click', function () {
    eyeslash.style.display = 'none'
    eye.style.display = 'block'
    inputsPassword.forEach(function (inputPassword) {
        inputPassword.type = "text"
    })
})
eye.addEventListener('click', function () {
    eyeslash.style.display = 'block'
    eye.style.display = 'none'
    inputsPassword.forEach(function (inputPassword) {
        inputPassword.type = "password"
    })
})
