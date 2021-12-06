import ytdl from 'ytdl-core';
import fs from 'fs';

// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

ytdl('https://www.youtube.com/watch?v=Yu2Pvc1ObRw')
    .pipe(fs.createWriteStream('video.mp4'));