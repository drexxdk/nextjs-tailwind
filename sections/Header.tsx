import { useTheme } from "next-themes";
import Logo from "../components/Logo";
import{SunIcon ,MoonIcon} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import SwitchTheme from "../components/SwitchTheme";

const Header = () => {

  const {systemTheme, theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() =>{
    setMounted(true);
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[]) // [] means initially

  
  useEffect(() =>{
    localStorage.theme = theme;
  },[theme])

   const renderThemeChanger= () => {
      if(!mounted) return null;

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="dark"){
        return (
          <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
        )
      }
   };

  return (
    <header className="h-15 shadow-sm dark:border-gray-700">
      <div className="container  px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />
        <SwitchTheme />

        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;