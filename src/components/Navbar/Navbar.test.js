import React from "react";
import { render, screen } from "@testing-library/react";
// import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "components/Navbar";
import { GlobalProvider } from "context/GlobalContext";

const renderNavbar = () =>
  render(
    // <Router>
    <GlobalProvider>
      <Navbar />
    </GlobalProvider>
    // </Router>
  );

test("navbar should be rendered", () => {
  renderNavbar();
});

test("navbar link should have a / href", () => {
  renderNavbar();
  const linkElement = screen.getByText(/・The/i);
  const logoLink = linkElement.closest("div");
  expect(logoLink).toHaveAttribute("href", "/");
});

test("navbar link should contain icon, logo class, ・Thecoolhouse text", () => {
  renderNavbar();
  const linkElement = screen.getByText(/・The/i);
  const icon = screen.getByRole(/img/i);
  const logoLink = linkElement.closest("div");
  expect(logoLink.contains(icon)).toBe(true);
  expect(logoLink.classList.contains("logo")).toBe(true);
  expect(linkElement.textContent).toBe("・Thecoolhouse");
});
