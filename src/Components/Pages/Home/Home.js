import data from '../../../assets/assets.json';
import Card from '../../ProductCard';
import './styles.scss';

function Home() {
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
