// // const uiCreation = ({title, image, description}) => {
// //     // console.log(data, "==>> uiCreation function")

// //     // const {title, image, description} = data

// //     console.log(title, image, description, "===>> destructure")

// //     const imageUi = document.querySelector('#image')
// //     const cardTitle = document.querySelector('.card-title')
// //     const cardText = document.querySelector('.card-text')




// //     console.log(cardTitle, "==>>cardTitle in uiCreation")
// //     console.log(imageUi, "==>>image in uiCreation")
// //     // imageUi.src = data.image
// //     imageUi.src = image
// //     // cardTitle.textContent = data.title
// //     cardTitle.textContent = title
// //     // cardText.textContent = data.description
// //     cardText.textContent = description

// // }


// // const getCountryData = (num) => {
// //     fetch(`https://fakestoreapi.com/products/${num}`)
// //         .then(function (response) {
// //             console.log(response, "==>> response of fetch")
// //             return response.json()
// //         }).then(function(data){
// //             console.log(data, "==>> my data as json")
// //             uiCreation(data)
// //         })
// // }

// // getCountryData(1)


// // const getAllProducts = () => {
// //     fetch(`https://fakestoreapi.com/products/`)
// //         .then(resp => resp.json())
// //         .then(data => console.log(data, "==>>allProducts"))
// // }

// // getAllProducts()

// const uiCreation = (countryData) => {

//     console.log(countryData)

//     const imageUi = document.querySelector('#image')
//     const cardTitle = document.querySelector('.card-title')
//     const cardText = document.querySelector('.card-text')

//     // imageUi.src = data.image
//     imageUi.src = countryData.flags.png
//     // cardTitle.textContent = data.title
//     cardTitle.textContent = countryData.name.common
//     // cardText.textContent = data.description
//     cardText.textContent = `languages in this country commonly used are ${countryData.languages.eng} and ${countryData.languages.urd}`

// }

// const displayError = (err) => {
//     const alertBox = document.getElementById('errMsg')
//     alertBox.style.display = "block"
//     alertBox.textContent = err

//     const card = document.getElementsByClassName('card')
//     card[0].style.display = 'none'
// }



// const fetchCountry = (country) => {
//     const findCountry = fetch(`https://restcountries.com/v3.1/name/${country}`)

//     findCountry
//         .then((response) => {
//             console.log(response, "response in first then")
//             if (!response.ok) {
//                 throw new Error("response is not ok, status text is " + response.statusText)
//             }
//             return response.json()
//         })
//         .then(resp => {
//             console.log(resp)
//             uiCreation(resp[0])
//         })
//         .catch((err) => {
//             console.log(err)
//             displayError(err)
//         })

// }


// fetchCountry('turkey')




// const findCountry2 = fetch('https://restcountries.com/v3.1/name/india')

// findCountry2
//     // .then(function(response){
//     //     return response.json()
//     // })
//     // .then(function(aslam){
//     //     console.log(aslam)
//     // })
//     .then((response) => response.json())
//     .then((aslam) => console.log(aslam))

const fetchStore = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/')
        console.log(res)
        if(res.status === 204) {
            throw new Error("asdasddsa")
        }
        const resInJson = await res.json()
        console.log(resInJson)
    } catch (error) {
        console.log(error.message, "==error in catch")
    }
}

fetchStore()
console.log("normal code synchronous")

const fetchNewStore = () => {
    const fetchingData = fetch('https://fakestoreapi.com/products/1')

    fetchingData
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then((res) => {
            console.log(res)
        })
}