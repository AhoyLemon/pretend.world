
const picPath = "img/impersonators/";
const impersonators = [
  { 
    file: "adele-2.jpg",
    celebrity: "Adele",
    variants: [ "Adelle", "Adell" ],
    sex: 'f',
    url: "http://www.classiqueproductions.com/pages/adele-impersonator-2.htm"
  },
  { 
    file: "rowan-atkinson-2.jpg",
    celebrity: "Rowan Atkinson",
    variants: [ "Mr. Bean", "Rowin Atkinsin" ],
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/rowan-atkinson-impersonator-2.htm",
    note: "the website describes him as Rowan Atkinson “Mr. Beans”"
  },
  { 
    file: "drew-barrymore-1.jpg",
    celebrity: "Drew Barrymore",
    variants: [ "Drew Berrymore"],
    sex: 'f',
    url: "http://www.classiqueproductions.com/pages/drew-barrymore-impersonator-1.htm"
  },
  { 
    file: "blondie-1.jpg",
    celebrity: "Debbie Harry",
    variants: [ "Deborah Harry", "Blondie"],
    sex: 'f',
    url: "http://www.classiqueproductions.com/pages/blondie-impersonator-2.htm",
    note: "the website describes her as Blondie"
  },
  { 
    file: "orlando-bloom-2.jpg",
    celebrity: "Orlando Bloom",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/orlando-bloom-impersonator-2.htm"
  },
  { 
    file: "ace-ventura-1.jpg",
    celebrity: "Jim Carrey",
    variants: [ "Ace Ventura"],
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/ace-ventura-impersonator-1.htm"
  },
  { 
    file: "chevy-chase-1.jpg",
    celebrity: "Chevy Chase",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/chevy-chase-impersonator-1.htm"
  },
  { 
    file: "kenny-chesney-2.jpg",
    celebrity: "Kenny Chesney",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/kenny-chesney-impersonator-2.htm"
  },
  { 
    file: "cher-5.jpg",
    celebrity: "Cher",
    variants: [ "Cherilyn Sarkisian", "Cher Bono" ],
    sex: 'f',
    url: "http://www.classiqueproductions.com/pages/cher-impersonator-5.htm"
  },
  { 
    file: "winston-churchill-2.jpg",
    celebrity: "Winston Churchill",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/winston-churchill-impersonator-2.htm"
  },
  { 
    file: "eric-clapton-1.jpg",
    celebrity: "Eric Clapton",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/eric-clapton-impersonator-1.htm"
  },
  { 
    file: "george-clooney-1.jpg",
    celebrity: "George Clooney",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/george-clooney-impersonator-1.htm"
  },
  { 
    file: "joe-cocker-2.jpg",
    celebrity: "Joe Cocker",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/joe-cocker-impersonator-2.htm"
  },
  { 
    file: "jennifer-aniston-4.jpg",
    celebrity: "Jennifer Aniston",
    sex: 'f',
    url: "http://www.classiqueproductions.com/pages/jennifer-aniston-impersonator-4.htm"
  },
  { 
    file: "bing-crosby-1.jpg",
    celebrity: "Bing Crosby",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/bing-crosby-impersonator-1.htm"
  },
  { 
    file: "rodney-dangerfield-2.jpg",
    celebrity: "Rodney Dangerfield",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/rodney-dangerfield-impersonator-2.htm"
  },
  { 
    file: "bobby-darin-1.jpg",
    celebrity: "Bobby Darin",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/bobby-darin-impersonator-1.htm"
  },
  { 
    file: "bette-davis-1.jpg",
    celebrity: "Bette Davis",
    variants: [ "Betty Davis"],
    sex: 'f',
    url: "http://www.classiqueproductions.com/pages/bette-davis-impersonator-1.htm"
  },
  { 
    file: "sammy-davis-jr-6.jpg",
    celebrity: "Sammy Davis Jr.",
    variants: [ "Sammy Davis, Jr", "Sammy Davis Junior", "Sammy Davis Jr.", "Sammie Davis Jr", "Sammy Davis"],
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/sammy-davis-jr-impersonator-6.htm"
  },
  { 
    file: "bill-cosby-1.jpg",
    celebrity: "Bill Cosby",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/bill-cosby-impersonator-1.htm"
  },
  { 
    file: "johnny-depp-1h.jpg",
    celebrity: "Johnny Depp",
    variants: [ "Jonny Depp"],
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/johnny-depp-impersonator-1.htm"
  },
  { 
    file: "leonardo-dicaprio-2.jpg",
    celebrity: "Leonardo DiCaprio",
    variants: [ "Leo DiCaprio", "Leonardo DiCapreo"],
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/leonardo-dicaprio-impersonator-2.htm"
  },
  { 
    file: "john-dillinger-2.jpg",
    celebrity: "John Dillinger",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/john-dillinger-impersonator-2.htm"
  },
  { 
    file: "dr-phil-1.jpg",
    celebrity: "Dr. Phil",
    variants: [ "Dr Phil", "Doctor Phil", "Phil McGraw", "Phil MacGraw"],
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/dr-phil-impersonator-1.htm"
  },
  { 
    file: "elvis-1.jpg",
    celebrity: "Elvis Presley",
    variants: [ "Elvis", "Elvis Prestley"],
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/elvis-impersonator-1.htm"
  },
  { 
    file: "peter-falk-2.jpg",
    celebrity: "Peter Falk",
    variants: [ "Columbo" ],
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/peter-falk-impersonator-2.htm"
  },
  { 
    file: "kirstie-alley-1.jpg",
    celebrity: "Kirstie Alley",
    variants: [ "Kristie Alley", "Kirsty Alley"],
    sex: 'f',
    url: "http://www.classiqueproductions.com/pages/kirstie-alley-impersonator-1.htm"
  },
  { 
    file: "bill-gates-2.jpg",
    celebrity: "Bill Gates",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/bill-gates-impersonator-1.htm"
  },
  { 
    file: "hugh-grant-1.jpg",
    celebrity: "Hugh Grant",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/hugh-grant-impersonator-1.htm"
  },
  { 
    file: "rudy-guiliani-1.jpg",
    celebrity: "Rudy Guiliani",
    variants: [ "Rudy Guliani"],
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/rudy-guiliani-impersonator-1.htm"
  },
  { 
    file: "buddy-holly-6.jpg",
    celebrity: "Buddy Holly",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/buddy-holly-impersonator-6.htm",
    badGuess: [
      { 
        guess: "Elvis Costello",
        feedback: "Wrong nerd. Think older."
      }
    ]
  },
  { 
    file: "anthony-hopkins-1.jpg",
    celebrity: "Anthony Hopkins",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/anthony-hopkins-impersonator-1.htm"
  },
  { 
    file: "tom-hanks-1.jpg",
    celebrity: "Tom Hanks",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/tom-hanks-impersonator-1.htm"
  },
  { 
    file: "enrique-iglesias-2.jpg",
    celebrity: "Enrique Iglesias",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/enrique-iglesias-impersonator-2.htm"
  },
  { 
    file: "mick-jagger-3.jpg",
    celebrity: "Mick Jagger",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/mick-jagger-impersonator-3.htm"
  },
  { 
    file: "billy-joel-3.jpg",
    celebrity: "Billy Joel",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/billy-joel-impersonator-3.htm"
  },
  { 
    file: "elton-john-12.jpg",
    celebrity: "Elton John",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/elton-john-impersonator-12.htm"
  },
  { 
    file: "tom-jones-4.jpg",
    celebrity: "Tom Jones",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/tom-jones-impersonator-4.htm"
  },
  { 
    file: "stephen-king-1.jpg",
    celebrity: "Stephen King",
    variants: [ "Steven King" ],
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/stephen-king-impersonator-1.htm"
  },
  { 
    file: "henry-kissinger-1.jpg",
    celebrity: "Henry Kissinger",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/henry-kissinger-impersonator-1.htm"
  },
  { 
    file: "andie-mcdowell-1.jpg",
    celebrity: "Andie McDowell",
    sex: 'f',
    url: "http://www.classiqueproductions.com/pages/andie-mcdowell-impersonator-1.htm"
  },
  { 
    file: "barack-obama-2.jpg",
    celebrity: "Barack Obama",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/barack-obama-impersonator-2.htm"
  },
  { 
    file: "prince-5.jpg",
    celebrity: "Prince",
    variants: [ "The Artist Formerly Known As Prince" ],
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/prince-impersonator-5.htm"
  },
  { 
    file: "joan-rivers-8.jpg",
    celebrity: "Joan Rivers",
    sex: 'f',
    url: "http://www.classiqueproductions.com/pages/joan-rivers-impersonator-8.htm"
  },
  { 
    file: "shakira-4.jpg",
    celebrity: "Shakira",
    sex: 'f',
    url: "http://www.classiqueproductions.com/pages/shakira-impersonator-4.htm"
  },
  { 
    file: "frank-sinatra-10.jpg",
    celebrity: "Frank Sinatra",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/frank-sinatra-impersonator-10.htm"
  },
  { 
    file: "kevin-spacey-1.jpg",
    celebrity: "Kevin Spacey",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/kevin-spacey-impersonator-1.htm"
  },
  { 
    file: "howard-stern-1.jpg",
    celebrity: "Howard Stern",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/howard-stern-impersonator-1.htm",
    badGuess: [
      { 
        guess: "Joey Ramone",
        feedback: "I know, right? I agree, that looks like Joey Ramone. But it isn't."
      }
    ]
  },
  { 
    file: "barbra-streisand-29.jpg",
    celebrity: "Barbra Streisand",
    variants: [ "Barbara Streisand", "Barbra Striesand", "Barbara Strisand" ],
    sex: 'f',
    url: "http://www.classiqueproductions.com/pages/barbra-streisand-impersonator-29.htm"
  },
  { 
    file: "justin-timberlake-1.jpg",
    celebrity: "Justin Timberlake",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/justin-timberlake-impersonator-1.htm"
  },
  { 
    file: "steven-tyler-1.jpg",
    celebrity: "Steven Tyler",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/steven-tyler-impersonator-1.htm"
  },
  { 
    file: "mae-west-2.jpg",
    celebrity: "Mae West",
    variants: [ "May West" ],
    sex: 'f',
    url: "http://www.classiqueproductions.com/pages/mae-west-impersonator-2.htm"
  },
  { 
    file: "bruce-willis-2.jpg",
    celebrity: "Bruce Willis",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/bruce-willis-impersonator-2.htm",
    badGuess: [
      {
        guess: "Jason Statham",
        feedback: "Different bald guy."
      }
    ]
  },
  { 
    file: "clark-gable-1.jpg",
    celebrity: "Clark Gable",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/clark-gable-impersonator-1.htm"
  },
  { 
    file: "tim-mcgraw-4.jpg",
    celebrity: "Tim McGraw",
    sex: 'm',
    url: "http://www.classiqueproductions.com/pages/tim-mcgraw-impersonator-4.htm"
  },


  // Celebrity Lookalikes Dot Com
  { 
    file: "spielberg1.jpg",
    celebrity: "Steven Spielberg",
    sex: 'm',
    url: "http://www.celebrity-lookalikes.com/spielberg1.htm"
  },
  { 
    file: "woodyallen1.jpg",
    celebrity: "Woody Allen",
    sex: 'm',
    url: "http://www.celebrity-lookalikes.com/woodyallen1.htm"
  },
  { 
    file: "scarlett5.jpg",
    celebrity: "Scarlett Johansson",
    variants: [ "Scarlet Johansson", "Scarlet Johansen", "Scarlett Johansen" ],
    sex: 'f',
    url: "http://www.celebrity-lookalikes.com/johansson1.htm"
  },
  { 
    file: "deniro.jpg",
    celebrity: "Robert DeNiro",
    variants: [ "Robert DeNero", "Robert DiNero" ],
    sex: 'm',
    url: "http://www.celebrity-lookalikes.com/deniro2.htm"
  },
  { 
    file: "sharpton.jpg",
    celebrity: "Al Sharpton",
    sex: 'm',
    url: "http://www.celebrity-lookalikes.com/sharpton.htm"
  },
  { 
    file: "pattinson.jpg",
    celebrity: "Robert Pattinson",
    variants: [ "Robert Pattenson" ],
    sex: 'm',
    url: "http://www.celebrity-lookalikes.com/sharpton.htm"
  },
  { 
    file: "eminem.jpg",
    celebrity: "Eminem",
    variants: [ "Slim Shady", "Marshall Mathers" ],
    sex: 'm',
    url: "http://www.celebrity-lookalikes.com/sharpton.htm"
  },


  // Tribute Productions
  {
    file: "mike-myers.jpg",
    celebrity: "Mike Myers",
    variants: [ "Michael Myers" ],
    sex: 'm',
    url: "http://www.tributeproductions.com/celebrity-men"
  },
  {
    file: "conan-o-brien.jpg",
    celebrity: "Conan O'Brien",
    variants: [ "Conan O Brien", "Conan O'Brian" ],
    sex: 'm',
    url: "http://www.tributeproductions.com/celebrity-men"
  },
  {
    file: "ice-t.jpg",
    celebrity: "Ice T",
    variants: [ "Ice T.", "Ice-T", "Iced Tea" ],
    sex: 'm',
    url: "http://www.tributeproductions.com/celebrity-men"
  },
  {
    file: "alan-alda.jpg",
    celebrity: "Alan Alda",
    variants: [ "Allen Alda" ],
    sex: 'm',
    url: "http://www.tributeproductions.com/celebrity-men"
  },
  {
    file: "philip-seymour-hoffman.jpg",
    celebrity: "Philip Seymour Hoffman",
    variants: [ "Phillip Seymour Hoffman", "Philip Semore Hoffman", "Phillip Semore Hoffman", "Phillip Hoffman", "Philip Hoffman", "Philip Hoffmann"  ],
    sex: 'm',
    url: "http://www.tributeproductions.com/celebrity-men"
  },
  {
    file: "matthew-mcconaughey.jpg",
    celebrity: "Matthew McConaughey",
    variants: [ "Matthew McConnaughy", "Matthew Mcconnaughey", "Matthew McConnohey", "Matthew McConohy", "Matthew McConnaghey", "Matthew McConnihy", "Matthew McConnohay", "Matthew McConnihay" ],
    sex: 'm',
    url: "http://www.tributeproductions.com/celebrity-men"
  },
  {
    file: "matthew-perry.jpg",
    celebrity: "Matthew Perry",
    variants: [ "Matthew Parry", "Matthew Pary" ],
    sex: 'm',
    url: "http://www.tributeproductions.com/celebrity-men"
  },
  {
    file: "lindsey-lohan.jpg",
    celebrity: "Lindsey Lohan",
    variants: [ "Lindsay Lohan", "Lindsie Lohan" ],
    sex: 'f',
    url: "http://www.tributeproductions.com/celebrity-women"
  },
  {
    file: "cameron-diaz.jpg",
    celebrity: "Cameron Diaz",
    sex: 'f',
    url: "http://www.tributeproductions.com/celebrity-women"
  },
  {
    file: "keith-richards.jpg",
    celebrity: "Keith Richards",
    variants: [ "Kieth Richards", "Keith Richard" ],
    sex: 'm',
    url: "http://www.tributeproductions.com/music-men"
  },
  {
    file: "neil-diamond.jpg",
    celebrity: "Neil Diamond",
    sex: 'm',
    url: "http://www.tributeproductions.com/music-men"
  },
  {
    file: "jason-statham.jpg",
    celebrity: "Jason Statham",
    sex: 'm',
    url: "http://www.tributeproductions.com/celebrity-men"
  },

  // Mirror images
  {
    file: "stanley-tucci.jpg",
    celebrity: "Stanley Tucci",
    sex: 'm',
    url: "https://mirrorimages.co/portfolio/stanley-tucci/"
  },
  {
    file: "angela-merkel.jpg",
    celebrity: "Angela Merkel",
    sex: 'f',
    url: "https://mirrorimages.co/portfolio/angela-merkel/"
  },
  {
    file: "notorious-big.jpg",
    celebrity: "The Notorious B.I.G.",
    variants: [ "Notorious BIG", "Notorious B.I.G", "Biggie Smalls", "Biggy Smalls", "Biggie", "Christopher Wallace" ],
    sex: 'm',
    url: "https://mirrorimages.co/portfolio/biggy-smalls-notorious-b-g/"
  },
  {
    file: "channing-tatum.jpg",
    celebrity: "Channing Tatum",
    sex: 'm',
    url: "https://mirrorimages.co/portfolio/channing-tatum-look-alike/"
  },
  {
    file: "john-wayne.jpg",
    celebrity: "John Wayne",
    sex: 'm',
    url: "https://mirrorimages.co/portfolio/john-wayne/"
  },
  {
    file: "mark-wahlberg.jpg",
    celebrity: "Mark Wahlberg",
    variants: [ "Mark Wallberg", "Mark Wahlburg" ],
    sex: 'm',
    url: "https://mirrorimages.co/portfolio/mark-wahlberg/"
  },
  {
    file: "mark-zuckerberg.jpg",
    celebrity: "Mark Zuckerberg",
    variants: [ "Zuck" ],
    sex: 'm',
    url: "https://mirrorimages.co/portfolio/mark-zuckerberg/"
  },
  {
    file: "martha-stewart.jpg",
    celebrity: "Martha Stewart",
    sex: 'm',
    url: "https://mirrorimages.co/portfolio/martha-stewart/"
  },
  {
    file: "nicolas-cage.jpg",
    celebrity: "Nicolas Cage",
    variants: [ "Nicholas Cage", "Nick Cage", "Nic Cage" ],
    sex: 'm',
    url: "https://mirrorimages.co/portfolio/nicolas-cage/"
  },
  {
    file: "danny-devito.jpg",
    celebrity: "Danny DeVito",
    sex: 'm',
    url: "https://mirrorimages.co/portfolio/danny-devito/"
  },
  
];