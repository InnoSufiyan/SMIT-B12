const body = document.querySelector('body')

body.innerHTML = '<h1> Home Page </h1> <button onclick="aboutPage()">About Page</button>'

function aboutPage() {
    body.innerHTML = ''
    body.innerHTML = '<h1> About Page </h1>'
}