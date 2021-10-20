import React from "react";
import ProductCategories from "mocks/en-us/product-categories.json";
import SidebarItem from "./SidebarItem";
import { BiFilter } from "react-icons/bi";
import "./Sidebar.scss";

const Sidebar = () => {
  const { results } = ProductCategories;
  return (
    <>
      <nav className="sidebar">
        <h3 className="sidebar-title uppercase">
          <BiFilter />
          <span className="sidebar__item-title">Filters</span>
        </h3>
        <ul className="sidebar-nav">
          <span className="sidebar__item-title-mobile bold-font uppercase">
            <BiFilter />
            Filters:{" "}
          </span>
          {results.map(({ id, data }) => (
            <SidebarItem key={id} item={data} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
