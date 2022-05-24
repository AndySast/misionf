import './style.scss';

function CardDetail() {
  const object = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  return (
    <div className="detail">
      <img src={object.image} alt="" className="detail--img" />
      <div className="detail__text">
        <h3 className="detail__text--title">{object.title}</h3>
        <p className="detail__text--description">
          {`Description: ${object.description}`}
        </p>
        <p className="detail__text--price">
          {'Price: '}
          <b>{object.price}</b>
        </p>
        <p className="detail__text--category">{object.category}</p>
        <div className="detail__text__rating">
          <p>
            {'Rating '}
            <b>{object.rating.rate}</b>
          </p>
          <p>
            {'Count '}
            <b>{object.rating.count}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
