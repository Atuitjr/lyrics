import { useState } from 'react';

import Error from './Error';

const Form = ({ setLyricsSearch }) => {
    const [search, setSearch] = useState({ artist: '', song: '' });
    const [error, setError] = useState(false);

    const { artist, song } = search;

    const changeHandle = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
    };

    const submitHandle = (e) => {
        e.preventDefault();

        if (artist.trim() === '' || song.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setLyricsSearch(search);
    };

    return (
        <div className='bg-info'>
            {error && <Error message='All fields are required' />}
            <div className='container'>
                <div className='row'>
                    <form
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                        onSubmit={submitHandle}
                    >
                        <fieldset>
                            <legend className='text-center'>
                                Music Lyrics Scanner
                            </legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artist</label>
                                        <input
                                            type='text'
                                            name='artist'
                                            placeholder='artist name'
                                            className='form-control'
                                            onChange={changeHandle}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Song</label>
                                        <input
                                            type='text'
                                            name='song'
                                            placeholder='song name'
                                            className='form-control'
                                            onChange={changeHandle}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >
                                Find
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
