import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow next absolute z-10 right-0 top-1/2 bg-transparent border-2 border-white border-opacity-30 rounded-full cursor-pointer h-12 w-12 p-0" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  }

  export default NextArrow