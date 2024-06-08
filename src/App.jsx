import React from "react";
import Home from "./pages/Home";
import "./main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookService from "./components/BookService";
import AppointmentDate from "./components/AppointmentDate";
import Menu from "./components/menu";
import Deposit from "./components/Deposit";
import BookingForm from "./components/BookingForm";
import Payment from "./components/Payment";
import { GlobalProvider } from "./GlobalContext";
function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookService />} />
          <Route path="/date" element={<AppointmentDate />} />

          <Route path="/details" element={<BookingForm />} />

          <Route path="/deposit" element={<Deposit />} />

          <Route path="/menu" element={<Menu />} />

          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
