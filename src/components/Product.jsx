import "./product.css"
import { useState } from "react"

const Product = (custom) => {
    const [like, setLike] = useState(true);
    const [showMore, setShowMore] = useState(false);

    function handleLike(){
        setLike(!like);
    }

    function handleMoreClick(){
        setShowMore(!showMore);
    }

    return (
        <div className="bungkus">
            <div className="produk">
                <img src={custom.urlImage} alt="" className="image"/>

                {showMore && <p>Produk ini bernama {custom.productName} dan harganya {custom.productPrice}</p>}
                <button onClick={handleMoreClick}>{showMore ? "Sembunyikan" : "Tampilkan"} Detail</button>
                <button style={{background : like? 'blue' : 'grey'}} onClick={handleLike}>{like ? "Suka" : "Batal Suka"}</button>

            </div>
        </div>
    )
  }

  
  export default Product