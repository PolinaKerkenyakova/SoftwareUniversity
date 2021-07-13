const onRegisterSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if (!email && !password) {
        alert('All input fields are required!');
        return;
    }

    if (password !== rePass) {
        return alert('Password fields should match!');
    }

    const response = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();
    sessionStorage.setItem('userToken', data.accessToken);
    window.location.pathname = 'index.html';
}

document.querySelector('form').addEventListener('submit', onRegisterSubmit);
