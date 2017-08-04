
const ProductList = React.createClass({
    render: function () {
        const product = Data[0];
        return (
            <div className='ui items'>
                <Product 
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitter_avatar_url={product.submitter_avatar_url}
                    product_image_url={product.product_image_url}
                />
            </div>  
        );
    },
});

const Product = React.createClass({
  render: function () {
return (
      <div className='item'>
        <div className='image'>
          <img src='images/products/image-aqua.png' />
        </div>
        <div className='middle aligned content'>
          <div className='description'>
            <a>Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src='images/avatars/daniel.jpg'
            />
          </div>
        </div>
</div>
); },
});

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);