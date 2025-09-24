// src/app/page.tsx
import { Button } from "@/src/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full"></div>
            <span className="text-2xl font-bold text-green-700">FarmConnect</span>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Connecting <span className="text-green-600">Farmers</span> Directly to <span className="text-orange-500">Buyers</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Eliminate middlemen, get fair prices, and access nationwide markets through our digital agricultural marketplace.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">I'm a Farmer</Button>
          <Button variant="outline" size="lg">I'm a Buyer</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fair Prices</h3>
            <p className="text-gray-600">Farmers get better prices, buyers save money by cutting out middlemen.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Nationwide Access</h3>
            <p className="text-gray-600">Connect farmers from rural areas with buyers in urban centers.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
            <p className="text-gray-600">Designed for Kenya's smartphone revolution and M-Pesa integration.</p>
          </div>
        </div>
      </section>
    </div>
  )
}