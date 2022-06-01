const CallProducts = async () => {
  const url = new URL('https://fakestoreapi.com/products/');
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Can't get products");
  }
};

const CallProduct = async (id) => {
  const url = new URL(`https://fakestoreapi.com/products/${id}`);
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error("Can't get product");
  }
};
export default { CallProducts, CallProduct };
