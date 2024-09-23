import React from 'react';
import Select from 'react-select';
import { monacoThemes } from '../data/themes';

const ThemeDropdown = ({onThemeChange, theme}) => {

    const themeOptions = Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        key: themeId,
      }))

  return (
    <div>
        <Select 
            options={themeOptions}
            defaultValue={themeOptions[42]}
            value={theme}
            onChange={onThemeChange}
        />
    </div>
  )
}

export default ThemeDropdown;