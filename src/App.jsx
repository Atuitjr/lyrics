import { useState, useEffect } from 'react';
import axios from 'axios';

import Form from './components/Form';
import Lyrics from './components/Lyrics';
import Artist from './components/Artist';

function App() {
    const [lyricsSearch, setLyricsSearch] = useState({});
    const [lyrics, setLyrics] = useState('');
    const [artist, setArtist] = useState({});

    useEffect(() => {
        const lyricsAPISearch = async () => {
            if (Object.keys(lyricsSearch).length === 0) return;
            const { song, artist } = lyricsSearch;
            const uri = 'https://api.lyrics.ovh/v1';
            const url = `${uri}/${artist}/${song}`;

            const bandURI =
                'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo';
            const apiKey = 'bec90641002538588c2b7d336ca3f74e';
            const bandURL = `${bandURI}&artist=${artist}&api_key=${apiKey}&format=json`;

            const [lyrics, information] = await Promise.all([
                axios(url),
                axios(bandURL),
            ]);

            setLyrics(lyrics.data.lyrics);
            setArtist(information.data.artist);
        };
        lyricsAPISearch();
    }, [lyricsSearch]);

    return (
        <>
            <Form setLyricsSearch={setLyricsSearch} />
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Artist artist={artist} />
                    </div>
                    <div className='col-md-6'>
                        <Lyrics lyrics={lyrics} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
