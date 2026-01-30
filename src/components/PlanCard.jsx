// src/components/PlanCard.jsx

// Remove any previous duplicate declaration

const PlanCard = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md hover:shadow-xl transition-all">
      <h3 className="text-lg font-bold">Plan Name</h3>
      <p>Plan details here</p>
      <p className="text-yellow-600 font-semibold">Price</p>
    </div>
  )
}

// Export default (so you can import it as default in Home.jsx)
export default PlanCard
