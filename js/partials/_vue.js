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
        //let s = self.guess.toLowerCase().score(self.current.name.toLowerCase());
        let a = self.guess;
        let b = self.current.name;
        let s = similarity(b,a);
        //alert('no');
        alert('score is '+s);
      }
    }
    
  },

  computed: {

  },

  beforeMount: function() {
    this.findImpersonator();
  }

});