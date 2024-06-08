document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const lengthCriteria = document.getElementById('length');
    const uppercaseCriteria = document.getElementById('uppercase');
    const lowercaseCriteria = document.getElementById('lowercase');
    const numberCriteria = document.getElementById('number');
    const specialCriteria = document.getElementById('special');
    const strengthMessage = document.getElementById('strengthMessage');
    const togglePasswordButton = document.getElementById('togglePassword');

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        let strengthScore = 0;

        // Validar longitud
        if (password.length >= 8) {
            lengthCriteria.classList.remove('invalid');
            lengthCriteria.classList.add('valid');
            strengthScore++;
        } else {
            lengthCriteria.classList.remove('valid');
            lengthCriteria.classList.add('invalid');
        }

        // Validar mayúsculas
        if (/[A-Z]/.test(password)) {
            uppercaseCriteria.classList.remove('invalid');
            uppercaseCriteria.classList.add('valid');
            strengthScore++;
        } else {
            uppercaseCriteria.classList.remove('valid');
            uppercaseCriteria.classList.add('invalid');
        }

        // Validar minúsculas
        if (/[a-z]/.test(password)) {
            lowercaseCriteria.classList.remove('invalid');
            lowercaseCriteria.classList.add('valid');
            strengthScore++;
        } else {
            lowercaseCriteria.classList.remove('valid');
            lowercaseCriteria.classList.add('invalid');
        }

        // Validar números
        if (/\d/.test(password)) {
            numberCriteria.classList.remove('invalid');
            numberCriteria.classList.add('valid');
            strengthScore++;
        } else {
            numberCriteria.classList.remove('valid');
            numberCriteria.classList.add('invalid');
        }

        // Validar caracteres especiales
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            specialCriteria.classList.remove('invalid');
            specialCriteria.classList.add('valid');
            strengthScore++;
        } else {
            specialCriteria.classList.remove('valid');
            specialCriteria.classList.add('invalid');
        }

        // Mostrar mensaje de fortaleza
        if (strengthScore <= 2) {
            strengthMessage.textContent = 'Fortaleza: Débil';
            strengthMessage.style.color = 'red';
        } else if (strengthScore === 3 || strengthScore === 4) {
            strengthMessage.textContent = 'Fortaleza: Media';
            strengthMessage.style.color = 'orange';
        } else if (strengthScore === 5) {
            strengthMessage.textContent = 'Fortaleza: Fuerte';
            strengthMessage.style.color = 'green';
        }
    });

    togglePasswordButton.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePasswordButton.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
    });

    document.getElementById('signupForm').addEventListener('submit', (e) => {
        const valid = document.querySelectorAll('#message .valid').length === 5;
        if (!valid) {
            e.preventDefault();
            alert('Por favor, asegúrese de que su contraseña cumpla con todos los criterios.');
        }
    });
});
