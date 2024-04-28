import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow prev absolute z-10 top-1/2 bg-transparent border-2 border-white border-opacity-30 rounded-full cursor-pointer h-12 w-12 p-0" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  }

  export default PrevArrow;