import './App.css'
import logo from './assets/ArabicWhite 1.27.59ΓÇ»AM.png';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white" dir="rtl">
      <img src={logo} className="w-60 h-auto mb-10" alt="Site logo" />
      <h1 className="text-6xl font-extrabold mb-6 flex items-center">
        قريباً
        <span className="inline-flex ml-2">
          <span className="animate-dot">.</span>
          <span className="animate-dot animation-delay-200">.</span>
          <span className="animate-dot animation-delay-400">.</span>
        </span>
      </h1>
      <p className="text-2xl max-w-lg text-center mb-10">
        موقعنا قيد الإنشاء. تابعونا لمزيد من المعلومات!
      </p>
      <div className="text-center">
        <p className="text-2xl animate-pulse">
          في هذه الأثناء، تابعونا على&nbsp;
          <a href="https://www.instagram.com/taeen.io/?hl=ar" target="_blank" rel="noopener noreferrer" className="text-pink-400">إنستجرام</a>.
        </p>
      </div>
    </div>
  )
}

export default App