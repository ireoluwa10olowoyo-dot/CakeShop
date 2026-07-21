import Dashboard from "/src/components/Dashboard"
import NavBar from "/src/components/NavBar"
import CakeCards from "/src/components/CakeCards"



function Support(){
    return (
        <>
        <NavBar/>
        <Dashboard/>
    <main class="container mx-auto px-4 py-12 z-10 -mt-170 ml-72 px-6 pb-10 bg-rose-50 w-307">
    
    <div class="mb-8">
        <h1 class="text-center text-4xl font-bold  text-slate-800 pb-10">Support</h1>
        <input 
          type="text" 
          id="searchInput"
          placeholder="Search for help..." 
          class="w-220 p-4 text-lg border border-pink-600 rounded-lg shadow focus:ring-2 focus:ring-[#FFC0CB] focus:outline-none"
        />
      </div>

    
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-xl font-semibold text-[#e4007c] mb-2">Getting Started</h2>
        <p class="text-gray-700">Learn the basics of our platform to get started quickly.</p>
        <a href="#" class="text-[#ff1493] mt-4 inline-block">Learn More →</a>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-xl font-semibold  text-[#e4007c] mb-2">Account Management</h2>
        <p class="text-gray-700">Manage your account, settings, and privacy preferences.</p>
        <a href="#" class="text-[#ff1493] mt-4 inline-block">Learn More →</a>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-xl font-semibold text-[#e4007c] mb-2">Troubleshooting</h2>
        <p class="text-gray-700">Resolve common issues with step-by-step solutions.</p>
        <a href="#" class="text-[#ff1493] mt-4 inline-block">Learn More →</a>
      </div>
 
    </section>

    
    <section class="mt-12">
      <h2 class="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
      <div class="space-y-4">
    
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-lg font-semibold text-[#e4007c]">How do I reset my password?</h3>
          <p class="text-gray-600 mt-2">To reset your password, click on "Forgot Password" on the login page and follow the instructions.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-lg font-semibold text-[#e4007c]">Can I upgrade my plan later?</h3>
          <p class="text-gray-600 mt-2">Yes, you can upgrade or downgrade your plan anytime from the account settings page.</p>
        </div>
      </div>
    </section>
  </main>
        </>
    )
}
export default Support