import './search-box.styles.css';

const SearchBox = ({onChangeHandler, placeHolder, inputClass}) => (
    <input 
        className={`search-box ${inputClass}`}
        type='search' 
        placeholder={placeHolder}
        onChange={onChangeHandler}
    />
)

export default SearchBox;