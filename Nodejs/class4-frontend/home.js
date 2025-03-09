const loginEmailAddress = localStorage.getItem('loginEmail')

console.log(loginEmailAddress, "==>> loginEmailAddress")

// fetch('url') -->> get api

fetch(`http://localhost:8000/users/${loginEmailAddress}`)
    .then((data) => {
        return data.json()
    })
    .then((res) => {
        console.log(res, "==>> data")

        const userName = document.querySelector('#userName')
        userName.innerHTML = `${res.data.firstName} ${res.data.lastName}`
    })