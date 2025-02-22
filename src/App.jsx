import './App.css'
import { useState } from 'react';
import Documents from './components/Documents';
import Profiles from './components/Profiles';
import GenerateQuiz from './components/GenerateQuiz';

function App() {
  const [activeTab, setActiveTab] = useState('Documents');

  const renderContent = () => {
    switch (activeTab) {
      case 'Documents':
        return <Documents />;
      case 'Profiles':
        return <Profiles />;
      case 'GenerateQuiz':
        return <GenerateQuiz />;
      default:
        return <Documents />;
    }
  };

  return (
    <div className="flex h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-5">
        <img src="src/assets/bg.jpg" alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 w-1/4 bg-green-800 bg-opacity-20 p-4 backdrop-filter backdrop-blur-sm text-white border-r-2 border-green-500 flex flex-col ">
        <h1 className="text-2xl font-bold my-8 p-4 text-green-500">Morhpeus</h1>
        <ul>
          <li className={`p-2 cursor-pointer ${activeTab === 'Documents' ? 'bg-green-700 rounded-lg' : ''} mb-4`} onClick={() => setActiveTab('Documents')}>Documents</li>
          <li className={`p-2 cursor-pointer ${activeTab === 'Profiles' ? 'bg-green-700 rounded-lg' : ''} mb-4`} onClick={() => setActiveTab('Profiles')}>Profiles</li>
          <li className={`p-2 cursor-pointer ${activeTab === 'GenerateQuiz' ? 'bg-green-700 rounded-lg' : ''} mb-4`} onClick={() => setActiveTab('GenerateQuiz')}>Generate Quiz</li>
        </ul>
      </div>
      <div className="relative z-10 w-3/4 bg-black bg-opacity-60 backdrop-blur-md ">
        {renderContent()}
      </div>
      
    </div>
  );
}

export default App;
