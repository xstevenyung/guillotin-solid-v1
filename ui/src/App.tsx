import type { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
import { lazy } from 'solid-js';

const SimpleModal = lazy(() => import('./pages/SimpleModal'));
const SimpleToast = lazy(() => import('./pages/SimpleToast'));

const App: Component = () => {
  return (
    <Routes>
      <Route path="/simple-modal" element={<SimpleModal />} />
      <Route path="/simple-toast" element={<SimpleToast />} />
    </Routes>
  );
};

export default App;
