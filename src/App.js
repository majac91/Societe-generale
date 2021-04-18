import "./App.scss";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import SectionMeeting from "./components/SectionMeeting/SectionMeeting";
import SectionBenefits from "./components/SectionBenefits/SectionBenefits";
import SectionBanking from "./components/SectionBanking/SectionBanking";

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <main className="main">
        <SectionMeeting></SectionMeeting>
        <SectionBenefits></SectionBenefits>
        <SectionBanking></SectionBanking>
      </main>
    </>
  );
}

export default App;
