import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addBasket } from "../redux/actions/action"

const Product = (props) => {
    return (
        <div>
            <h2><span>Alınacaklar listem</span> <Link to='/basket'>Faturam &#10095;</Link></h2>
            {props.productList.map(((item, index) => (
                <div className="product" key={index}>
                    <img src={item.image} alt={item.name}></img>
                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.price} ₺</p>
                        <button onClick={() => props.addBasket(item)}>Sepete Ekle</button>
                    </div>
                </div>
            )))}
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        productList: state.productList,
    }
}

export default connect(mapStatetoProps, { addBasket })(Product)