import { LanguageProvider } from "./context/LanguageContext"
import Home from "./pages/Home"
import FloatingWhatsApp from "./components/FloatingWhatsApp"

export default function App() {
  return (
    <LanguageProvider>
      <Home />
      <FloatingWhatsApp />
    </LanguageProvider>
  )
}
