import { useEffect, useState } from "react";

const SwitchTheme = () => {
    const [changed, setChanged] = useState(false);

    
  useEffect(() =>{
    const doc = document.documentElement;
    if(changed) {
        doc.style.setProperty('--color-primary-50', '255 247 237');
        doc.style.setProperty('--color-primary-100', '255 237 213');
        doc.style.setProperty('--color-primary-200', '254 215 170');
        doc.style.setProperty('--color-primary-300', '253 186 116');
        doc.style.setProperty('--color-primary-400', '251 146 60');
        doc.style.setProperty('--color-primary-500', '249 115 22');
        doc.style.setProperty('--color-primary-600', '234 88 12');
        doc.style.setProperty('--color-primary-700', '194 65 12');
        doc.style.setProperty('--color-primary-800', '154 52 18');
        doc.style.setProperty('--color-primary-900', '124 45 18');

        doc.style.setProperty('--color-secondary-50', '247 254 231');
        doc.style.setProperty('--color-secondary-100', '235 252 202');
        doc.style.setProperty('--color-secondary-200', '217 249 157');
        doc.style.setProperty('--color-secondary-300', '190 242 100');
        doc.style.setProperty('--color-secondary-400', '163 230 53');
        doc.style.setProperty('--color-secondary-500', '132 204 22');
        doc.style.setProperty('--color-secondary-600', '101 163 13');
        doc.style.setProperty('--color-secondary-700', '77 124 15');
        doc.style.setProperty('--color-secondary-800', '63 98 18');
        doc.style.setProperty('--color-secondary-900', '54 83 20');
    } else {
        doc.style.setProperty('--color-secondary-50', '255 247 237');
        doc.style.setProperty('--color-secondary-100', '255 237 213');
        doc.style.setProperty('--color-secondary-200', '254 215 170');
        doc.style.setProperty('--color-secondary-300', '253 186 116');
        doc.style.setProperty('--color-secondary-400', '251 146 60');
        doc.style.setProperty('--color-secondary-500', '249 115 22');
        doc.style.setProperty('--color-secondary-600', '234 88 12');
        doc.style.setProperty('--color-secondary-700', '194 65 12');
        doc.style.setProperty('--color-secondary-800', '154 52 18');
        doc.style.setProperty('--color-secondary-900', '124 45 18');

        doc.style.setProperty('--color-primary-50', '247 254 231');
        doc.style.setProperty('--color-primary-100', '235 252 202');
        doc.style.setProperty('--color-primary-200', '217 249 157');
        doc.style.setProperty('--color-primary-300', '190 242 100');
        doc.style.setProperty('--color-primary-400', '163 230 53');
        doc.style.setProperty('--color-primary-500', '132 204 22');
        doc.style.setProperty('--color-primary-600', '101 163 13');
        doc.style.setProperty('--color-primary-700', '77 124 15');
        doc.style.setProperty('--color-primary-800', '63 98 18');
        doc.style.setProperty('--color-primary-900', '54 83 20');
    }
  },[changed])

    const onClickSwitchTheme = () => {
        setChanged(!changed);
    }
    
    return <button onClick={onClickSwitchTheme} className="px-2 py-1 bg-yellow-500 text-gray-600 hover:bg-yellow-700 hover:text-white">Switch theme</button>
}

export default SwitchTheme;