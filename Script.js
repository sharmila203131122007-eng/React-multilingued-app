
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <h1>{t("title")}</h1>

      <button onClick={() => changeLanguage("en")}>
        English
      </button>

      <button onClick={() => changeLanguage("ta")}>
        தமிழ்
      </button>

      <h2>{t("welcome")}</h2>

      <p>{t("products")}</p>

      <button>{t("addToCart")}</button>

      <h2>{t("cart")}</h2>

      <p>{t("total")}</p>

      <button>{t("checkout")}</button>
    </div>
  );
}

export default App;
    
