import { useEffect, useState } from 'react';
import Services from '../../../services/Services';
import Card from '../../ProductCard';
import './styles.scss';

function Home() {
  const [data, setData] = useState([]);
  const products = async () => {
    const fdata = await Services.CallProducts();
    setData(fdata);
  };
  useEffect(() => {
    products();
  }, []);
  return (
    <div className="App">
      <div className="App__title">
        <h3>Products</h3>
      </div>
      <div className="App__body">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
