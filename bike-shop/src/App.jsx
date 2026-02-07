// Force rebuild with hulajnoga - TEST
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';


const bikeData = [
  {
    id: 1,
    name: 'Górski Forest Pro',
    type: 'Górski',
    price: '4299 zł',
    description: 'Profesjonalny rower górski z amortyzatorami',
    image: 'https://images.unsplash.com/photo-1548618944-d15e6d4e5b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Miejski City Comfort',
    type: 'Miejski',
    price: '2399 zł',
    description: 'Wygodny rower miejski do codziennej jazdy',
    image: 'https://images.unsplash.com/photo-1555963245-2cdd2ab0b46a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
{
    id: 3,
    name: 'Szosowy Speed Racer',
    type: 'Szosowy',
    price: '5999 zł',
    description: 'Lekki rower szosowy dla sportowców',
    image: 'https://images.unsplash.com/photo-1545231027-954a84a27b30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Elektryczny e-Bike Pro',
    type: 'Elektryczny',
    price: '8999 zł',
    description: 'Nowoczesny rower elektryczny z dużym zasięgiem',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    name: 'Dziecięcy Fun Rider',
    type: 'Dziecięcy',
    price: '1299 zł',
    description: 'Bezpieczny i kolorowy rower dla najmłodszych',
    image: 'https://images.unsplash.com/photo-1511994714008-b673b90900b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    name: 'BMX Street King',
    type: 'BMX',
    price: '2499 zł',
    description: 'Solidny rower BMX do freestyle i street',
    image: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 7,
    name: 'Tandem Love Story',
    type: 'Tandem',
    price: '5499 zł',
    description: 'Rower tandemowy dla par, idealny na wspólne wycieczki',
    image: 'https://images.unsplash.com/photo-1507035895480-08acdf9b9090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 8,
    name: 'Górski Extreme 3000',
    type: 'Górski',
    price: '7999 zł',
    description: 'Profesjonalny rower górski z pełnym zawieszeniem - TEST WORKFLOW v2',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 9,
    name: 'Elektryczna Hulajnoga Speedster',
    type: 'Hulajnoga',
    price: '3499 zł',
    description: 'Szybka hulajnoga elektryczna z zasięgiem 50km',
    image: 'https://images.unsplash.com/photo-1626697454363-5b6c8820420d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 10,
    name: 'KROSS Level B2',
    type: 'Górski',
    price: '5599 zł',
    description: 'Solidny rower górski KROSS z amortyzatorem',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 11,
    name: 'Deskorolka Street Pro',
    type: 'Deskorolka',
    price: '799 zł',
    description: 'Profesjonalna deskorolka do street skatingu',
    image: 'https://images.unsplash.com/photo-1520045864981-8c7874ed8e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 12,
    name: 'Rolki dziecięce Pink Roller',
    type: 'Rolki',
    price: '459 zł',
    description: 'Kolorowe rolki dla dzieci z regulowanym rozmiarem',
    image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

const partsData = [
  {
    id: 1,
    name: 'Hamulce tarczowe Shimano',
    category: 'Hamulce',
    price: '299 zł',
    image: 'https://images.unsplash.com/photo-1558618944-d15e6d4e5b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Kaseta 12-biegowa SRAM',
    category: 'Napęd',
    price: '189 zł',
    image: 'https://images.unsplash.com/photo-1545231027-954a84a27b30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Siodełko ergonomiczne',
    category: 'Akcesoria',
    price: '79 zł',
    image: 'https://images.unsplash.com/photo-1555963245-2cdd2ab0b46a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Przerzutka tylna Shimano XT',
    category: 'Napęd',
    price: '449 zł',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    name: 'Dzwonek klasyczny chromowany',
    category: 'Akcesoria',
    price: '59 zł',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    name: 'Dzwonek różowy dla pań',
    category: 'Akcesoria',
    price: '69 zł',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 7,
    name: 'Koszyk rowerowy aluminiowy',
    category: 'Akcesoria',
    price: '129 zł',
    image: 'https://images.unsplash.com/photo-1507035895480-08acdf9b9090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">🚴 BikeShop Pro</Link>
        <ul className="nav-links">
          <li><Link to="/">Strona główna</Link></li>
          <li><Link to="/parts">Części</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="main-content">
      <div className="hero">
        <h1>Witaj w BikeShop Pro</h1>
        <p>Odkryj świat profesjonalnych rowerów i akcesoriów</p>
      </div>

      <div className="slider-container">
        <h2>Najpopularniejsze modele</h2>
        <Slider {...sliderSettings}>
          {bikeData.map(bike => (
            <div key={bike.id} className="bike-slide">
              <img src={bike.image} alt={bike.name} />
              <h3>{bike.name}</h3>
              <p>{bike.type} - {bike.description}</p>
              <div className="bike-price">{bike.price}</div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="products-section">
        <h2>Wszystkie rowery</h2>
        <div className="products-grid">
          {bikeData.map(bike => (
            <div key={bike.id} className="product-card">
              <img src={bike.image} alt={bike.name} />
              <div className="product-info">
                <h3>{bike.name}</h3>
                <p>{bike.description}</p>
                <div className="product-price">{bike.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Parts() {
  return (
    <div className="main-content">
      <div className="hero">
        <h1>Części rowerowe</h1>
        <p>Wszystko czego potrzebujesz do konserwacji i modyfikacji swojego roweru</p>
      </div>

      <div className="products-section">
        <div className="products-grid">
          {partsData.map(part => (
            <div key={part.id} className="product-card">
              <img src={part.image} alt={part.name} />
              <div className="product-info">
                <h3>{part.name}</h3>
                <p>Kategoria: {part.category}</p>
                <div className="product-price">{part.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="main-content">
      <div className="hero">
        <h1>Kontakt</h1>
        <p>Skontaktuj się z nami i znajdź idealny rower dla siebie</p>
      </div>

      <div className="products-section">
        <h2>Nasze dane kontaktowe</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-info">
              <h3>📍 Adres</h3>
              <p>ul. Rowerowa 123<br/>00-001 Warszawa</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-info">
              <h3>📞 Telefon</h3>
              <p>+48 123 456 789<br/>+48 987 654 321</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-info">
              <h3>📧 Email</h3>
              <p>info@bikeshop.pl<br/>serwis@bikeshop.pl</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-info">
              <h3>🕐 Godziny otwarcia</h3>
              <p>Pon-Pt: 9:00-18:00<br/>Sob: 10:00-14:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;