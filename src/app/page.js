"use-client";

import { BrowserRouter } from "react-router-dom";
import Planets from "./destination/page";
import Hero from "./hero/page";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/destination" element={<Planets />} />
      </Routes>
    </BrowserRouter>
  );
}
