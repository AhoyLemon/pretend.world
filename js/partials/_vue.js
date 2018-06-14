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
    celebrities: impersonators,
    met: [],
    answer: 'correct',
    my: {
      round: 0,
      points: 0
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
      message: ''
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

        self.feedback.message = workThisArray(correctMessages);

      } else if (self.answer == "close") { 
        self.feedback.headline = randomFrom(closeHeadlines); 

        let closeMessages = [
          [
            self.he + ' is actually a ' +self.current.name+ ' impersonator, but chalks it up to you having a speech impediment, which you now have to pretend to have for the rest of the night.',
            self.he + ' is actually a ' +self.current.name+ ' impersonator, but '+self.guess+' is close.'
          ]
        ];
        self.feedback.message = workThisArray(closeMessages);


      } else if (self.answer == "wrong") { 
        self.feedback.headline = randomFrom(wrongHeadlines); 
        let wrongMessages = [
          [
            "The  "+self.current.name+" impersonator",
              " ",
                [ "looks visibly annoyed that", "is furious", "seems genuinely hurt that" ],
                  " you mistook him for "+self.guess+". ",
                    [ "You apologize profusely and "+self.he+" seems placated.", "You distract "+self.him+" by asking "+self.his+" workout routine.", "You lift your shirt collar over your face and "+self.he+" goes away."]
          ],
          [
            "“"+self.guess+"!” you scream, and the "+self.current.name+" impersonator",
              " ",
                ["takes a wild punch at your noses, but misses considerably.", "spits directly into your mouth.", "breaks down into tears."]
          ]
        ];
        self.feedback.message = workThisArray(wrongMessages);

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
    this.findImpersonator();
  }

});