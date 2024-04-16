const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, 'Name must be more that 3 characters'],
      maxLength: [20, 'Name must be at most 20 characters'],
      trim: true,
      default: 'Your playlist',
    },
    description: {
      type: String,
      trim: true,
      maxLength: [300, 'Description must be at most 300 characters'],
    },
    img: {
      type: String,
      default:
<<<<<<< HEAD
        'https://ik.imagekit.io/fvjzmtfw7/spotify/playlists/default.png?updatedAt=1696157039341',
=======
        'https://ik.imagekit.io/8cs4gpobr/Music-App/playlists/default.png?updatedAt=1696157039341',
>>>>>>> 3ecb8773ae3da311b4c4ebbe51aa69155fa49a49
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Please specify owner'],
    },
    songs: {
      type: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Song',
        },
      ],
      validate: {
        validator: (arr) => arr.length <= 30,
        message: 'You can not add more than 30 songs to your playlist',
      },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Playlist = new mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
