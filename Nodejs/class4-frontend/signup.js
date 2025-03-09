const button = document.querySelector('button')
const userName = document.querySelector('#userName')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

button.addEventListener('click', signupHandler)

function signupHandler() {
    console.log("==>> signup chala")

    //username, firstname, lastname, email, password
    console.log(userName.value, firstName.value, lastName.value, email.value, password.value)

    // api call for registeration -->> backend

    fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: userName.value,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        })
    })
        .then((data) => {
            console.log("===>> data", data)
            return data.json()
        })
        .then((data) => {
            if (data.status) {
                alert(data.message)

                // diverting to login page
                setTimeout(() => {
                    window.location.href = './login.html'
                }, 3000)
            } else {

                alert(data.message)
            }
        })
        .catch((error) => {
            console.log("==>> error", error)
        })
}