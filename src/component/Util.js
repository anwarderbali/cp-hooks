
    const movies=[ {
        id: 1,
        title: "Cinderella",
        description:
          "description:American animated film, released in 1950, that was made by Walt Disney and was based on the fairy tale by Charles Perrault. . ",
        posterURL: "https://i.ytimg.com/vi/IxNjzJ5uGTU/maxresdefault.jpg",
        rating: "9.5",
      },
      {
        id: 2,
        title: "The Lion King",
        description:
          "Few animated films have charged onto the screen with the confidence of Disney’s 1994 smash “The Lion King.” Eschewing opening titles, a giant red sun rising over the Serengeti filled the screen, as the soundtrack blasted the majestic opening song, “The Circle of Life.”",
        posterURL:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1548893746-51kT05ugyOL.jpg?crop=0.889xw:1xh;center,top&resize=480:*",
        rating: "9",
      },
      {
        id: 3,
        title: "VAMPS",
        description: "is a 2012 American comedy horror film directed by Amy Heckerling and starring Alicia Silverstone and Krysten Ritter. It was released on November 2, 2012",
        posterURL: "https://image.tmdb.org/t/p/w500/tA7revVjwKOd7JnNyi2P4gK4mVM.jpg",
        rating: "8.5",
      },
      {
        id: 4,
        title: "Home Alone",
        description: " is a 1990 American Christmas comedy film directed by Chris Columbus and written and produced by John Hughes. The first film in the Home Alone franchise, the film stars Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard, and Catherine O'Hara.",
        posterURL: "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg",
        rating: "6.7",
    },
    ]
    
const addToMovies=(data)=>{
    movies.push(data)
    console.log(movies)
}
export  {movies,  addToMovies};