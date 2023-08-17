import { useTransition } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
    const [t,i18n] = useTranslation("global");
    
    return(
        <div>
            <p>{t("header.message")}</p>
        </div>
    )
}
export default Header;