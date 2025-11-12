export default function Button({ text, gradient, dark, orange }) {
  let baseClass = "py-3 px-6 rounded-lg font-medium transition-colors duration-200 text-white w-full text-center"
  let styleClass = gradient 
    ? "bg-gradient-to-r from-purple-400 to-orange-400 hover:from-purple-500 hover:to-orange-500" 
    : dark 
    ? "bg-gray-900 hover:bg-gray-800" 
    : orange 
    ? "bg-orange-400 hover:bg-orange-500" 
    : "bg-gray-700"

  return (
    <button className={`${baseClass} ${styleClass}`}>
      {text}
    </button>
  )
}
