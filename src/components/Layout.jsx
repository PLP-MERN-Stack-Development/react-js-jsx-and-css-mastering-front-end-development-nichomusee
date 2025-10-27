import Navbar from './Navbar'
import Footer from './Footer'

// Layout wraps content with Navbar and Footer
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="p-6">{children}</main>
      <Footer />
    </>
  );
}
