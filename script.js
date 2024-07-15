document.addEventListener('DOMContentLoaded', () => {
    // Obtener los elementos del DOM
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeLogin = document.getElementById('closeLogin');
    const closeRegister = document.getElementById('closeRegister');

    // Funciones para abrir y cerrar los modales
    const openModal = (modal) => modal.style.display = 'block';
    const closeModal = (modal) => modal.style.display = 'none';

    // Eventos para abrir los modales
    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        openModal(loginModal);
    });

    registerBtn.addEventListener('click', (event) => {
        event.preventDefault();
        openModal(registerModal);
    });

    // Eventos para cerrar los modales
    closeLogin.addEventListener('click', () => closeModal(loginModal));
    closeRegister.addEventListener('click', () => closeModal(registerModal));

    // Cerrar el modal al hacer clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target == loginModal) closeModal(loginModal);
        if (event.target == registerModal) closeModal(registerModal);
    });
});