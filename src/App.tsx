import Header from "./components/Header.tsx";
import { useLocation } from "react-router-dom";
import { Suspense, useMemo } from "react";
import AppRoutes from "./components/AppRoutes.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const { pathname } = useLocation();
  const isHomePage = useMemo(() => {
    return pathname === "/";
  }, [pathname]);

  return (
    <>
      <Header
        className={
          (isHomePage ? "absolute left-0 right-0 top-0 z-10 " : "") +
          "max-container"
        }
      />
      <section className={isHomePage ? "h-full" : "max-container"}>
        <main
          className={
            (isHomePage ? "" : "min-height ") +
            "h-full relative overflow-hidden"
          }
        >
          <Suspense>
            <AppRoutes />
          </Suspense>
        </main>
        {!isHomePage && <Footer />}
      </section>
    </>
  );
}

export default App;
