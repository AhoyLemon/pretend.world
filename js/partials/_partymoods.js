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
    "A rather dour looking woman informs you that she is a talent agent and exclaims loudly “you've got the goods!” You're unclear what specific goods she's speaking of, but tell you you appreciate her saying so.",
    "You tell what you feel to be a pretty lackluster anecdote and are met by loud laughter and honest-to-god applause.",
  ],
  prettyGood: [
    "You give finger guns to three separate people whom you have never met. Only one of those finger gun’d makes a face like you just farted. You consider this a success.",
    "You brush against a nearby woman but manage to catch her arm before she spills her glass of red wine all over you.",
  ],
  neutral: [
    "Wait staff weave through oversized props and bulky skirts while carrying cocktails painfully based off pun potential and not taste. The guests, however, are absolutely delighted.",
    "You wonder if there had been a squabble over the party theme, every impersonator vying to have THEIR movie recreated in the space. The result was a mixture of an 80s high school prom, derelict building props on the walls, medieval glassware, and just too much glitter."
  ],
  prettyBad: [
    "The opening riff of Dee-Lite’s “Groove Is In The Heart” starts to play, and you make an utterly nonsensical joke about Grobin In The Heart? Like, Josh Grobin is in your heart? Something like that. It is a <i>terrible</i> joke and everybody heard it.",
    "Nervous, you try to shift the conversation to the latest gossip, something about the Renaissance hotel using a blue cheese and mozzarella mix. But this only raises more suspicion about your intent.",

  ],
  veryBad: [
    "A joke about Harvey Weinstein goes <i>way</i> off the rails and comes off as overtly anti-semitic. A Scarlett Johansson impersonator asks who let you in here, and you feel sweat on your forehead.",
    "You make an offhand comment about an Edward Scissorhands' props, asking him if he wrapped plastic safety scissors from the Dollar Store in tinfoil. He bursts into tears and runs out of the room, bits of foil falling on the ground in his wake. Everyone at the party thinks you are SUCH an asshole for mentioning this.",
    "Unable to keep up with the flood of pointless references, you accidentally let drop that you don't <i>actually like movies.</i> The whole party goes silent, a glass falls to the floor and shatters. The quiet is only broken when someone yells Rosebud!. The crowd laughs, but does not forget."
  ],

  noChange: [
    "In a poorly lit corner, you see an Ashton Kutcher impersonator making out with a Demi Moore impersonator. A few feet away, a Bruce Willis impersonator is seemingly unphased by all of this, which seems oddly progressive.",
    "You notice a Carrot Top impersonator making his third trip out to the car to gather props for a joke he has planned. Nobody helps him, including you."
  ]
};
