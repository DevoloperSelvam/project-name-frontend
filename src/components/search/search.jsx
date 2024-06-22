import styles from "./Search.module.css";
import { BiSearch } from "react-icons/bi";
import PropTypes from 'prop-types'; 

const Search = ({ value, onChange }) => {
  return (
    <div className={styles.search}>
      <BiSearch size={18} className={styles.icon} />
      <input
        type="text"
        placeholder="Search products"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};


Search.propTypes = { 
    value: PropTypes.string, 
    onChange: PropTypes.func
    
} 

export default Search;