function autoResize(textarea) {
    textarea.style.height = "auto";
    textarea.style.padding = "16px 0";
    textarea.style.height = textarea.scrollHeight + "px";
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    let isValid = true;
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    const loading = document.getElementById('spinner')
    const btnSubmit = document.getElementById('btn-submit')
    const msgAlert = document.getElementById('alert')


    inputs.forEach(input => {
        const errorMessage = input.parentElement.querySelector('.error-message');
        if (errorMessage) errorMessage.textContent = '';

        // Validar si el campo está vacío
        if (input.value.trim() === '') {
            errorMessage.textContent = 'Este campo es obligatorio';
            isValid = false;
            return;
        }

        // Validar email
        if (input.type === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value)) {
                errorMessage.textContent = 'Ingrese un email válido';
                isValid = false;
            }
        }

        // Validar teléfono (exactamente 9 dígitos)
        if (input.type === 'tel') {
            const phonePattern = /^\d{9}$/; // Solo 9 dígitos numéricos
            if (!phonePattern.test(input.value)) {
                errorMessage.textContent = 'Ingrese un teléfono válido de 9 dígitos';
                isValid = false;
            }
        }
    });

    if (!isValid) {
        event.preventDefault(); 
    } else {
        event.preventDefault(); 
        loading.classList.remove('hidden');

        setTimeout(() => {
            btnSubmit.classList.add('hidden');
            msgAlert.classList.remove('hidden');
            document.getElementById('contactForm').reset();

            // reset de button y msg
            setTimeout(() => {
                msgAlert.classList.add('hidden');
                btnSubmit.classList.remove('hidden');
                loading.classList.add('hidden');
            }, 2000);
            
        }, 3000);

    }
});

// Limpiar errores al escribir
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
    input.addEventListener('input', function () {
        const errorMessage = this.parentElement.querySelector('.error-message');
        if (errorMessage) errorMessage.textContent = ''; // Limpia el mensaje al escribir
    });
});
