import React from "react";
import Home from "./pages/Home";
import "./main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookService from "./components/BookService";
import AppointmentDate from "./components/AppointmentDate";
import Menu from "./components/menu";
import BookingForm from "./components/BookingForm";
import { GlobalProvider } from "./GlobalContext";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookService />} />
          <Route path="/date" element={<AppointmentDate />} />
          <Route path="/details" element={<BookingForm />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/confirmation" element={<Confirmation/>} />

        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
