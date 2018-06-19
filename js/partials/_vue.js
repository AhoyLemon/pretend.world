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
    answer: 'correct',
    my: {
      round: 0,
      points: 0,
      score: 0,
      previousScore: 0,
      stepsToCheese: 10,
      cheeseAdvance: false,
      mood: "null",
      previousMood: "null"
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
      } else if (self.answer == 'close') {
        self.my.points = self.my.points + 0.7;
      } else if (self.answer == 'wrong') {
        self.my.points = self.my.points - 0.5;
      }
      self.generateFeedback();
      self.phase = 'answer';
    },

    generateFeedback() {
      let self = this;
      self.feedback.headlineClass = self.answer;


      // Generate the Answer Feedback
      if (self.answer == "correct") { 
        self.feedback.headline = randomFrom(correctHeadlines); 

        let correctMessages = [
          [
            "The "+self.current.name+" impersonator ",
              [ "brings you a drink", "shakes your hand", "introduces " +self.himself ],
                " and you chat for a couple minutes about ",
                  [ "Trump", "the Philadelphia Eagles" ],
                    "."
          ],
          [
            "The "+self.current.name+" impersonator ",
              [ "shakes your hand a bit too aggressively", "smiles widely ", "lets you touch "+self.his+" hair" ],
                " and you chat for a bit about ",
                  [ "the United Nations and Palestine", "who at this party you think is fucking whom", "utter nonsense" ],
                    "."
          ]
        ];

        self.feedback.answerMessage = workThisArray(correctMessages);

      } else if (self.answer == "close") { 
        self.feedback.headline = randomFrom(closeHeadlines); 

        let closeMessages = [
          [
            capitalize(self.he) + ' is actually a ' +self.current.name+ ' impersonator,',
              ['but '+self.he+' chalks up the mistake to you having a speech impediment, which you now have to pretend for the rest of the night', 'but '+self.he+' just assumes you&apos;e a terrible. To futher the ruse, you write down "HALO, NISE 2 MEET U :)" on a piece of paper. '+capitalize(self.he)+' gives you a pitying look and quietly disposes of your note.', 'but blames the misspelling on your mouthful of Ritz crackers. You continue to make small talk, spitting crumbs in '+self.his+' face.']
          ],
          [
            '“'+self.guess+', right?” you ask.',
              [ 
                self.current.he+" looks at you quizzically. “"+self.current.name+" actually.” “That's what I said. "+self.current.name+".” You confidently reply.",
                "“Did you say "+self.current.name+" or "+self.guess+"?” "+self.he+" asks you. “Which is the right one?” you reply. “What?” "+self.he+" he asks. You then ask if "+self.he+" wants to see a magic trick, but do not perform one."
              ]
          ]
        ];
        self.feedback.answerMessage = workThisArray(closeMessages);


      } else if (self.answer == "wrong") { 
        self.feedback.headline = randomFrom(wrongHeadlines); 
        let wrongMessages = [
          [
            "The  "+self.current.name+" impersonator",
              " ",
                [ "looks visibly annoyed that", "is furious", "seems genuinely hurt that" ],
                  " you mistook " +self.him+" for "+self.guess+". ",
                    [ "You apologize profusely and "+self.he+" seems placated.", "You distract "+self.him+" by asking "+self.his+" workout routine.", "You lift your shirt collar over your face and "+self.he+" goes away."]
          ],
          [
            "“"+self.guess+"!” you scream, and the "+self.current.name+" impersonator",
              " ",
                ["takes a wild punch at your nose, but misses considerably.", "spits directly into your mouth.", "breaks down into tears."]
          ],
          [
            capitalize(self.he)+ " takes a few paces forwards and captures you an an unbreaking stare. ",
              [
                "“"+self.current.name+".” is "+self.his+" and only utterance, but the stare does not break. Eventually you have to excuse yourself to the bathroom to break "+self.his+" line of sight.",
                "“"+self.guess+"? You look at me and tell me how I look like "+self.guess+"!” You fail to think of a response, "+self.he+" screams “"+self.current.name+"!!!” loud enough for the entire party to hear."
              ]
          ]
        ];
        self.feedback.answerMessage = workThisArray(wrongMessages);
      }

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
      // NOTE TO LEMON: Allow for a rarely occuring mood feedback on no change.


      // Cheese Status Feedback

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
        self.feedback.cheeseMessage += ' <span>['+self.my.stepsToCheese+' steps remain]</span>';

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

    }
    
  },

  computed: {

    randomWrongHeadline() {
      let self = this;
      return randomFrom(self.wrongHeadlines);
    },

    myScore() {
      return (this.my.points / this.my.round);
    },

    // This part is deprecated
    /*
    
    peopleThink() {
      if (this.myScore < -0.4) {
        return "you are the worst person they have ever met";
      } else if (this.myScore < -0.2) {
        return "you suck";
      } else if (this.myScore < -0) {
        return "you're very unplesant";
      } else if (this.myScore < 0.2) {
        return "you are forgettable";
      } else if (this.myScore < 0.4) {
        return "you're okay";
      } else if (this.myScore < 0.6) {
        return "you're cool";
      } else if (this.myScore < 0.8) {
        return "you're the bee's knees";
      } else {
        return "you're the best person in the world";
      }
    },
    */

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