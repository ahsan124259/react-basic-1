import './showProducts.css'

const ShowProducts = ({photo}) => {
    const{title,description,image}=photo
    return (
        <div className='products-details'>
            <img src={image} alt="" />
            <h3>Title:{title}</h3>
            <p>Description:{description}</p>
            <button className='button'>Selected Item </button>
            
        </div>
    );
};

export default ShowProducts;