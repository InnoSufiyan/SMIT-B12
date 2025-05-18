import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'

function LatestAndTopJobs() {

    const [recipes, setRecipes] = useState([])
    const [lightMode, setLightMode] = useState(false)
    const [searchInput, setSearchInput] = useState('')

    console.log(searchInput, "===>> searchInput")

    const fetchRecipe = async () => {
        const jobs = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}`)
        const jobsJSON = await jobs.json()
        console.log(jobsJSON, "==>>jobsJSON")
        setRecipes(jobsJSON?.data?.recipes)
    }

    useEffect(() => {
        fetchRecipe()

    }, [searchInput])

    useEffect(() => {
        // categories
        // skills
    }, [])


    return (
        <>
            <button onClick={() => setLightMode(!lightMode)}>Light/Dark Mode</button>
            <input type="text" placeholder='search your recipe name here' onChange={(e) => setSearchInput(e.target.value)} />
            <h3 style={{
                backgroundColor: lightMode ? 'white' : 'black',
                color: lightMode ? 'black' : 'white'
            }}>Latest and Top Jobs Openings</h3>

            {
                recipes?.map((recipe) => <Recipe recipe={recipe} />)
            }

        </>
    )
}

export default LatestAndTopJobs