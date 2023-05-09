// import React from "react";
//headless ui menu
import { Menu } from "@headlessui/react";
//icons
import { BsChevronDown } from "react-icons/bs";
import "./Dropdown.scss";

const Dropdown = ({ items, text, type, dispatch }) => {
  return (
    <Menu as="div" className="drop">
      {/* Menu button */}
      <Menu.Button className="drop_btn">
        <p className="heading-4 drop_btn-text">{text}</p>
        <BsChevronDown className="heading-4" />
      </Menu.Button>
      {/* Menu item lists */}
      <Menu.Items as="ul" className="drop_list">
        {items.map((item) => (
          <Menu.Item
            key={item}
            className="drop_item"
            as="li"
            onClick={() => dispatch({ type, value: item })}
          >
            <p className="heading-4 drop-heading">{item}</p>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
