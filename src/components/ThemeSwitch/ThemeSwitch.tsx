import React, { useEffect, useState } from "react";
import Sun from "../SwitchButtons/sun-solid";
import Moon from "../SwitchButtons/moon-solid";

export interface ThemeSwitchProps{
  style?: React.CSSProperties,
  className?: string
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
    <div style={props.style} className={props.className}>
      {
        themeDark?
        <Sun onClick={()=>setThemeDark(false)}/>
        :
        <Moon onClick={()=>setThemeDark(true)}/>
      }
    </div>
  );
}