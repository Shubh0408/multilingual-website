import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Header from './component/header';
import { useTranslation } from "react-i18next"


function App() {
  const [t,i18n] = useTranslation("global");
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
};

  return (
    <div className="App">
      <button onClick={() => handleChangeLanguage("en")}>EN</button>
      <button onClick={() => handleChangeLanguage("hi")}>HI</button>

      <select>
        <option defaultChecked disabled>Lang</option>
        <option value="en">En</option>
        <option value="hi"> Hi</option>
      </select>
      <p>{t("header.mainline")} </p>
      <Home />
      <Header />
    </div>
  );
}

export default App;
