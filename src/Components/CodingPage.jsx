import React,{useState, useEffect} from 'react'
import CodeEditorWindow from './CodeEditorWindow';
import {LanguageDropdown, ThemeDropdown} from './index';
import { languageOptions } from '../data/languages';
import {defineTheme} from '../utils/defineTheme';

const CodingPage = () => {

  const [code, setCode] = useState();
  const [language, setLanguage] = useState(languageOptions[0]);
  const [theme, setTheme] = useState();

  const onSelectChange = (lang) => setLanguage(lang);

  const onThemeChange = (theme) => {
    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then(() => setTheme(theme));
    }
  };

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  
  return (
    <div className='w-full h-full flex flex-col gap-2 lg:grid lg:grid-cols-12 lg:gap-2'>
    <div className='text-emerald-600 flex flex-col justify-center items-center p-3 border border-emerald-800 rounded-lg bg-emerald-950 backdrop-blur-sm bg-opacity-40 lg:col-start-1 lg:col-end-9'>
      <div className='w-full px-5 py-2 flex justify-around'>
        <LanguageDropdown onSelectChange = {onSelectChange}/>
        <ThemeDropdown onThemeChange={onThemeChange} theme={theme} />
        <button className='w-20 rounded-md flex justify-center items-center text-emerald-500 border border-teal-900 hover:bg-gradient-to-tr hover:from-teal-900 hover:to-cyan-950 backdrop-blur-sm bg-opacity-50 duration-300 hover:scale-110'>Run</button>
        
      </div>
      <CodeEditorWindow 
          code={code}
          onChange={onChange}
          language={language?.value}
          theme={theme?.value}/>
      
    </div>
    <div className='w-full h-full flex flex-col items-center gap-5 px-4 py-3 border border-emerald-800 rounded-lg bg-emerald-950 backdrop-blur-sm bg-opacity-40 lg:col-start-9 lg:col-end-13'>
        <div className='w-full min-h-48 h-full bg-black text-white px-4 py-2'>
          Custom Input
        </div>
        <div className='w-full min-h-48 h-full bg-black text-white px-4 py-2'>
          Output
        </div>
      </div>
    </div>
  )
}

export default CodingPage;
