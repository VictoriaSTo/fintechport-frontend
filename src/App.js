import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import theme from './components/UI/Theme';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Home from './pages/Home';
import TechEvents from './pages/TechEvents';
import TechNews from './pages/TechNews';
import FintechHub from './pages/FintechHubOfSZ';
import Gallery from './pages/Gallery';
import OpenPositions from './pages/OpenPositions';
import OrganisationManagment from './pages/OrganisationManagment';
import Partners from './pages/Partners';
import InnovationLab from './pages/InnovationLab';
import SubmissionForm from './pages/SubmissionForm';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PositionDescription from './components/Career/PositionDescription';
import NewsArticle from './components/News/NewsArticle';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';


function App() {
  const [headerValue, setHeaderValue] = useState("one");
  const [selectedAboutMenuIndex, setSelectedAboutMenuIndex] = useState(null)
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header headerValue={headerValue} setHeaderValue={setHeaderValue} selectedAboutMenuIndex={selectedAboutMenuIndex} setSelectedAboutMenuIndex={setSelectedAboutMenuIndex} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />

          {/* To replace */}
          <Route exact path="/innovation-lab" element={<InnovationLab />} />

          <Route exact path="/submission-form" element={<SubmissionForm/>} />
          {/* To delete */}
          <Route exact path="/tech-events" element={<TechEvents />} />
          <Route exact path="/tech-news" element={<TechNews />} />
          {/* Make it dynamic */}
          <Route exact path="/tech-connect/news/:id" element={<NewsArticle />} />
          {/* To delete or save */}
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/about-us/fintech-hub-of-sz" element={<FintechHub />} />
          <Route exact path="/about-us/gallery" element={<Gallery />} />
          <Route exact path="/about-us/open-positions" element={<OpenPositions />} />
          <Route exact path="/about-us/organisation-managment" element={<OrganisationManagment />} />
          <Route exact path="/about-us/partners" element={<Partners />} />

          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* Make it dynamic */}
          <Route exact path="/open-positions/:id" element={<PositionDescription />} />
        </Routes>
        <Footer headerValue={headerValue} setHeaderValue={setHeaderValue} selectedAboutMenuIndex={selectedAboutMenuIndex} setSelectedAboutMenuIndex={setSelectedAboutMenuIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
