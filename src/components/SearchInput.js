

const SearchInput = ({searchValue, setSearchValue}) => {
   return (
    <div className="text-center">
    <input 
        className="px-8 w-full md:w-3/5 transition-all duration-300 ease-out outline-none z-10 border-none bg-gray-700 text-gray-500 h-20 text-4xl my-10 mx-auto;
        " 
        type = "text" 
        placeholder="Search Movie Here..." 
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        />
    </div>
   )
  }

  export default SearchInput;