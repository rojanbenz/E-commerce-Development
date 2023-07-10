import SpecificProduct from "../components/SpecificProduct";

function Product1() {
  return (
    <>
      <SpecificProduct
        division1="first"
        url="https://images.unsplash.com/photo-1615028456268-02eb9815a776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=375&q=80"
        division2="second"
        name="Product Name: AirForce"
        brand="Brand: Nike"
        price="Price: $200"
        description="Description: These are the all white sneakers 
        from the brand Nike."
        buy="Buy Now"
        addtocart="Cart"
      />
    </>
  );
}
export default Product1;
