/*
    Define a variable named `notes` and assign a value of an empty array
*/


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

const notes = [{
    id: 1,
    text: `Yo yo yo`,
    author: `Snoop Dogg`,
    date: `10-31-98`,
    topics: [`snoopy`, `D.O.`, `double g`]
},
{id: 2,
    text: `This house is an effing prison! On planet BS!`,
    author: `Step Brothers`,
    date: `7-14-2009`,
    topics: [`will ferrell`, `quote`]
},
{id: 3,
    text: `Is that Stifler's mom?`,
    author: `American Pie`,
    date: `06-05-02`,
    topics: [`milf`, `culture`, `flute`]
},
{id: 4,
    text: `Everything is easy baby, just leave it up to Weezy baby`,
    author: `Lil Wayne`,
    date: `07-14-2008`,
    topics: [`lyric`, `great rappers`]
    },
{id: 5,
    text: `Marsha, Marsha, Marsha!`,
    author: `Jan`,
    date: `10-04-68`,
    topics: [`television`, `quote`, `classic`]
},
{id: 6,
    text: `Pikachu! I choose YOU!`,
    author: `Ash Ketchum`,
    date: `05-23-2000`,
    topics: [`anime`, `awesome`, `Pokemon`]
        }]


    notes.push({
        id: 7,
        text: `Guess who's back, back again?`,
        author: `Shady`,
        date: `08-13-2002`,
        topics: [`goat`, `lyric`, `tell a friend`]
    })
    notes.push({id: 8,
        text: `You're a mean one, Mr. Grinch!`,
        author: `Little Who girl`,
        date: `12-25-1965`,
        topics: [`Who`, `movie`]
    })
    notes.push(
        {id: 9,
        text: `It's Friday, and you ain't got no job`,
        author: `that dude on Friday`,
        date: `08-04-1999`,
        topics: [`Friday`, `movie`, `quote`]
        })
        



        console.log(notes)


        // list all your notes to the terminal
        // via a for...of loop
        //use console log to display ONLY the text property of each object


justText = []
 for (const textProp of notes) {
    justText.push(`${textProp.text}`)
 }

 console.log(justText)

 // you need a nested for loop -- one inside another
 //list all the topics used to describe notes


 console.log(`*** All Note Topics ***`)

//  allNoteTopics = []
//  for (const allTops of notes) {
//     allNoteTopics.push(`${allTops.topics}`)
//  }

//  console.log(allNoteTopics) 

// noteTopics = []
// for (const note of notes) {
//     for (const topic of note.topics) {
//         noteTopics += `${topic}`
//     }
// }

for (const note of notes) {
    for (const topic of note.topics) {
        console.log(`${topic}`)
    }
}

//add a new section of output
//new section = how many topics on average the authors applies to each post




console.log(`*** Average Topics Per Note ***`)



let totalTopics = 0

for (const note of notes) {
    totalTopics += note.topics.length



const averageTopics = totalTopics / notes.length 


console.log(averageTopics)



const filteredNotes = []
const criteria = `quote`

for (const note of notes) {
    if (note.topics.includes(criteria)) 
    filteredNotes.push(note)
}

console.log(filteredNotes)



console.log("*** Note Articles ***")



let newText = ""


for (const note of notes) {
    newText += `<article>\n${note.text}`
for (const topic of note.topics) {
    newText += `\n<section>${topic}</section>`
    newText += `</article>`

}
}



console.log(newText)






