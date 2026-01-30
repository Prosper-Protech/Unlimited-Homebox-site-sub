import { motion } from "framer-motion"

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/237674137259"
      target="_blank"
      whileHover={{ scale: 1.15 }}
      className="fixed bottom-6 right-6 bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50"
    >
      💬
    </motion.a>
  )
}
