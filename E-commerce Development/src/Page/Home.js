import Items from "../components/Items";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Items
        Cname="Background"
        Image="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=8"
        title="Elevate Your Comfort"
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
        link="/product"
        Btn="bttn"
        BtnText="Show More"
      />
      <Footer />
    </>
  );
}
export default Home;
