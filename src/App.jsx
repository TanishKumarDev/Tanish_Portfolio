import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";

function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <div
        style={{ backgroundColor: "#2ced69" }}
        className="text-black text-center py-2 px-4 text-sm font-medium shadow-md relative"
      >
        🚧 This portfolio is currently under construction & being updated. Stay tuned for exciting features soon!
        <button
          onClick={() => setShowBanner(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black hover:text-black-200 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-black rounded-full p-1 transition duration-200 ease-in-out"
          aria-label="Close"
        >
          ×
        </button>
      </div>
      )}

      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
