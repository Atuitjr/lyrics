import SimilarArtist from './SimilarArtist';

const Artist = ({ artist }) => {
    if (Object.keys(artist).length === 0) return null;

    const { name, image, similar, tags, bio } = artist;
    const { summary, links } = bio;

    return (
        <div className='card border-light'>
            <div className='card-header bg-primary text-light font-weight-bold'>
                Artist Information
            </div>
            <div className='card-body'>
                <h2 className='card-text'>{name}</h2>
                <img
                    src={
                        image.filter((img) => img.size === 'extralarge')[0][
                            '#text'
                        ]
                    }
                    alt='Artist logo'
                />
                <p className='card-text'>Genre/s:</p>
                <ul className='card-list'>
                    {tags.tag.map((tag) => (
                        <li className='card-text' key={tag.url}>
                            {tag.name}
                        </li>
                    ))}
                </ul>
                <h2 className='card-text'>Biography</h2>
                <p className='card-text'>{summary}</p>
                <a
                    href={links.link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary btn-block'
                >
                    See More
                </a>
                <div className='col-12 p-5 row'>
                    {similar.artist.map((similarArtist) => (
                        <SimilarArtist
                            key={similarArtist.url}
                            artist={similarArtist}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Artist;
