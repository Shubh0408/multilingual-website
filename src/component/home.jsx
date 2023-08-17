import { useTranslation } from "react-i18next"

export default function Home () {

    const [t,i18n] = useTranslation("global");

    return (
        <div>
            <h1>{t("home.body")}</h1>
           </div>
    )
}