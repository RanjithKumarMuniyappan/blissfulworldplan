
import { BrowserRouter,  Navigate, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import ScrollToTop from './CommonComponents/ScrollToTop'
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

import Home from './pages/Home/page';
import Plan from './pages/Plan/page';
import About from './pages/AboutUs/page';
import JoinUs from './pages/JoinUs/page';



const Layout: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);
function App() {


  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="plan" element={<Plan />} />
          <Route path="the-plan" element={<Navigate to="/plan" replace />} />
          <Route path="join" element={<JoinUs />} />
          {/* <Route path="plan/why-now" element={<PlaceholderPage title="Why This Now" />} />
          <Route path="plan/why-the-world-needs-this" element={<PlaceholderPage title="Why The World Needs This" />} />
          <Route path="plan/why-join" element={<PlaceholderPage title="Why Join" />} />
          <Route path="plan/who-its-for" element={<PlaceholderPage title="Who It's For" />} />
          <Route path="plan/why-you-must-join" element={<PlaceholderPage title="Why You Must Join" />} />
          <Route path="plan/core-areas" element={<PlaceholderPage title="Core Areas" />} />
          {CORE_AREAS_DATA.map(area => (
            <Route key={area.slug} path={area.slug.substring(1)} element={<PlaceholderPage title={area.title} />} />
          ))}
          <Route path="practices" element={<PlaceholderPage title="Practices & Programs" />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="*" element={<PlaceholderPage title="404: Page Not Found" />} /> */}

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
