import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Title from "./comps/Title";
import SignLink from "./comps/SignLink";
import SignUp from "./comps/SignUp";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={SignLink} />
        <Route exact path="/sign-up" component={SignUp} />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </Router>
  );
}

export default App;
