import React from "react";

function getCurrentTheme(){
  return localStorage.getItem("theme") || "dark"
}

function loadTheme(){
  document.querySelector("html")?.setAttribute("data-theme", getCurrentTheme());
}

function themeToggle(e: React.MouseEvent) {
  e.preventDefault();
  let actualValue = document.querySelector("html")?.getAttribute("data-theme"),
    newTheme = "";
  switch (actualValue) {
    case "light":
      newTheme = "dark"; break;
    case "dark":
      newTheme = "light"; break;
  }
  document.querySelector("html")?.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  return newTheme;
}

export { getCurrentTheme, loadTheme, themeToggle };
