const minglingHeadlines = [
  ["you're getting", "to know people"],
  ["you are", "mingling"],
  ["you are", "introducing yourself"],
  ["you're just", "getting started"]
];

const moodHeadlines = {
  veryGood: [
    ["you are", "beloved"],
    ["you are", "the hit of the party"],
    ["people think", "you're amazing!"],
    ["you're doing", "fantastic!"]
  ],
  prettyGood: [
    ["you are", "generally liked"],
    ["you are", "fairly popular"],
    ["people think", "favorable things about you"],
    ["you're doing", "rather well!"],
  ],
  neutral: [
    ["you are", "doing okay"],
    ["you are", "neither loved nor hated"],
    ["people think", "you're fine"],
    ["you're doing", "okay, I suppose."]
  ],
  prettyBad: [
    ["you are", "disliked"],
    ["you are", "unpopular"],
    ["people think", "you're kinda lousy"],
    ["you're doing bad", "please improve"]
  ],
  veryBad: [
    ["you are", "awful"],
    ["you are", "uniformly hated"],
    ["people think", "you totally suck"],
    ["you're are", "failing"]
  ]
};

const partyMoods = {
  veryGood: [
    "A rather dour looking woman informs you that she is a talent agent and exclaims loudly “you've got the goods!” You're unclear what specific goods she's speaking of, but tell her you appreciate her saying so.",
    "You tell what you feel to be a pretty lackluster anecdote and are met by loud laughter and honest-to-god applause.",
    "“All I wanna do” you exclaim, “is a zoom zoom zoom, and a boom boom.” At that, several guests inform you to shake your rump."
  ],
  prettyGood: [
    "You give finger guns to three separate people whom you have never met. Only one of those makes a face like you just farted. You consider this a statistical success.",
    "You brush against a nearby woman but manage to catch her arm before she spills her glass of red wine all over you.",
    "A departing guest asks where the nearest Target is. You give him directions, and are <i>mostly</i> right!",
    "You find yourself caught in a surprise game of beer pong and don't play well, but catch a nice buzz as a result.",
    "You find a Starburst in your pocket. A pink one, too. Yum."
  ],
  neutral: [
    "You gleefully recount your favorite scene from one of the Teenage Mutant Ninja Turtle movies, which nobody you're talking to has seen.",
    "You almost get into a conversation about Bitcoin, but thankfully reconsider.",
    "“This is fun.” you say to nobody.",
    "You start humming a tuneless melody to yourself."
  ],
  prettyBad: [
    "The opening riff of Dee-Lite’s “Groove Is In The Heart” starts to play, and you make an utterly nonsensical joke about Grobin In The Heart? Like, Josh Grobin is in your heart? Something like that. It is a <i>terrible</i> joke and everybody heard it.",
    "Nervous, you try to shift the conversation to the latest gossip, something about the Renaissance hotel using a blue cheese and mozzarella mix. But this only raises more suspicion about your intent.",
    "Calling for everyone's attention, you unscrew and drink a Mickey's Big Mouth in less than two seconds, believing it will impress people. It doesn't.",
    "You start talking about javascript, disappointingly unaware that nobody ever wants to hear anybody else about javascript.",
    "Three separate guests inform you that no matter what song ends up playing, they never want to see you twerk again.",
    "It's unclearl exactly what provoked you to start singing a Björk song at that moment, but it's immediately clear you shouldn't have picked something from Volta."
  ],
  veryBad: [
    "A joke about Harvey Weinstein goes <i>way</i> off the rails and comes off as overtly anti-semitic. A Scarlett Johansson impersonator asks who let you in here, and you feel sweat on your forehead.",
    "You make an offhand comment about an Edward Scissorhands' props, asking him if he wrapped plastic safety scissors from the Dollar Store in tinfoil. He bursts into tears and runs out of the room, bits of foil falling on the ground in his wake.",
    "Unable to keep up with the flood of pointless references, you accidentally let drop that you don't <i>actually like movies.</i> The whole party goes silent, a glass falls to the floor and shatters.",
    "You see a guy who kind of looks like Kid from Kid N' Play, and try to do that one dance move where you kick each other's feet. You spend the next 5 minutes apologizing and looking for an ice pack."
  ],

  noChange: [
    "In a poorly lit corner, you see an Ashton Kutcher impersonator making out with a Demi Moore impersonator. A few feet away, a Bruce Willis impersonator is seemingly unphased by all of this, which seems oddly progressive.",
    "You notice a Carrot Top impersonator making his third trip out to the car to gather props for a joke he has planned. Nobody helps him, including you.",
    "Several people shout “murderer!” in unison, which briefly confuses you until the second time when you realize they were singing along to <i>Here Comes The Hotstepper</i>.",
    "despite the overactive air conditioning in the room, a guy who looks like Glenn Danzig seems comfortable in his mesh tank top. Also he might actually be Glenn Danzig.",
    "A few feet away is somebody who might be either a Brendan Eich impersonator or Brendan Eich himself. Regardless, nobody wants to talk to him about javascript.",
    "A discussion occurs about that one episode of <i>Nathan For You</i> with the Bill Gates impersonator. You miss most of the important details.",
    "You wonder if there had been a squabble over the party theme, every impersonator vying to have <i>their</i> movie recreated in the space. The result was a mixture of an 80s high school prom, derelict building props on the walls, medieval glassware, and just too much glitter."
  ]
};
