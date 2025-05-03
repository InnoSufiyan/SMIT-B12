export function FoodItem({ imageUrl, name, quantity }) {
    return (
        <div style={
            {
                display: 'flex',
                marginBottom: '10px',
                borderRadius: '20px',
                width: '45vw',
                justifyContent: "center"
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

                <p style={{
                    backgroundColor: quantity ? 'green' : 'grey'
                }}>{quantity ? `Available: ${quantity}` : 'Out of Stock'}</p>
            </div>
        </div>
    )
}