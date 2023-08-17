import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Header from './component/header';
import { useTranslation } from "react-i18next"


function App() {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value);
  };
  const getValue = () => {
    var select = document.getElementById('language');
    var value = select.options[select.selectedIndex].value;
    handleChangeLanguage(value);
    // alert(value);
  }
  return (
    <div className="App">
      {/* <button onClick={() => handleChangeLanguage("en")}>EN</button>
      <button onClick={() => handleChangeLanguage("hi")}>HI</button> */}

      <select id="language" onChange={() => getValue()}>
        <option selected disabled>Lang</option>
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
