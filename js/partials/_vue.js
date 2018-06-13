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
      if (self.guess.toLowerCase() == self.current.name.toLowerCase()) {

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
      } else if (self.answer == "close") { 
        self.feedback.headline = randomFrom(closeHeadlines); 
      } else if (self.answer == "wrong") { 
        self.feedback.headline = randomFrom(wrongHeadlines); 
        
        let n = [
          "The  "+self.current.name+" impersonator looks visibly annoyed that you thought "+self.he+" was "+self.guess+". You apologize profusely and "+self.he+" seems somewhat placated.",
          "So "+self.he+" says to me "+self.he+" says my name is "+self.current.name+"."
        ];
        
        self.feedback.message = randomFrom(n);

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