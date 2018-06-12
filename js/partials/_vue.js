var app = new Vue({
  el: '#app',
  data: {
    guess: '',
    celebrities: impersonators,
    current: {
      pic: '',
      name: ''
    }
  },

  created: function () {
    
  },

  methods: {
    findImpersonator: function() {
      let self = this;
      let i = randomFrom(self.celebrities);
      self.current.pic = picPath + i.file;
      self.current.name = i.celebrity;
    },

    checkName: function() {
      let self = this;

      if (self.guess.toLowerCase() == self.current.name.toLowerCase()) {
        alert('correct');
        self.guess = "";
        self.findImpersonator();
      } else {
        let a = self.guess;
        let b = self.current.name;
        let score = similarity(b,a);
        if (score > 0.86) {
          alert('Score of '+score+'? Yeah, close enough')
          self.findImpersonator();
        } else {
          alert('Score of '+score+'')
        }
      }
    }
    
  },

  computed: {
    // put computeds here
  },

  beforeMount: function() {
    this.findImpersonator();
  }

});