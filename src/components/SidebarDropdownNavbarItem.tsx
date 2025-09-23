import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "@docusaurus/router";

interface SidebarDropdownNavbarItemProps {
  items: Array<{
    label: string;
    pluginId: string;
    sidebarId: string;
    routeBasePath: string;
  }>;
}

export default function SidebarDropdownNavbarItem({
  items,
}: SidebarDropdownNavbarItemProps) {
  const location = useLocation();
  const [currentLabel, setCurrentLabel] = useState("Select Documentation");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = items.find((item) =>
      location.pathname.includes(item.routeBasePath),
    );
    setCurrentLabel(current ? current.label : "Select Documentation");
  }, [location.pathname, items]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={dropdownRef}
      className={`navbar__item dropdown ${isOpen ? "dropdown--show" : "dropdown--hoverable"}`}
    >
      <a
        href="#"
        className="navbar__item navbar__link"
        aria-haspopup="true"
        aria-expanded={isOpen}
        role="button"
        onClick={handleToggle}
      >
        {currentLabel}
      </a>
      <ul className="dropdown__menu">
        {items.map((item) => (
          <li key={item.pluginId}>
            <a
              className="dropdown__link"
              href={`/docs/${item.routeBasePath.replace(/^\/|\/$/g, "")}/intro`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
