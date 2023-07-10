import ProductItems from "../components/ProductItems";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductPage() {
  return (
    <>
      <Navbar />

      <ProductItems
        Cname="Background1"
        title="Our Products"
        classnam1="one"
        links1="/Product1"
        url1="https://images.unsplash.com/photo-1615028456268-02eb9815a776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=375&q=80"
        description="AirForce 1's"
        price1="Price: $200"
        link1="/product1"
        BtnText1="Buy Now"
        classnam2="two"
        links2="/Product2"
        url2="https://images.unsplash.com/photo-1542327534-59a1fe8daf73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        description2="Supreme Hoodie"
        price2="Price: $500"
        link2="/product2"
        classnam3="three"
        links3="/Product3"
        url3="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/i1-42117851-3ae6-4ead-8f98-43f44dbd667b/sportswear-mens-t-shirt-MK2TR1.png"
        description3="Nike T-shirt"
        price3="Price: $100"
        link3="/product3"
        classnam4="four"
        links4="/Product4"
        url4="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e0ee754-9e74-4140-ada6-120716053761/sb-kearny-skate-cargo-pants-53hStZ.png"
        description4="Cargo Pants"
        price4="Price: $100"
        link4="/product4"
        classnam5="five"
        links5="/Product5"
        url5="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6ecd21b3-0f93-4f26-9828-21e4cdd2f740/sportswear-phoenix-fleece-womens-over-oversized-pullover-hoodie-Kqx9H3.png"
        description5="Women Hoodie"
        price5="Price: $300"
        link5="/product5"
        classnam6="six"
        links6="/Product6"
        url6="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/680b415c-7ca6-4a66-a3e2-b15556753657/sportswear-collection-womens-high-waisted-wide-leg-woven-pants-WqBnPT.png"
        description6="Women pants"
        price6="Price: $250"
        link6="/product6"
        classnam7="seven"
        links7="/Product7"
        url7="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/47f8b654-16e4-414d-99d6-f65cfe77fce8/dri-fit-womens-training-tank-qv2gSx.png"
        description7="Women Top"
        price7="Price: $50"
        link7="/product7"
        classnam8="eight"
        links8="/Product8"
        url8="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7dcc6fd4-b41c-493e-85bd-58b8944b6b1d/blazer-mid-77-womens-shoes-NPWfjm.png"
        description8="Nike Blazer"
        price8="Price: $350"
        link8="/product8"
        classnam9="nine"
        links9="/Product9"
        url9="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f90d20d-93a5-48a8-bb26-750139d0e3f0/air-jordan-1-mid-mens-shoes-b3js2D.png"
        description9="Air Joradn"
        price9="Price: $450"
        link9="/product9"
      />
      <Footer />
    </>
  );
}
export default ProductPage;
