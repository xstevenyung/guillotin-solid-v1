import type { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
import { lazy } from 'solid-js';

const SimpleModal = lazy(() => import('./pages/SimpleModal'));

const App: Component = () => {
  return (
    <Routes>
      <Route path="/simple-modal" element={<SimpleModal />} />
      {/* <Route path="/*all" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
