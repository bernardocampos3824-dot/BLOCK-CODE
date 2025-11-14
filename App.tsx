
import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LessonPage from './pages/LessonPage';

type View = 'home' | 'lesson';

const App: React.FC = () => {
  const [route, setRoute] = useState<{ view: View; courseId: string | null }>({
    view: 'home',
    courseId: null,
  });

  const selectCourse = (courseId: string) => {
    setRoute({ view: 'lesson', courseId });
  };

  const goHome = () => {
    setRoute({ view: 'home', courseId: null });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header onLogoClick={goHome} />
      <main className="container mx-auto px-4 py-8">
        {route.view === 'home' && <HomePage onSelectCourse={selectCourse} />}
        {route.view === 'lesson' && route.courseId && <LessonPage courseId={route.courseId} />}
      </main>
    </div>
  );
};

export default App;
