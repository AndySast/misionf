import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Services from '../../../services/Services';
import './style.scss';

function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [rateData, setRateData] = useState([]);
  const product = async () => {
    const fdata = await Services.CallProduct(id);
    setData(fdata);
    setRateData(fdata.rating);
  };
  useEffect(() => {
    product();
  }, []);
  return (
    <div className="detail">
      <img src={data.image} alt="" className="detail--img" />
      <div className="detail__text">
        <h3 className="detail__text--title">{data.title}</h3>
        <p className="detail__text--description">
          {`Description: ${data.description}`}
        </p>
        <p className="detail__text--price">
          {'Price: '}
          <b>{data.price}</b>
        </p>
        <p className="detail__text--category">{data.category}</p>
        <div className="detail__text__rating">
          <p>
            {'Rating '}
            <b>{rateData.rate}</b>
          </p>
          <p>
            {'Count '}
            <b>{rateData.count}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
