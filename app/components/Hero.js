import Button from './Button'

export default function Hero() {
  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/times-square.jpg')" }}
    >
      {/* Decorative Dots */}
      <span className="absolute top-10 left-10 w-5 h-5 bg-purple-500 rounded-full"></span>
      <span className="absolute bottom-10 right-10 w-5 h-5 bg-pink-500 rounded-full"></span>

      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
        OutSpot
      </h1>
      <p className="mt-4 text-white text-lg">
        Spot and be Spotted in your city's best restaurants, bars, and clubs. OutSpot rivals, rack up points, level up. Be everywhere they aren't.
      </p>

      <div className="mt-8 flex flex-col gap-4 w-72 sm:w-auto">
        <Button text="Continue with Apple" gradient />
        <Button text="Continue with Google" dark />
        <Button text="Get Started" orange />
      </div>

      <p className="mt-6 text-gray-300">
        Already have an account? <a href="/login" className="text-purple-400 underline">Log In</a>
      </p>
    </div>
  )
}
