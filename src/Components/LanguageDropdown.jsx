import React from 'react';
import Select from 'react-select';
import {languageOptions} from '../data/languages';

const LanguageDropdown = ({onSelectChange}) => {
  return (
    <div className=''>
        <Select 
            defaultValue={languageOptions[0]}
            options={languageOptions}
            onChange={(selectedOption) => onSelectChange(selectedOption) }
            className='{
              control: () => "bg-teal-950",
            }'
        />
    </div>
  )
}

export default LanguageDropdown;