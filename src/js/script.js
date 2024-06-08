document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const lengthCriteria = document.getElementById('length');
    const uppercaseCriteria = document.getElementById('uppercase');
    const lowercaseCriteria = document.getElementById('lowercase');
    const numberCriteria = document.getElementById('number');
    const specialCriteria = document.getElementById('special');

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;

        // Validar longitud
        if (password.length >= 8) {
            lengthCriteria.classList.remove('invalid');
            lengthCriteria.classList.add('valid');
        } else {
            lengthCriteria.classList.remove('valid');
            lengthCriteria.classList.add('invalid');
        }

        // Validar mayúsculas
        if (/[A-Z]/.test(password)) {
            uppercaseCriteria.classList.remove('invalid');
            uppercaseCriteria.classList.add('valid');
        } else {
            uppercaseCriteria.classList.remove('valid');
            uppercaseCriteria.classList.add('invalid');
        }

        // Validar minúsculas
        if (/[a-z]/.test(password)) {
            lowercaseCriteria.classList.remove('invalid');
            lowercaseCriteria.classList.add('valid');
        } else {
            lowercaseCriteria.classList.remove('valid');
            lowercaseCriteria.classList.add('invalid');
        }

        // Validar números
        if (/\d/.test(password)) {
            numberCriteria.classList.remove('invalid');
            numberCriteria.classList.add('valid');
        } else {
            numberCriteria.classList.remove('valid');
            numberCriteria.classList.add('invalid');
        }

        // Validar caracteres especiales
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            specialCriteria.classList.remove('invalid');
            specialCriteria.classList.add('valid');
        } else {
            specialCriteria.classList.remove('valid');
            specialCriteria.classList.add('invalid');
        }
    });

    document.getElementById('signupForm').addEventListener('submit', (e) => {
        const valid = document.querySelectorAll('#message .valid').length === 5;
        if (!valid) {
            e.preventDefault();
            alert('Por favor, asegúrese de que su contraseña cumpla con todos los criterios.');
        }
    });
});
