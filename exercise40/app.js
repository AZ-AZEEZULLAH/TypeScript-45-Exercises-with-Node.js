// Creating the make_album function.
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three function and describe three variables with different values.
var album1 = make_album("Rahat", "Album Title 1 ");
var album2 = make_album("Javid", "Album Title 2");
// Calling a make-album function with 3rd parameter.
var album3 = make_album("Shaman", "Album Title 3", 12);
console.log(album1);
console.log(album2);
console.log(album3);
