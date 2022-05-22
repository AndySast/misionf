import Card from '../../Components/ProductCard';
import './styles.scss';

function Home() {
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
    <div className="App">
      <div className="App__title">
        <h3>Products</h3>
      </div>
      <div className="App__body">
        <Card data={object} />
        <Card data={object} />
        <Card data={object} />
        <Card data={object} />
      </div>
    </div>
  );
}

export default Home;
