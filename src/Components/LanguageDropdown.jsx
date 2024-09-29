import React from 'react';
import Select from 'react-select';
import clsx from 'clsx';
import {languageOptions} from '../data/languages';

const LanguageDropdown = ({onSelectChange}) => {
  return (
    <div className=''>
        <Select 
            defaultValue={languageOptions[0]}
            options={languageOptions}
            onChange={(selectedOption) => onSelectChange(selectedOption) }
            unstyled
            classNames={{
                input: () => "[&_input:focus]:ring-0",
                control: () => " bg-gray-900 backdrop-blur-sm bg-opacity-70 px-3 rounded-lg text-emerald-500 hover:cursor-pointer min-w-[8rem]",
                menu: () => "bg-gray-950 backdrop-blur-[3px] bg-opacity-20 ",
                option: ({ isFocused, isSelected }) =>
                  clsx(
                    " p-2 text-emerald-500",
                    isFocused && `hover:cursor-pointer 
                        hover:bg-teal-900  hover:backdrop-blur-[2px] hover:bg-opacity-70
                        p-2 rounded hover:text-emerald-300`,
                    isSelected && "bg-teal-900 backdrop-blur-[2px] bg-opacity-30"
                  ),
              }}
        />
    </div>
  )
}

export default LanguageDropdown;