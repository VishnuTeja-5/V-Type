import React,{useState, useEffect} from 'react'
import axios from 'axios';
import CodeEditorWindow from './CodeEditorWindow';
import {LanguageDropdown, ThemeDropdown, OutputWindow, InputWindow, OutputStatus} from './index';
import { languageOptions } from '../data/languages';
import {defineTheme} from '../utils/defineTheme';

const CodingPage = () => {

  const [code, setCode] = useState();
  const [language, setLanguage] = useState(languageOptions[0]);
  const [theme, setTheme] = useState();
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);

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

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: import.meta.env.VITE_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.log(error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: import.meta.env.VITE_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token)
        }, 2000)
        return
      } else {
        setProcessing(false)
        setOutputDetails(response.data)
        // showSuccessToast(`Compiled Successfully!`)
        console.log('response.data', response.data)
        return
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      // showErrorToast();
    }
  };
  
  return (
    <div className='w-full h-full flex flex-col lg:grid lg:grid-cols-12 bg-img'>
    <div className='text-emerald-600 flex flex-col justify-center items-center p-3 border border-gray-800 bg-gray-950 backdrop-blur-sm bg-opacity-40 lg:col-start-1 lg:col-end-9'>
      <div className='w-full px-5 py-2 flex flex-wrap justify-around gap-2'>
        <LanguageDropdown onSelectChange = {onSelectChange}/>
        <ThemeDropdown onThemeChange={onThemeChange} theme={theme} />
        <button 
          className='w-20 flex justify-center items-center border rounded-lg border-teal-800 p-2 text-teal-600 bg-gray-900 backdrop-blur-sm bg-opacity-35 hover:scale-[1.1] duration-[350ms] hover:text-cyan-400 hover:border-emerald-400 hover:bg-gradient-to-tr hover:from-teal-900 hover:to-sky-900 hover:opacity-70 hover:backdrop-blur-sm hover:bg-opacity-5'
          onClick={handleCompile}
          disabled={!code}
          >{processing ? "Running..." : "Run"}
        </button>
        
      </div>
      <CodeEditorWindow 
          code={code}
          onChange={onChange}
          language={language?.value}
          theme={theme?.value}/>
      <OutputStatus outputDetails={outputDetails}/>

    </div>
    <div className='w-full h-full flex flex-col items-center gap-5 px-4 py-3 border border-gray-800 bg-gray-950 backdrop-blur-sm bg-opacity-40 lg:col-start-9 lg:col-end-13'>
      <div className='w-full h-full flex flex-col items-center py-4'>
        <InputWindow customInput={customInput} setCustomInput={setCustomInput} />
        
        <OutputWindow outputDetails={outputDetails} />
        </div>
      </div>
    </div>
  )
}

export default CodingPage;
