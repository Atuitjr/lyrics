const SimilarArtist = ({ artist }) => {
    if (artist.length === 0) return null;
    const { name, url, image } = artist;
    const imageEL = image.filter((im) => im.size === 'extralarge')[0];
    return (
        <div className='col-12 col-sm-12 col-md-12 col-lg-6 mb-4'>
            <div className='card'>
                <img
                    src={imageEL['#text']}
                    alt={name}
                    className='card-img-top'
                />
                <div className='card-body text-center'>
                    <p className='card-text'>{name}</p>
                </div>
                <div className='card-footer'>
                    <a
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-block'
                    >
                        See Info
                    </a>
                </div>
            </div>
        </div>
    );
};
export default SimilarArtist;
