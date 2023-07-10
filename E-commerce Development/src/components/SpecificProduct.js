import "./SpecificProduct.css";

function SpecificProduct(props) {
  return (
    <>
      <div className="main">
        <div className="inner">
          <div className={props.division1}>
            <img alt="productimage" src={props.url} />
          </div>
          <div className={props.division2}>
            <h1>{props.name}</h1>
            <br />
            <h2>{props.brand}</h2>
            <br />
            <h2>{props.price}</h2>
            <br />
            <h2>{props.description}</h2>
            <br />
            <br />
            <br />
            <button>{props.buy}</button>
            <br />
            <br />
            <button>{props.addtocart}</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SpecificProduct;
