// Q:40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
console.log("-----Q:40-----")
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}
const make_album = (artist_name:string, album_title:string, tracks:number= 0): Album => {
    const album: Album = {
        artist: artist_name,
        title: album_title
    }
    if(tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

const album1 = make_album('Artist 1', 'Album 1');
const album2 = make_album('Artist 2', 'Album 2', 10);
const album3 = make_album('Artist 3', 'Album 3', 8);

console.log(album1);
console.log(album2);
console.log(album3);

// Q:41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log("-----Q:41-----")
const magicians: string[] = ["Harry Houdini", "David Blaine", "Criss Angel", "Derren Brown"];
const show_magicians =(magicians: string[]):void=>{
    for(const magician of magicians) {
        console.log(magician);
    }

}
show_magicians(magicians);

//Q:42 Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
console.log("-----Q:42-----")
const make_great =(magicians:string[]):void=>{
    for(let i=0; i<magicians.length; i++){
        magicians[i]= `Great ${magicians[i]}`;
    }

}
make_great(magicians);
show_magicians(magicians);

//Q:43 Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log("-----Q:43-----")

// Original array of magician names
const magicians_names: string[] = ["Harry Houdini", "David Blaine", "Criss Angel", "Derren Brown"];


// Function to create a new array with 'the Great' added
function make_great_magicians(magicianNames: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const name of magicianNames) {
        greatMagicians.push("the Great " + name);
    }
    return greatMagicians;
}

// Create a new modified array while keeping the original intact
const greatMagicians = make_great_magicians([...magicians_names]); // Spread operator makes a copy

// Show original magicians
console.log("Original Magicians:");
show_magicians(magicians_names);

// Show modified magicians
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
