import React, { useEffect, useState } from "react";
import themeSwitch from "./ThemeSwitch.css";
import Sun from "../SwitchButtons/sun-solid";
import Moon from "../SwitchButtons/moon-solid";

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
        <Sun width={props.size} onClick={()=>setThemeDark(false)}/>
        :
        <Moon width={props.size} onClick={()=>setThemeDark(true)}/>
      }
    </div>
  );
}