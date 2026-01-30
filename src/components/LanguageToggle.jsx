import { useLanguage } from "../context/LanguageContext"

export default function LanguageToggle() {
  const { lang, changeLang } = useLanguage()

  return (
    <div className="flex gap-3">
      <button
        onClick={() => changeLang("en")}
        className={`px-3 py-1 rounded font-bold ${
          lang === "en" ? "bg-mtn text-black" : "bg-black text-mtn"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => changeLang("fr")}
        className={`px-3 py-1 rounded font-bold ${
          lang === "fr" ? "bg-mtn text-black" : "bg-black text-mtn"
        }`}
      >
        FR
      </button>
    </div>
  )
}
