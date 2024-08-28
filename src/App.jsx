// live code inclusion aka tree shaking only includes codes that you are actively using..this is importing just parts of packages that you will use

// dead code elimation looks to see if it can find things that were never used
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import { StrictMode } from "react";
import Details from "./Details";

//we are importing pet here as a defualt import because it has no curly braces aroubd it

//default is like the top  level import. if i say const pet = thing, i will us a named import because i have now given it a name

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    // a component must return something. This is the hello world of react application
    <StrictMode>
      <BrowserRouter>
        {/* all query client does is providing contex to components underneath them */}
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

const container = document.getElementById("root");
//   ReactDom.createRoot..this is the new way to render in react 18
const root = createRoot(container);
root.render(<App />);
