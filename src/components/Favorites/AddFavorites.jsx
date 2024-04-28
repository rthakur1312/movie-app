const AddFavorites = ({ movie, handleFavoritesList }) => {
  return (
    <div className="flex justify-center items-center cursor-pointer" onClick={() => handleFavoritesList(movie)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="red"
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
        />
      </svg>
      <p className="ml-2 underline">Add to favorite</p>
    </div>
  );
};

export default AddFavorites;
