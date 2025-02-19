import { Link } from 'react-router-dom';
import { PiPlant } from 'react-icons/pi';
import './PlantsFeatures.css';

function PlantsFeatures() {
  return (
    <div className="plants-features-container">
      <h1>Plantas</h1>
      <div className="feature-boxes">
        <div className="feature-box">
          <Link to="/plant/register">
            <PiPlant className="plant-icon" />
            <span>Registrar uma planta</span>
          </Link>
        </div>
        <div className="feature-box">
          <Link to="/plants">
            <PiPlant className="plant-icon" />
            <span>Listar plantas</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlantsFeatures;
