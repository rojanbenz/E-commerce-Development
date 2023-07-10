import "./Items.css";

function ProductItems(props) {
  return (
    <>
      <div className={props.Cname}>
        <div className="text">
          <h1>{props.title}</h1>
        </div>
      </div>
      <div className="product">
        <div className={props.classnam1}>
          <a href={props.links1}>
            <img alt="productimage" src={props.url1} />
          </a>
          <h2>{props.description}</h2>
          <h3>{props.price1}</h3>
          <br />
          <a href={props.link1} className="bttn1">
            {props.BtnText1}
          </a>
        </div>

        <div className={props.classnam2}>
          <a href={props.links2}>
            <img alt="productimage" src={props.url2} />
          </a>
          <h2>{props.description2}</h2>
          <h3>{props.price2}</h3>
          <br />
          <a href={props.link2} className="bttn1">
            {props.BtnText1}
          </a>
        </div>

        <div className={props.classnam3}>
          <a href={props.links3}>
            <img alt="productimage" src={props.url3} />
          </a>
          <h2>{props.description3}</h2>
          <h3>{props.price3}</h3>
          <br />
          <a href={props.link3} className="bttn1">
            {props.BtnText1}
          </a>
        </div>
      </div>

      <div className="product">
        <div className={props.classnam4}>
          <a href={props.links4}>
            <img alt="productimage" src={props.url4} />
          </a>
          <h2>{props.description4}</h2>
          <h3>{props.price4}</h3>
          <br />
          <a href={props.link4} className="bttn1">
            {props.BtnText1}
          </a>
        </div>

        <div className={props.classnam5}>
          <a href={props.links5}>
            <img alt="productimage" src={props.url5} />
          </a>
          <h2>{props.description5}</h2>
          <h3>{props.price5}</h3>
          <br />
          <a href={props.link5} className="bttn1">
            {props.BtnText1}
          </a>
        </div>

        <div className={props.classnam6}>
          <a href={props.links6}>
            <img alt="productimage" src={props.url6} />
          </a>
          <h2>{props.description6}</h2>
          <h3>{props.price6}</h3>
          <br />
          <a href={props.link6} className="bttn1">
            {props.BtnText1}
          </a>
        </div>
      </div>

      <div className="product">
        <div className={props.classnam7}>
          <a href={props.links7}>
            <img alt="productimage" src={props.url7} />
          </a>
          <h2>{props.description7}</h2>
          <h3>{props.price7}</h3>
          <br />
          <a href={props.link7} className="bttn1">
            {props.BtnText1}
          </a>
        </div>

        <div className={props.classnam8}>
          <a href={props.links8}>
            <img alt="productimage" src={props.url8} />
          </a>
          <h2>{props.description8}</h2>
          <h3>{props.price8}</h3>
          <br />
          <a href={props.link8} className="bttn1">
            {props.BtnText1}
          </a>
        </div>

        <div className={props.classnam9}>
          <a href={props.links9}>
            <img alt="productimage" src={props.url9} />
          </a>
          <h2>{props.description9}</h2>
          <h3>{props.price9}</h3>
          <br />
          <a href={props.link9} className="bttn1">
            {props.BtnText1}
          </a>
        </div>
      </div>
    </>
  );
}
export default ProductItems;
