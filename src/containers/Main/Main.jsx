import { Link } from 'react-router-dom';
import { ArrowDown } from '../../assets/icons/icons';
import MainCard from '../../components/MainCard/MainCard';
import Img1 from '../../assets/images/img1.png';
import Img2 from '../../assets/images/img2.png';
import Img3 from '../../assets/images/img3.png';
import Img4 from '../../assets/images/img4.png';
import Img5 from '../../assets/images/img5.png';
import Img6 from '../../assets/images/img6.png';
import Img7 from '../../assets/images/img7.png';
import Img8 from '../../assets/images/img8.png';
import Img9 from '../../assets/images/img9.png';
import Img10 from '../../assets/images/img10.png';
import Img11 from '../../assets/images/img11.png';
import Img12 from '../../assets/images/img12.png';
import Img13 from '../../assets/images/img13.png';
import Img14 from '../../assets/images/img14.png';
import Img15 from '../../assets/images/img15.png';
import Img16 from '../../assets/images/img16.png';

import Carusel from '../Carusel/Carusel';
import Footer from '../Footer/Footer';
import Section4 from '../Section4/Section4';
import './Main.scss';

const Main = () => {
    return (
        <div className="Main">
            <div className="container">
                <div className="main-top">
                    <button>Новые объявления</button>
                    <button>Лучщие предложение</button>
                </div>

                <MainCard />

                <Link to="/" className="aligntext">
                    <span className="pokozat">Покозать еще</span>
                    <ArrowDown />
                </Link>

            </div>

            <Carusel />
            <Section4 />
            <Footer />
        </div>
    )
}

export default Main;

// background: #FFFFFF; box-shadow: 12px 4px 24px rgba(0, 0, 0, 0.0647645);