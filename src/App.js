import logo from './logo.svg';
import './App.css';
import {useTranslation} from "react-i18next";
import { useEffect, useState } from 'react';
import {InputLabel,MenuItem,FormControl,Select} from "@material-ui/core"

function App() {
  const { t ,i18n} = useTranslation();  
  const userName = "Tanveer Shaikh";
  const [language,setLanguage] = useState('en');
  const handleLangChange=(event)=>{
    setLanguage(event.target.value);
  }
  const changeLang = (lang)=>{
    i18n.changeLanguage(lang);
  }
  useEffect(() => {
    changeLang(language);
  }, [language])
  return (
    <div className="App">
      <FormControl variant="standard" style={{flexDirection:"row"}}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={language}
          onChange={handleLangChange}
          label="Age"
        >
          <MenuItem value="en">
            <em>English</em>
          </MenuItem>
          <MenuItem value="hi">Hindi</MenuItem>
          <MenuItem value="ta">Tamil</MenuItem>
          <MenuItem value="zh">Chinese</MenuItem>
        </Select>
      </FormControl>
      <h2>{t("welcome_msg")}</h2>
      <p>{t("say_hellow")} {t("my_name",{name:userName})}</p>
    </div>
  );
}

export default App;
