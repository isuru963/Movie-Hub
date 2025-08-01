function MovieCard({movie}) {

    return (
        <div className="movie-card">
        <div className="movie-poster">
        <img src={movie.url}  alt ={movie.title} />
        <div className="movie-overlay"> <button classname="favorite-btn" onClick={onFavoriteClick}></button> 
            
        </div>
        </div>
        </div>
    );
}
