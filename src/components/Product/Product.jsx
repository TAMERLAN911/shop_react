import css from './product.module.css'

function Product(props) {
    return (
        <div className={css.Footer}>
            <img src={props.image} alt="" />
            <h1>{props.price}Р</h1>
            <h2>{props.name}</h2>
            <button>Купить</button>
        </div>
        
    )
}

export default Product