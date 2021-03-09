const Lyrics = ({ lyrics }) => {
    if (lyrics.trim() === '') return null;
    return (
        <>
            <h2>Song Lyrics</h2>
            <p className='letra'>{lyrics}</p>
        </>
    );
};

export default Lyrics;
