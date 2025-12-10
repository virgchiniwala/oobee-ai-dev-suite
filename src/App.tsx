import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import IdeView from './views/IdeView';
import PrReview from './views/PrReview';
import RepoSettings from './views/RepoSettings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/ide" replace />} />
          <Route path="ide" element={<IdeView />} />
          <Route path="pr" element={<PrReview />} />
          <Route path="settings" element={<RepoSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
