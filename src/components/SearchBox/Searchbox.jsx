import css from "./SearchBox.module.css";

export const SearchBox = ({ value,onSubmit,updateQueryString }) => {
    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit(value);
        }
    return (
    <form className={css["SearchForm"]} onSubmit={handleSubmit}>
    <input
      className={css["SearchForm-input"]}
      type="text"
      autoComplete="off"
      name="searchName"
      value={value}
      autoFocus
      placeholder="Search images and photos"
      onChange={(e)=>{updateQueryString(e.target.value);}}
    />
        <button type="submit" className={css["SearchForm-button"]}>
      <span className={css["SearchForm-button-label"]}>Search</span>
    </button>

  </form>
  );
};