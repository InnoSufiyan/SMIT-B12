const button = document.querySelector('button')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

button.addEventListener('click', async () => {
    // get values of email and password
    console.log(email.value, password.value)

    // api call karo , login ki

    // fetch('url', {}) -->> backend waley bhai url to do , api to do

    const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    })

    const responseJSON = await response.json()

    console.log(responseJSON, "==>> responseJSON")

    alert(responseJSON.message)

    if (responseJSON.status) {
        localStorage.setItem('loginEmail', email.value)
        window.location.href = './home.html'
    }
})