import Product from "./components/Product"

const App = () => {
    const Products = [
        {
          id: 1,
          productName: 'Converse Run Star Motion Canvas',
          productPrice: 'Rp. 1.799.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg'
        },
        {
          id: 2,
          productName: 'Converse CTAS Construct Colorblock',
          productPrice: 'Rp. 1.599.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg'
        },
        {
          id: 3,
          productName: 'Converse Chuck Taylor All Star',
          productPrice: 'Rp. 899.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg'
        },
        {
          id: 4,
          productName: 'Converse Unisex Chuck 70 Plus',
          productPrice: 'Rp. 1.599.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA02871C-Brown.jpg'
        },
      ]
  return (
    <div>
        {
          Products.map((product)=>{
              return (
                  <Product urlImage={product.urlImage} key={product.id} productName={product.productName} productPrice={product.productPrice} />
              )
          })
        }
    </div>
)
    }
export default App




