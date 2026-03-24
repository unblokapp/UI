import { useState } from 'react';
import { Check, Globe, Circle, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type SetupStep = 'welcome' | 'enable' | 'switch' | 'finished';

function App() {
  const [currentStep, setCurrentStep] = useState<SetupStep>('welcome');

  const getStepNumber = (step: SetupStep): number => {
    const steps: Record<SetupStep, number> = {
      welcome: 0,
      enable: 1,
      switch: 2,
      finished: 3,
    };
    return steps[step];
  };

  const renderStepIndicator = () => {
    const currentNum = getStepNumber(currentStep);
    return (
      <div className="flex items-center justify-center gap-8 mb-8">
        {[1, 2, 3].map((num) => (
          <span
            key={num}
            className={`text-2xl font-semibold transition-colors duration-300 ${
              num <= currentNum ? 'text-white' : 'text-white/30'
            }`}
          >
            {num}
          </span>
        ))}
      </div>
    );
  };

  const renderWelcome = () => (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome to
        </h1>
        <h1 className="text-5xl font-bold gradient-text-pink-cyan mb-4">
          VibeKey
        </h1>
        <p className="text-white/60 text-lg">with Gesture Typing</p>
      </div>

      <div className="relative mb-10">
        <div className="w-64 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center border border-white/10">
          <div className="w-56">
            <div className="flex items-center gap-2 mb-2 px-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-white/60">Material</span>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-3">
              <div className="flex justify-center gap-1 mb-1">
                {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((key) => (
                  <span key={key} className="text-white/80 text-xs w-4 text-center">{key}</span>
                ))}
              </div>
              <div className="flex justify-center gap-1 mb-1 pl-3">
                {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((key) => (
                  <span key={key} className={`text-xs w-4 text-center ${key === 'd' ? 'text-cyan-400 font-bold' : 'text-white/80'}`}>{key}</span>
                ))}
              </div>
              <div className="flex justify-center gap-1 pl-6">
                {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((key) => (
                  <span key={key} className="text-white/80 text-xs w-4 text-center">{key}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-2 -right-2">
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </div>
      </div>

      <Button
        onClick={() => setCurrentStep('enable')}
        className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105"
      >
        Get started
        <ChevronRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );

  const renderEnable = () => (
    <div className="flex flex-col min-h-screen px-6 py-12">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-1">
          Setting up
        </h1>
        <h1 className="text-4xl font-bold gradient-text-pink-cyan mb-2">
          VibeKey
        </h1>
        <p className="text-white/60">with Gesture Typing</p>
      </div>

      {renderStepIndicator()}

      <Card className="bg-white/5 border-white/10 p-6 mb-4">
        <h2 className="text-xl font-bold text-white mb-3">
          Enable VibeKey
        </h2>
        <p className="text-white/70 text-sm leading-relaxed">
          Please check "VibeKey" in your Languages & input settings. 
          This will authorize it to run on your device.
        </p>
      </Card>

      <Button
        onClick={() => setCurrentStep('switch')}
        className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold py-6 rounded-xl border border-white/20 transition-all duration-300 flex items-center justify-center gap-3"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">A</span>
        </div>
        Enable in Settings
      </Button>
    </div>
  );

  const renderSwitch = () => (
    <div className="flex flex-col min-h-screen px-6 py-12">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-1">
          Setting up
        </h1>
        <h1 className="text-4xl font-bold gradient-text-pink-cyan mb-2">
          VibeKey
        </h1>
        <p className="text-white/60">with Gesture Typing</p>
      </div>

      {renderStepIndicator()}

      <Card className="bg-white/5 border-white/10 p-6 mb-4">
        <h2 className="text-xl font-bold text-white mb-3">
          Switch to VibeKey
        </h2>
        <p className="text-white/70 text-sm leading-relaxed">
          Next, select "VibeKey" as your active text-input method.
        </p>
      </Card>

      <Button
        onClick={() => setCurrentStep('finished')}
        className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold py-6 rounded-xl border border-white/20 transition-all duration-300 flex items-center justify-center gap-3 mb-3"
      >
        <Circle className="w-6 h-6 text-purple-400" />
        Switch input methods
      </Button>

      <Button
        className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold py-6 rounded-xl border border-white/20 transition-all duration-300 flex items-center justify-center gap-3"
      >
        <Globe className="w-6 h-6 text-purple-400" />
        Configure the keyboard
      </Button>
    </div>
  );

  const renderFinished = () => (
    <div className="flex flex-col min-h-screen px-6 py-12">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-1">
          Setting up
        </h1>
        <h1 className="text-4xl font-bold gradient-text-pink-cyan mb-2">
          VibeKey
        </h1>
        <p className="text-white/60">with Gesture Typing</p>
      </div>

      {renderStepIndicator()}

      <Card className="bg-white/5 border-white/10 p-6 mb-4">
        <h2 className="text-xl font-bold text-white mb-3">
          Congratulations, you're all set!
        </h2>
        <p className="text-white/70 text-sm leading-relaxed">
          Now you can type in all your favorite apps with VibeKey.
        </p>
      </Card>

      <Button
        className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold py-6 rounded-xl border border-white/20 transition-all duration-300 flex items-center justify-center gap-3 mb-3"
      >
        <Globe className="w-6 h-6 text-purple-400" />
        Configure the keyboard
      </Button>

      <div className="w-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white font-semibold py-6 rounded-xl border border-green-500/30 transition-all duration-300 flex items-center justify-center gap-3">
        <Check className="w-6 h-6 text-green-400" />
        Finished
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f0818]">
      <div className="max-w-md mx-auto">
        {currentStep === 'welcome' && renderWelcome()}
        {currentStep === 'enable' && renderEnable()}
        {currentStep === 'switch' && renderSwitch()}
        {currentStep === 'finished' && renderFinished()}
      </div>
    </div>
  );
}

export default App;
