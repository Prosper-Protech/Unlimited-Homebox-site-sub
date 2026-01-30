import { motion } from "framer-motion"

export default function ContactButtons({ label }) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold">{label}</h2>

      <motion.a whileHover={{ scale: 1.05 }} href="tel:+237674137259"
        className="block bg-black text-mtn p-4 rounded-xl text-center font-bold">
        📞 +237 674 137 259
      </motion.a>

      <motion.a whileHover={{ scale: 1.05 }}
        href="https://wa.me/237674137259" target="_blank"
        className="block bg-green-600 text-white p-4 rounded-xl text-center font-bold">
        💬 WhatsApp
      </motion.a>

      <motion.a whileHover={{ scale: 1.05 }} href="tel:+237673805208"
        className="block bg-black text-mtn p-4 rounded-xl text-center font-bold">
        📞 +237 673 805 208
      </motion.a>
    </div>
  )
}
