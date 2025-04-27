import { FoodItem } from "./FoodItem";

export function AllFoodItems() {
    return (
        <>
            {/* foodItem({quantity: 10, name: 'korma', iamgeUrl: '//'}) */}
            <FoodItem quantity={10} name='Biryani' imageUrl='https://flavoredbyfatima.com/wp-content/uploads/2021/07/DFBD43F2-7398-453E-A38E-993686FB9141-scaled.jpeg' />
            <FoodItem quantity={5} name='Korma' imageUrl='https://flavoredbyfatima.com/wp-content/uploads/2021/07/DFBD43F2-7398-453E-A38E-993686FB9141-scaled.jpeg' />
            <FoodItem quantity={3} name='Chinese' imageUrl='https://flavoredbyfatima.com/wp-content/uploads/2021/07/DFBD43F2-7398-453E-A38E-993686FB9141-scaled.jpeg' />
            <FoodItem quantity={1} name='Daal Chawal' imageUrl='https://miro.medium.com/v2/resize:fit:735/1*G85-653ZWXWGoHC3gPAVIQ.jpeg' />
            <FoodItem quantity={10} name='Anda Paratha' imageUrl='https://flavoredbyfatima.com/wp-content/uploads/2021/07/DFBD43F2-7398-453E-A38E-993686FB9141-scaled.jpeg' />
            <FoodItem quantity={10} name='Paaey' imageUrl='https://i.ytimg.com/vi/IDFdLRFO28Q/maxresdefault.jpg' />
        </>
    )
}