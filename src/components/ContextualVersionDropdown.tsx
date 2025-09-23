import React, { useState, useRef, useEffect } from "react";
import type { ReactElement } from "react";
import { useLocation } from "@docusaurus/router";
import { useVersions } from "@docusaurus/plugin-content-docs/client";

/**
 * Custom versioned dropdown component that shows versions based on current docs context
 */
export default function ContextualVersionDropdown(): ReactElement | null {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pluginMatch = location.pathname.match(/\/docs\/([^\/]+\.koplugin)/);

  if (!pluginMatch) {
    return null;
  }

  const pluginPath = pluginMatch[1];
  const pluginId = pluginPath.split(".")[0];

  try {
    const versions = useVersions(pluginId);

    if (!versions || versions.length === 0) {
      return null;
    }

    const currentVersion =
      versions.find(
        (version) =>
          location.pathname.includes(version.name) ||
          location.pathname.includes(version.path),
      ) || versions[0];

    const versionLinks = versions.map((version) => ({
      name: version.name,
      label: version.label,
      path: version.path + "/intro",
    }));

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
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
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
          {currentVersion.label}
        </a>
        <ul className="dropdown__menu">
          {versionLinks.map((version) => (
            <li key={version.name}>
              <a
                className="dropdown__link"
                href={version.path}
                onClick={() => setIsOpen(false)}
              >
                {version.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "ContextualVersionDropdown: Could not load version data",
        error,
      );
    }
    return null;
  }
}
