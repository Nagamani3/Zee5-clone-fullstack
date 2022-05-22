import React from 'react'

const Fileupload = () => {
  return (
    <section>
      <article>
        <form>
          <div className="fileupload">
            <input type="text" name="movie_langauge" value={movie_langauge} />
          </div>
          <div className="fileupload">
            <input type="text" name="movie_duration" value={movie_duration} />
          </div>
          <div className="fileupload">
            <input type="text" name="movie_genre" value={movie_genre} />
          </div>
          <div className="fileupload">
            <input type="text" name="movie_title" value={movie_title} />
          </div>
          <div className="fileupload">
            <input type="file" name="movieImage" value={movieImage} />
          </div>
        </form>
      </article>
    </section>
  );
}

export default Fileupload