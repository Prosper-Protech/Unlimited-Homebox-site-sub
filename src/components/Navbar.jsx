import LanguageToggle from "./LanguageToggle"

export default function Navbar() {
  return (
    <nav className="bg-black text-mtn px-6 py-4 flex justify-between items-center">
      <span className="font-extrabold text-xl">HOMEBOX</span>
      <LanguageToggle />
    </nav>
  )
}
