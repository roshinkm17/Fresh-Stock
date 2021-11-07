import ProductCard from "./ProductCard";

function Feed({ products }) {
  return (
    <div >
      <div className="app__contents" >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            info={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
