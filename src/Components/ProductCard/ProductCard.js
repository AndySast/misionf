import PropTypes from 'prop-types';
import { useState } from 'react';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import './style.scss';

function ProductCard(props) {
  const [validador, setValidador] = useState(true);
  const end = () => {
    setValidador(false);
  };
  const { data } = props;
  return (
    <div className="container">
      <div className="container__image">
        <img
          src={data.image}
          alt="product"
          className="container__image__foto"
        />
      </div>
      <div className="container__text">
        <b>{data.title}</b>
      </div>
      <div className="container__time">
        <div className="container__time__watch">
          <Countdown
            date={Date.now() + parseInt(Math.random() * 300000, 10)}
            onComplete={end}
          />
        </div>
        {validador ? (
          <div className="container__time__button">
            <Link to={`/ProductDetail/${data.id}`}>
              <button type="button" className="button">
                Go to Detail
              </button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
  }),
};

ProductCard.defaultProps = {
  data: {
    image: '',
    title: '',
    id: 0,
  },
};
export default ProductCard;
