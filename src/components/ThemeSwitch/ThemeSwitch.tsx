import React, { useEffect, useState } from "react";
import "./ThemeSwitch.css";
const moon_img = require("../imgs/moon-solid.svg");
const sun_img = require("../imgs/certificate-solid.svg");

export interface ThemeSwitchProps{
  size?: string
}

let themeSetDark: boolean = false;

const switchTheme = (toDark: boolean)=>{
  const root = document.querySelector(":root");
  themeSetDark = toDark;
  if(toDark){
    root?.setAttribute("as-theme-dark", "dark");
    localStorage.setItem("as-theme", "dark");
    return
  }
  root?.setAttribute("as-theme-dark", "light");
  localStorage.setItem("as-theme", "light");
}

export function isThemeSetDark(){return themeSetDark}
export function ThemeSwitch(props: ThemeSwitchProps) {
  const [themeDark, setThemeDark] = useState(localStorage.getItem("as-theme")==="dark");
  useEffect(()=>{
    switchTheme(themeDark);
  }, [themeDark]);
  return (
    <div style={{width: props.size?props.size:"30px"}}>
      {
        themeDark?
        <img src={sun_img} alt="theme_sun" className="as-theme-img" onClick={()=>setThemeDark(false)} />
        :
        <img src={moon_img} alt="theme_moon" className="as-theme-img" onClick={()=>setThemeDark(true)}/>
      }
    </div>
  );
}