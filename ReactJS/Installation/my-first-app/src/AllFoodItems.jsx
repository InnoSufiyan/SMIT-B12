import { useState } from "react";
import { FoodItem } from "./FoodItem";

export function AllFoodItems() {
    const [myCategory, setMyCategory] = useState('')
    const [forkifyFoodData, setForkiFyFoodData] = useState([])

    function selectCategory(category) {
        setMyCategory(category)
    }

    console.log(myCategory, "===>> myCategory after selection")

    const categories = [
        'Breakfast',
        'Lunch',
        'Dinner',
        'Deserts',
        'Drinks',
        'All'
    ]

    const myFoodItems = [
        {
            name: 'Biryani',
            quantity: 10,
            imageUrl: 'https://flavoredbyfatima.com/wp-content/uploads/2021/07/DFBD43F2-7398-453E-A38E-993686FB9141-scaled.jpeg',
            category: 'Lunch',
        },
        {
            name: 'Korma',
            quantity: 5,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JyCAcxcbhGMmRgAEMx0CkrcnfpDQ0nQq3A&s',
            category: 'Lunch'
        }, {
            name: 'Karahi',
            quantity: 10,
            imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2024/12/Chicken-Karahi-847828f.jpg?quality=90&resize=556,505',
            category: 'Dinner'
        }, {
            name: 'Nihari',
            quantity: 0,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjrKmCNhE5i5WvUfJFA-vFmfyE83g7et3GQ&s',
            category: 'Dinner'
        }, {
            name: 'Daal Chawal',
            quantity: 10,
            imageUrl: 'https://i.ytimg.com/vi/jJqZM0_zQTQ/maxresdefault.jpg',
            category: 'Lunch'
        }, {
            name: 'Paaey',
            quantity: 10,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUKKmv1oAf0RutKhjH4_MvOglfQeX3O5RM3Q&s',
            category: 'Breakfast'
        }, {
            name: 'Lab e shereen',
            quantity: 10,
            imageUrl: 'https://www.masala.tv/wp-content/uploads/2017/07/1-31.jpg',
            category: 'Deserts'
        }, {
            name: 'Rabri',
            quantity: 10,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwwbnl_pJksHbcBz00ss-3cZ8NjxTbbbrhw&s',
            category: 'Deserts'
        }, {
            name: '3 milk cake',
            quantity: 0,
            imageUrl: 'https://images.deliveryhero.io/image/fd-pk/Products/67081520.jpg?width=%s',
            category: 'Deserts'
        }, {
            name: 'Pakola',
            quantity: 10,
            imageUrl: 'https://pakola.com.pk/cdn/shop/products/8964000660928-PET_1.jpg?v=1650957480',
            category: 'Drinks'
        }, {
            name: 'Cola Next',
            quantity: 0,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBHIXUhGnzDWB21_ViNjBQQmSYLJy2CmGdA&s',
            category: 'Drinks'
        }
    ]

    fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            setForkiFyFoodData(data.data.recipes)
        })



    return (
        <>

            <div>
                <h2>Categories</h2>
                {
                    categories?.map((category) => <button style={{
                        marginRight: '5px'
                    }} onClick={() => selectCategory(category)}>{category}</button>)
                }
            </div>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>

                {/* {
                    myFoodItems.filter((fItem) => fItem.category == myCategory || myCategory == 'All').map((fItem) => (
                        <FoodItem quantity={fItem.quantity} name={fItem.name} imageUrl={fItem.imageUrl} />
                    ))
                } */}

                {
                    forkifyFoodData?.map((fItem) => (
                        <FoodItem quantity={10} name={fItem.title} imageUrl={fItem.image_url
                        } />
                    ))
                }

            </div>
        </>
    )
}