import PropTypes from 'prop-types';
import './style.scss';

function ProductCard(props) {
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
        <div className="container__time__watch">00:00:00</div>
        <div className="container__time__button">
          <button type="button" className="button">
            Go to Detail
          </button>
        </div>
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
