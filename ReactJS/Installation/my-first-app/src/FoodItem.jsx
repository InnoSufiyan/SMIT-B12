export function FoodItem({ imageUrl, name, quantity }) {
    return (
        <div style={
            {
                display: 'flex',
                border: '2px solid black',
                marginBottom: '10px',
                borderRadius: '20px'
            }
        }>
            <div style={
                {
                    width: '100px',
                    height: '100px'
                }
            }>
                <img style={{
                    width: '100%',
                    height: '100%'
                }} src={imageUrl} alt="" />
            </div>
            <div>
                <p>{name}</p>
                <p>Bht achi biryani</p>
                <p>Available: {quantity}</p>
            </div>
        </div>
    )
}