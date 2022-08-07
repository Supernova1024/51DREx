import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Intro from './routes/intro/intro.component';

// import logo from './logo.png';

function App() {
  return (
    <Routes>
      {/* persistant navigation bar */}
      <Route path='/' element={<Navigation />}>
        <Route index element={<Intro />} />
        <Route path='project' element={<Intro />} />
        <Route path='faq' element={<Intro />} />
      </Route>
    </Routes>
  );
}

export default App;
