import { Link } from "react-router-dom"
import {connect} from "react-redux"

const BasketCart = (props) => {
    const totalPrice = props.basket.reduce(
        (total, product) => (total += product.price),
        0
      )
    return(
        <div>
            <h2>
            <Link className='link' to='/'>&#10094; Alınacaklar listem</Link> <span>Faturam</span>
            </h2>
            {props.basket.map(((item, index)=> (
                <div className="product" key={index}>
                    <img src={item.image} alt={item.name}></img>
                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.price} ₺</p>
                    </div>
                </div>
            )))}
            <h3>Toplam Sepet Tutarı: {totalPrice} ₺</h3>
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        basket: state.basket,
    }
}

export default connect(mapStatetoProps) (BasketCart)