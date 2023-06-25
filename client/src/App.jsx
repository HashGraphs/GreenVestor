import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Approve from "./pages/approve/Approve";
import BiderForm from "./pages/biderpostform/BiderForm";
import LandingPage from "./pages/LandingPage";
import TenderAllocation from "./pages/tenderallocation/TenderAllocation";
import AvailableTenders from "./pages/tenderpost/AvailableTenders";
import DisplayTenders from "./pages/tenderpost/DisplayAvailableTenders";
import Tenders from "./pages/tenderpost/Tenders";
// import { Layout } from "./components";
import Layout from "./components/Layout";
import "./App.css";

import Bidders from "./pages/bidders/MyBids";

import TenderStatus from "./pages/tenderstatus/TenderStatus";
import AllMyTenders from "./pages/tenderers/MyTenders";
import MyBidsTenders from "./pages/bidders/MyBids";
import Web3 from "./web3-storage/web3";


function App() {
  return (
    <div className="">
      
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<LayoutComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

const LayoutComponent = ({ children }) => {
  return (
    <Layout>
      <Routes>
        <Route path="/PostTenders" element={<Tenders />} />
        <Route path="/BiderForm" element={<BiderForm />} />
        <Route path="/TenderAllocation" element={<TenderAllocation />} />
        <Route path="/DisplayAvailableTenders" element={<DisplayTenders />} />
        <Route path="/AvailableTenders" element={<AvailableTenders />} />
        <Route path="/TenderStatus" element={<TenderStatus />} />
        <Route path="/Approve" element={<Approve />} />
        <Route path="/mybids" element={<MyBidsTenders />} />
        <Route path="/mytenders" element={<AllMyTenders />} />
        <Route path="/uploadweb3" element={<Web3 />} />
      </Routes>
      {children}
    </Layout>
  );
};

export default App;