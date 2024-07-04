import "bootstrap/dist/css/bootstrap.css";

import "@/styles/globals.css";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-body-secondary vh-100">
      <Header />
      <main className="container mt-2">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
