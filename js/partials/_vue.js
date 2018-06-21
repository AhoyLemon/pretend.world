Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus();
  }
});

var app = new Vue({
  el: '#app',
  data: {
    guess: '',
    phase: 'question',
    debugMode: true,
    celebrities: impersonators,
    met: [],
    headlineText: [],
    answer: 'correct',
    my: {
      round: 0,
      points: 0,
      correctGuesses: 0,
      score: 0,
      previousScore: 0,
      stepsToCheese: settings.stepsToCheese,
      cheeseAdvance: false,
      mood: null,
      previousMood: null,
      warmUp: true
    },
    current: {
      pic: '',
      name: '',
      url: '',
      variants: '',
      sex: ''
    },
    feedback: {
      headline: '',
      headlineClass: '',
      showAnswerMessage: false,
      answerMessage: '',
      showMoodMessage: false,
      moodMessage: '',
      showCheeseMessage: false,
      cheeseMessage: ''
    }
  },

  created: function () {
    
  },

  methods: {

    nextRound() {
      let self = this;
      self.phase = 'question';
      self.answer = null;
      self.my.round++;
      //self.my.score = (this.my.points / this.my.round);
      self.guess = '';
      self.findImpersonator();
      self.generateHeadline();
    },

    generateHeadline() {
      let self = this;
      let h;
      if (self.my.round == 1) {
        // Round 1
        self.my.warmUp = true;
      } else if (self.my.round <= settings.warmUpRounds) {
        // You're out of warm up phase.
        self.my.warmUp = true;
        h = randomFrom(minglingHeadlines);
        self.headlineText = [h[0], h[1]];
      } else {
        self.my.warmUp = false;
        h = randomFrom(moodHeadlines[self.my.mood]);
        self.headlineText = [h[0], h[1]];
      }
    },


    findImpersonator: function() {
      let self = this;

      // Who are you going to meet?
      let i = randomFrom(self.celebrities);
      self.current.pic = picPath + i.file;
      self.current.name = i.celebrity;
      self.current.url = i.url;
      self.current.variants = i.variants;
      self.current.sex = i.sex;

      // Did you already meet this person?
      if (stringInArray(self.current.name,self.met)) {
        self.findImpersonator();
      } else {
        self.met.push(self.current.name);
      }
      
    },

    checkName: function() {
      let self = this;
      let correctGuess = false;
      if (self.guess.toLowerCase() == self.current.name.toLowerCase() || self.guess == 'xxxx') {

        // 100% correct
        self.answer = 'correct';
        correctGuess = true;
      } else if (self.current.variants) {
        self.current.variants.forEach(v => {
          if (self.guess.toLowerCase() == v.toLowerCase() ) {
            // Acceptable variant.
            correctGuess = true;
            self.answer = 'close';
          }
        });
      
      }
      
      if (correctGuess == false) {
        let score = similarity(self.current.name,self.guess);
        if (score > 0.86) {
          // Your spelling was off, but this is close enough.
          self.answer = 'close';
          correctGuess = true;
        } else {
          // NOTE TO LEMON: Allow something here for the wrong answers you suspected.
          self.answer = 'wrong';
        }
      }

      if (self.answer == 'correct') {
        self.my.points = self.my.points + 1;
        self.my.correctGuesses++;
      } else if (self.answer == 'close') {
        self.my.points = self.my.points + 0.7;
        self.my.correctGuesses++;
      } else if (self.answer == 'wrong') {
        self.my.points = self.my.points - 0.5;
      }
      self.generateFeedback();
      self.phase = 'answer';
    },

    generateAnswerFeedback() {
      let self = this;
      self.feedback.headlineClass = self.answer;


      // Generate the Answer Feedback
      if (self.answer == "correct") { 
        self.feedback.headline = randomFrom(correctHeadlines); 

        let correctMessages = [
          [
            "The "+bold(self.current.name)+" impersonator ",
              [
                "brings you a drink",
                "shakes your hand a bit too aggressively",
                "introduces " +self.himself +" ",
                "smiles widely ",
                "lets you touch "+self.his+" hair" 
              ],
                ", and you chat for a bit about ",
                  [ 
                    "the Philadelphia Eagles.",
                    "Trump.",
                    "the United Nations and Palestine.", 
                    //"who you think is sleeping with whom.", 
                    "utter nonsense.",
                    "cocktail recipes.",
                    "lawn maintenance."
                  ]
          ],
          [
            capitalize(self.he)+ " introduces you to ",
              [
                "a Jimmy Carr impersonator",
                "this one guy who might be Glenn Danzig",
                "one of those mimes who dresses like a robot",
                "someone who claims to be one of the Daft Punk guys",
                self.his+" neighbor Catherine"
              ],
                ", and the three of you ",
                  [
                    "play a couple rounds of Uno.",
                    "name your favorite episodes of <i>Silicon Valley</i>.",
                    "make utterly baseless guesses about who at the party is sleeping together.",
                    "trade recipes for polenta.",
                    "discuss how well "+self.current.name+" aged.",
                    "brainstorm an ideal <i>Match Game</i> cast."
                  ]
          ]
        ];

        self.feedback.answerMessage = workThisArray(correctMessages);

      } else if (self.answer == "close") { 
        self.feedback.headline = randomFrom(closeHeadlines); 

        let closeMessages = [
          [
            capitalize(self.he) + ' is actually a ' +bold(self.current.name)+ ' impersonator,',
              [
                'but '+self.he+' chalks up the mistake to you having a speech impediment, which you now have to pretend for the rest of the night',
                'but '+self.he+' just assumes you&apos;e illiterate. To futher the ruse, you write down "HALO, NISE 2 MEET U :)" on a piece of paper.',
                'but blames the misspelling on your mouthful of Ritz crackers. You continue to make small talk, spitting crumbs in '+self.his+' face.'
              ]
          ],
          [
            "“"+self.guess+", right?” you ask.",
              [ 
                self.current.he+" looks at you quizzically. “"+bold(self.current.name)+" actually.” “That's what I said. "+self.current.name+".” You confidently reply.",
                "“Did you say "+self.current.name+" or "+self.guess+"?” "+self.he+" asks you. “Which is the right one?” you reply. “What?” "+self.he+" he asks. You then ask if "+self.he+" wants to see a magic trick, but do not perform one.",
                "“You mean "+self.current.name+"” he asks. You tell him that's what you meant."
              ]
          ],
          [
            "“You kinda look like "+self.guess+".” you tell "+self.him+".",
              [ 
                "“Kind of looking like "+bold(self.current.name)+" is kind of what I do!” he says. You laugh politely.",
                "He thanks you for saying so, and doesn't correct you by pronouncing it "+bold(self.current.name)+"."
              ]
          ],
        ];
        self.feedback.answerMessage = workThisArray(closeMessages);


      } else if (self.answer == "wrong") { 
        self.feedback.headline = randomFrom(wrongHeadlines); 
        let wrongMessages = [
          [
            "The  "+bold(self.current.name)+" impersonator ",
              [ 
                "looks visibly annoyed that",
                "is furious",
                "seems genuinely hurt that",
                "is super bummed",
                "can not believe"
              ],
                " you mistook " +self.him+" for "+self.guess+". ",
                  [ 
                    "You apologize profusely and "+self.he+" seems placated.",
                    "You distract "+self.him+" by asking "+self.his+" workout routine.",
                    "You lift your shirt collar over your face and "+self.he+" goes away.",
                    "You try to change topics, but the only one you can think of is javascript, and nobody <i>ever</i> wants to talk about javascript."
                  ]
          ],
          [
            "“"+self.guess+"!” you scream, and the "+bold(self.current.name)+" impersonator ",
              [
                "takes a wild punch at your nose, missing by a good foot.",
                "spits directly into your mouth.",
                "breaks down into tears.",
                "loudly calls your citizenship into question.",
                "makes a sound like “GGLLLGGGGRG”, which you find very distressing.",
                "screams “You'll never work in this town again!”",
                "screams “NO!”",
                "says he feels sorry for you."
              ],
                " ",
                  [
                    "That could have gone better.",
                    "You'll have to do better.",
                    "You feel genuine shame.",
                    "You fold your arms and look around the room for a couple minutes.",
                    "You apologize, and "+self.he+" immediately forgives you.",
                    "You apologize, but "+self.he+" doesn't forgive you."
                  ]
          ],
          [
            capitalize(self.he)+ " takes a few paces forwards and captures you an an unbreaking stare. ",
              [
                "“"+bold(self.current.name)+".” is "+self.his+" and only utterance, but the stare does not break. Eventually you have to excuse yourself to the bathroom to break "+self.his+" line of sight.",
                "“"+self.guess+"? You look at me and tell me how I look like "+self.guess+"!” You fail to think of a response, "+self.he+" screams “"+self.current.name+"!!!” loud enough for the entire party to hear."
              ]
          ]
        ];
        self.feedback.answerMessage = workThisArray(wrongMessages);
      }
    },

    checkPartyMood() {
      let self = this;
      self.my.previousScore = self.my.score;
      self.my.previousMood = self.my.mood;

      self.my.score = (self.my.points / self.my.round);

      // Generate the Mood Score
      if (self.my.score > 0.6) {
        self.my.mood = "veryGood";
      } else if (self.my.score > 0.3) {
        self.my.mood = "prettyGood";
      } else if (self.my.score > -0.1) {
        self.my.mood = "neutral";
      } else if (self.my.score > -0.3) {
        self.my.mood = "prettyBad";
      } else {
        self.my.mood = "veryBad";
      }

      // Mood Score Feedback
      if (self.my.mood != self.my.previousMood) {
        self.feedback.showMoodMessage = true;
        self.feedback.moodMessage = randomFrom(partyMoods[self.my.mood]);
      } else if (testChance(26)) {
        // a certain liklihood that it will display the general mood of the party, without specifically referencing your status.
        self.feedback.showMoodMessage = true; 
        self.feedback.moodMessage = randomFrom(partyMoods.noChange);
      } else {
        self.feedback.showMoodMessage = false;
      }

    },

    checkTheCheese() {
      let self = this;

      if (self.answer != "wrong") {
        self.my.stepsToCheese--;

        let f = cheeseStatus.any;

        if (self.my.stepsToCheese > 7) {
          // You are far from the cheese
          f.concat(cheeseStatus.far);
        } else if (self.my.stepsToCheese > 3) {
          // You are medium distance from the cheese
          f.concat(cheeseStatus.medium);
        } else if (self.my.stepsToCheese > 0) {
          // You are close to the cheese
          f.concat(cheeseStatus.close);
        } else {
          alert('you have won the game (LEMON, WRITE SOMETHING FOR THIS)');
        }

        self.feedback.showCheeseMessage = true;
        self.feedback.cheeseMessage = randomFrom(f);
        //self.feedback.cheeseMessage += ' <span>['+self.my.stepsToCheese+' steps remain]</span>';

      } else {
        // LEMON: Maybe an infrequent cheese cheeck here? Maybe?
        self.feedback.showCheeseMessage = false;
      }

      let answerMessageShowChance = 0;
      if (self.feedback.showMoodMessage == true && self.feedback.showCheeseMessage == true) {
        answerMessageShowChance = 20;
      } else if (self.feedback.showMoodMessage == true && self.feedback.showCheeseMessage == false) {
        answerMessageShowChance = 40;
      } else if (self.feedback.showMoodMessage == false && self.feedback.showCheeseMessage == true) {
        answerMessageShowChance = 60;
      } else if (self.feedback.showMoodMessage == false && self.feedback.showCheeseMessage == false) {
        answerMessageShowChance = 100;
      }

      if (testChance(answerMessageShowChance)) {
        self.feedback.showAnswerMessage = true;
      } else {
        self.feedback.showAnswerMessage = false;
      }

    },

    generateFeedback() {
      this.generateAnswerFeedback();
      this.checkPartyMood();
      this.checkTheCheese();
    }
    
  },

  computed: {

    myScore() {
      return (this.my.points / this.my.round);
    },

    // Pronouns
    his() {
      if (this.current.sex == 'm') { return 'his'; } 
      else if (this.current.sex == 'f') { return 'her'; }
    },

    he() {
      if (this.current.sex == 'm') { return 'he'; } 
      else if (this.current.sex == 'f') { return 'she'; }
    },
    him() {
      if (this.current.sex == 'm') { return 'him'; } 
      else if (this.current.sex == 'f') { return 'her'; }
    },
    himself() {
      if (this.current.sex == 'm') { return 'himself'; } 
      else if (this.current.sex == 'f') { return 'herself'; }
    }
  },

  beforeMount: function() {
    this.nextRound();
  }

});