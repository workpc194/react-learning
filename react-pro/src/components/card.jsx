import { Heart } from 'lucide-react'

const card = () => {
    const products = [
        {
            id: 1,
            image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
            name: "Essence Mascara Lash",
            price: 9.99,
            rating: '★★★★☆',
            reviews: 83,
        },
        {
            id: 2,
            image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
            name: "Eyeshadow Palette",
            price: 19.99,
            rating: '★★★☆☆',
            reviews: 45,
        },
        {
            id: 3,
            image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
            name: "Calvin Klein CK One",
            price: 49.99,
            rating: '★★★★★',
            reviews: 120,
        },
        {
            id: 4,
            image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
            name: "Dolce Shine Eau De",
            price: 69.99,
            rating: '★★★★☆',
            reviews: 67,
        },
        {
            id: 5,
            image: "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp",
            name: "Apple",
            price: 1.99,
            rating: '★★★☆☆',
            reviews: 50,
        },
        {
            id: 6,
            image: "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp",
            name: "Beef Steak",
            price: 12.99,
            rating: '★★★☆☆',
            reviews: 30,
        },
        {
            id: 7,
            name: "iPhone X",
            price: 899.99,
            image: "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/1.webp",
            rating: '★★★★★',
            reviews: 100,
        },
        {
            id: 8,
            name: "Apple AirPods",
            price: 129.99,
            image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp",
            rating: '★★★★★',
            reviews: 200,
        },
        {
            id: 9,
            image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
            name: "Apple AirPods Max Silver",
            price: 549.99,
            rating: '★★★★★',
            reviews: 150,
        },
        {
            id: 10,
            image: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
            name: "Nike Air Jordan",
            price: 149.99,
            rating: '★★★★☆',
            reviews: 75,
        },
    ];
    return (
        products.map((elem, idx) => {
            console.log(elem.name);
            console.log(elem.price);
            return (
                <div className="card-container" key={idx}>
                    <div className="card-top">
                        <div className="icon">
                            <Heart />
                        </div>
                        <img src={elem.image} alt={elem.name} />
                        <div className="add-cart">
                            <p>Add to Cart</p>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-bottom-text">
                            <h3>{elem.name}</h3>
                            <p className='price' style={{ color: '#DB4444' }}>${elem.price}</p>
                            <div className='rate'>
                                <div className="rating">{elem.rating}</div>
                                <div className="reviews" style={{opacity: '50%', fontSize: '14px'}}>({elem.reviews})</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default card