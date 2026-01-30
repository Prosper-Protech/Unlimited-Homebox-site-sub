import { motion } from "framer-motion"

export default function FlyerCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-3xl overflow-hidden shadow-2xl"
    >
      <img src="/flyer.png" alt="Flyer" />
    </motion.div>
  )
}
