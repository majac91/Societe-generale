import "./App.scss";
import Nav from "./components/Nav";
import Header from "./components/Header";
import SectionMeeting from "./components/SectionMeeting";
import SectionBenefits from "./components/SectionBenefits";
import SectionBanking from "./components/SectionBanking";
import SectionMagazin from "./components/SectionMagazin";
import Form from "./components/Form";
import Example from "./components/Example";
import SectionMap from "./components/SectionMap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <main className="main">
        <SectionMeeting></SectionMeeting>
        <SectionBenefits></SectionBenefits>
        <SectionBanking></SectionBanking>
        <SectionMagazin></SectionMagazin>
        <Form></Form>
        <Example></Example>
        <SectionMap></SectionMap>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
