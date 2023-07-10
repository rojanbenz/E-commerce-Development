import "./Items.css";

function Items(props) {
  return (
    <>
      <div className={props.Cname}>
        <img alt="backimage" src={props.Image} />
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
      <div className="more">
        <a href={props.link} className={props.Btn}>
          {props.BtnText}
        </a>
      </div>
    </>
  );
}
export default Items;
