import "../components/CartWidget.css";

function CartWidget () {
    return (
        <div className="cart-widget">
            <i className="bi bi-bag"></i>
            <span>0</span>
        </div>
    );
}

export default CartWidget;