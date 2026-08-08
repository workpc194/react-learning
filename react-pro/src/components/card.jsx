import { Heart } from 'lucide-react'

const card = (elem) => {
    return (
        <div className="card-container">
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
                        <div className="reviews" style={{ opacity: '50%', fontSize: '14px' }}>({elem.reviews})</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card