import Navbar from "../components/Navbar"
import PlanCard from "../components/PlanCard"
import FlyerCard from "../components/FlyerCard"
import ContactButtons from "../components/ContactButtons"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../data/translations"

export default function Home() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          {t.title}
        </h1>

        <p className="text-center text-lg font-semibold mb-14">
          {t.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {t.plans.map((p, i) => (
            <PlanCard key={i} {...p} />
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <FlyerCard />
          <ContactButtons label={t.contact} />
        </div>
      </section>
    </>
  )
}
