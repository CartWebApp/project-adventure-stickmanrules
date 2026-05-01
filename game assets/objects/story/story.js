
export const prologue = [/*Begins will the villagers*/
    {
        type: 'story',
        speaker: "Villager 1",
        text: "\"Hey, have you heard about the figure in the woods?.\""
    },
    {
        type: 'story',
        speaker: "Villager 2",
        text: "\"They say he isolates himself in a hut in the abandoned woods and prays on the folks that go near his woods.\""
    },
    {
        type: 'story',
        speaker: "Villager 3",
        text: "\"Stop joking, that story's old now everybody knows about the man in the woods.\""
    },
    {
        type: 'story',
        speaker: "Villager 3",
        text: "\"Come here, lemme tell you the story of the figure that we- all the villagers of the figures rising remember.\""
    },
];

export const forest_p01 = [ /*The Narrator will tell most of the story*/
    {
        type: 'story',
        speaker: "Narrator",
        text: "\"This so called figure is named 'Stickman' he wasn't like the rest of the villagers-unlike us who have fur and different perspectives, Stickman was flat and had no defining features.\""
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "\"Some say his parents died in a fire and he grew up resenting the ophanage he grewn up in.\""
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "\"He rejected the towns folk as the towns folk rejected him which lead to them exiling him from the forest although they forgot about that.\""
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "\"I don't know the exact details but I do know that he found a cabin in the woods to avoid others but ironically had to travel to the villages to get resources.\""
    }
];

export const forest_p02 = [
    {
        type: 'story',
        speaker: "Narrator",
        text: "Stickmans wandered around the forest after coming back from his outing in the nearby village, he looked exhausted taking heavy steps down the dirt trail",
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "On the way back Stickman sees a strange hooded figure lurking around the trees"
    }
];

/*-----------------------------------------------------*/

export const forest_a01 = [ /* Stickamn approachs the stranger */
    {
        type: 'story',
        speaker: "Narrator",
        text: "Stickman cautiously approaches the figure from behind until he gets within a arms reach of the figure"
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "*Pat*"
    },
    {
        type: 'story',
        speaker: "The Stranger",
        text: "\"WHO GOES THERE!?.\""
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "Stickman grabbed the strangers shoulder startling him as he quickly turned around meeting face to face with Stickman"
    },
    {
        type: 'story',
        speaker: "The Stranger",
        text: "*Clears his throat* \"Excuss me, you caught me by surprise but as surprises go you're the one I'm looking for.\""
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "Stickman looked puzzeled, \"someone was looking for me?.\" He thought to himself "
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "The figure removed his hood to reveal another Stickman only smaller and felt somewhat younger"
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "Stickman was stunned to see another of his kind"
    },
    {
        type: 'story',
        speaker: "The Stranger",
        text: "\"Right, let me introduce myself, I am Stickboy.\""
    },
    {
        type: 'story',
        speaker: "Stickboy",
        text: "\"As I said before, I am looking for you, so if you would be so kind to listen to my request.\""
    },
    {
        type: 'story',
        speaker: "Stickboy",
        text: "\"Please help me, help me find my parents.\""
    },
    {
        type: 'choices',
        speaker: "Narrator",
        text: 'What will you do?',
        options: [
            {
                text: "Leave Stickboy",
                next: 'forest_a02'
            },
            {
                text: "Question Stickboy",
                next: 'forest_b01'
            },
            {
                text: "Accept his request",
                next: 'forest_c01'
            },
        ],
    },
];

export const forest_a02 = [
    {
        type: 'story',
        speaker: "Narrator",
        text: "Stickman who has stayed isolated his entire life, signals for Stickboy to skedaddle",
    },
];

export const forest_b01 = [
    {
        type: 'story',
        speaker: "Narrator",
        text: "Stickman considers the boys request and although he is reluctant, he decides to accept Stickboys request"
    },
];

export const forest_c01 = [ /* The questions will be added later as it does */
    {
        type: 'story',
        speaker: "Narrator",
        text: "Stickboy felt suspicous, Stickman didn't know why I had to be him or why is the boy asking for help inside the forest but he knew Stickboy wasn't trustable, with that said, he decides to question Stickboys intentions",
    },
];

export const call_p01 = [
    {
        type: 'story',
        speaker: "Narrator",
        text: "Stickman who left Stickboy in the middle of the forest is sorting his groceries when suddenly *knock* *knock* *knock* followed by silence"
    },
    {
        type: 'story',
        speaker: "Narrotor",
        text: "Stickman checks the window to see Stickboy waiting at the door, Stickman getting fed up answers the door"
    },
    {
        type: 'story',
        speaker: "Stickboy",
        text: "Please reconsider my request, I AM lost and need help"
    },
    {
        type: 'story',
        speaker: "Stickboy",
        text: "I wanted your help because theres nobody else like me but you."
    },
];

export const refuse_p01 = [
    {
        type: 'story',
        speaker: "Narrator", text: "Stickman pondered this, it's true, there is nobody else like him and Stickboy but the bitterness of society and the isolation clouded his judgement",
    },
    {
        type: 'choices',
        speaker: "Narrator",
        text: "What will you do?",
        options: [
            {
                text: "Reject him", next: refuse_a01,
            },
            {
                text: "Accept his request", next: refuse_b01,
            },
        ],
    },
];

export const refuse_a01 = [
    {
        type: 'story',
        speaker: "Narrator", text: "Stickman deciding that it wasn't worth his time rejects Stickboys plead and instantly shuts the door on him",
    },
];

export const refuse_b01 = [
    {
        type: 'story',
        speaker: "Narrator",
        text: "After thinking about their situation Stickman agrees to take Stickboys request",
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "Before departing Stickman takes his glasses, his bag, and his journal just in case his quest takes more than a day.",
    },
];

export const mentor_p01 = [
    {
        type: 'story',
        speaker: "Narrator",
        text: "Not long after departing from Stickmans house nightfalls and the pair exhausted from traveling down the long forest path, they setup camp by the riverside deciding to continue their journey in the morning"
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "Stickman walks over to the river to collecting water, looking down into the waterm his reflection stares blankly at him"
    },
    {
        type: 'story',
        speaker: "Reflection",
        text: "\"Do you really think helping some little kid will change how we are? How you are?\""
    },
    {
        type: 'story',
        speaker: "Reflection",
        text: "\"Come on, we both know why you live in a hut in the middle of nowhere.\"",
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "Stickman splashes the water in retaliation only to find himself feeling the truth behind his reflections words"
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "He fills his water hide and turns to make it back to camp"
    },
];

export const crossing_p01 = [
    {
        type: 'story',
        speaker: "Narrator",
        text: "When morning broke quickly gathered his items and Stickboy to continue their journay",
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "The path is long and winding, Stickboy being new to the forest often got lost while Stickman tried to stop him from getting lost",
    },
    {
        type: 'story',
        speaker: "Stickboy",
        text: "\"I remember my parents saying something like \"We are head east but we'll be back soon\".\"",
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "Stickman knew of paths that lead to the larger villages east which he avoided unless he was desprate for resources",
    },
    {
        type: 'story',
        speaker: "Narrator",
        text: "They reach the edge of the forest though Stickman still feels reluctant about going to the villages espcially when its popular villages",
    },
    {
        type: 'choices',
        speaker: "Narrator",
        options: [
            {
                text: 'Go back', next: crossing_a01,
            },
            {
                text: 'Keep going', next: crossing_b02,
            },
        ],
    },
];

export const crossing_a01 = [
    {
        type: 'story',
        speaker: "Narrator",
        text: "Taking back what he said, Stickman ran back home without Stickboy noticing",
        text: "Stickboy never went back to Stickmans house assuming the kid could survive on his own in the wilds",
    },
];

export const crossing_b02 = [
    {
        type: 'story',
        speaker: "Narrator",
        text: "Steeling himself, Stickman takes the biggest step out of the forest",
        text: "Sunlight cresses Stickmans face and blinds him, in response Stickman shades his eyes with his hands revealing the lush world outside the forest",
    },
];

export const tae_p01 = [
    {
        type: 'story',
        speaker: "Narrator",
        text: "Continuing down the path, Stickman and Stickboy find themselves at a fork road",
    },
    {
        type: 'choices',
        speaker: "Narrator",
        text: "What will you do?",
        options: [
            {
                text: "Go left towards the mountains",
            },
            {
                text: "Continue straight ahead towards the grasslands",
            },
            {
                text: "Go right towards the desert",
            },
        ],
    },
];

e

export const completeStory = [prologue, forest_p01, forest_p02, forest_a01, forest_a02, forest_b01, forest_c01, call_p01, refuse_p01, refuse_a01, refuse_b01, mentor_p01, crossing_p01, crossing_a01, crossing_b02]