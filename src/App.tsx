import React from "react";
import CreateStudent from "./Components/CreateStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Read from "./Components/Read";
import Update from "./Components/Update";
import Practice from "./Components/Practice";
const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/create" element={<CreateStudent />} />
            <Route path="/" element={<Read />} />
            <Route path="/update" element={<Update/>} />
            <Route path="/practice" element={<Practice/>}/>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
