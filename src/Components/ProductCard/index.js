function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src="https://via.placeholder.com/300x200" alt="product" />
      </div>
      <div className="product-card__info">
        <div className="product-card__title">
          <h3>Product Name</h3>
        </div>
        <div className="product-card__price">
          <h3>$100</h3>
        </div>
        <div className="product-card__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            euismod, nisi vel consectetur interdum, nisl nunc consectetur erat,
            eget tincidunt nisl nunc eget lorem.
          </p>
        </div>
        <div className="product-card__actions">
          <button className="btn btn-primary" type="button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
