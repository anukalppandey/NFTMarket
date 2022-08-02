import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import Item from "./Item";
// import Minter from "./Minter";

function App() {

  // const nftId = "rrkah-fqaaa-aaaaa-aaaaq-cai";
  return (
    <div className="App">
      <Header />
      {/* <Minter /> */}
      {/* <Item id={nftId}/> */}
      <Footer />
    </div>
  );
}

export default App;
