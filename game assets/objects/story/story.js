const prologue = {
    name: 'prologue',
    data: [/*Begins will the villagers*/
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
    ]
};

const forest_p01 = {
    name: 'forest_p01',
    data: [ /*The Narrator will tell most of the story*/
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
    ]
};

const forest_p02 = {
    name: 'forest_p02',
    data: [
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
    ]
};

/*-----------------------------------------------------*/

const forest_a01 = {
    name: 'forest_a01',
    data: [ /* Stickamn approachs the stranger */
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
    ]
};

const forest_a02 = {
    name: 'forest_a02',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickman who has stayed isolated his entire life, signals for Stickboy to skedaddle",
        },
    ]
};

const forest_b01 = {
    name: 'forest_b01',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickman considers the boys request and although he is reluctant, he decides to accept Stickboys request",
            next: 'mentor_p01',
        },
    ]
};

const forest_c01 = {
    name: 'forest_c01',
    data: [ /* The questions will be added later as it does */
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickboy felt suspicous, Stickman didn't know why I had to be him or why is the boy asking for help inside the forest but he knew Stickboy wasn't trustable, with that said, he decides to question Stickboys intentions",
        },
    ]
};

const call_p01 = {
    name: 'call_p01',
    data: [
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
    ]
};

const refuse_p01 = {
    name: 'refuse_p01',
    data: [
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
                    text: "Reject him", next: 'refuse_a01',
                },
                {
                    text: "Accept his request", next: 'refuse_b01',
                },
            ],
        },
    ]
};

const refuse_a01 = {
    name: 'refuse_a01',
    data: [
        {
            type: 'story',
            speaker: "Narrator", text: "Stickman deciding that it wasn't worth his time rejects Stickboys plead and instantly shuts the door on him",
        },
    ]
};

const refuse_b01 = {
    name: 'refuse_b01',
    data: [
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
    ]
};

const mentor_p01 = {
    name: 'mentor_p01',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "Not long after departing nightfalls and the pair exhausted from traveling down the long forest path, they setup camp by the riverside deciding to continue their journey in the morning"
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
    ]
};

const crossing_p01 = {
    name: 'crossing_p01',
    data: [
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
                    text: 'Go back',
                    next: 'crossing_a01',
                },
                {
                    text: 'Keep going',
                    next: 'crossing_b02',
                },
            ],
        },
    ]
};

const crossing_a01 = {
    name: 'crossing_a01',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "Taking back what he said, Stickman ran back home without Stickboy noticing",
        },
        {
            type: 'story',
            speaker: "narrator",
            text: "Stickboy never went back to Stickmans house assuming the kid could survive on his own in the wilds",
        },
    ]
};

const crossing_b02 = {
    name: 'crossing_b02',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "Steeling himself, Stickman takes the biggest step out of the forest",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "Sunlight cresses Stickmans face and blinds him, in response Stickman shades his eyes with his hands revealing the lush world outside the forest",
        },
    ]
};

const tae_p01 = {
    name: 'tae_p01',
    data: [ /*This stands for Test, Allies, and Enemies */
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
                    next: 'tae_a01'
                },
                {
                    text: "Continue straight ahead towards the grasslands",
                },
                {
                    text: "Go right towards the desert",
                },
            ],
        },
    ]
};

const tae_a01 = {
    name: 'tae_a01',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "They head towards the mountains, the largest mining town",
            next: 'mountains_p01',
        },
    ]
};

const tae_b01 = {
    name: 'tae_b01',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "They continue going forward towards the central planes",
            next: 'grasslands_a01',
        },
    ]
};

const tae_c01 = {
    name: 'tae_c01',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "The blistering heat blast the pair as they head towards the desert",
            next: 'desert_a01',
        },
    ]
};

const mountains_p01 = {
    name: 'mountains_p01',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "Carts are going everywhere and smoke clouds the town",
        },
        {
            type: 'story',
            speaker: "Stickboy",
            text: "\"Are you sure we should be in this town? Theres so many people.\"",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickman nods in confirmations, easing Stickboys doubts. He then continues walking to the guild ",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "Before reaching the guild coals and metals tumble towrds Stickmans feet",
        },
        {
            type: 'story',
            speaker: "Villager",
            text: "\"Ahhh, I apologize, I didn't mean to send rocks flying towrds you.\""
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickman just scoffs at the man and continues walking for the guild, Stickboy grabs Stickmans hand",
        },
        {
            type: 'story',
            speaker: "Stickboy",
            text: "\"You can't just leave him here. He apologized we should help him. If you don't help him then, I'll won't go with you.\""
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "Fabbergasted Stickman steals his hand back before stopping to think about his next action",
        },
        {
            type: 'choices',
            speaker: "Narrator",
            text: "What will you do",
            options: [
                { text: "Aid the man" },
                { text: "leave him alone" },
            ],
        },
    ]
};

const mountains_a01 = {
    name: 'mountains_a01',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickman sighed as he turned to help the villager gather his materials",
        },
        {
            type: 'story',
            speaker: "Villager",
            text: "\"Thank you, thank you, but why the sudden change?\"",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickman nods his head towards",
        },
        {
            type: 'story',
            speaker: "Villager",
            text: "\"I'm not sure who or what you\'re signaling too, but I thank you nonetheless.\"",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickman pauses in confusion and looks at Stickboy then looks back at the villager",
        },
        {
            type: 'story',
            speaker: "Narratpr",
            text: "Stickman and the villager finish cleaning the mess then the villager leaves saying, \"Thank you again for overlooking my carelessness\" as he disappears upon the many other carts",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickman continues to focus is attention on the guild. Stickboy looked him, pleased that Stickman helped the man",
        },
    ]
};

const mountains_p02 = {
    name: 'mountains_p02',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "Opening the doors to the guild the once roaring room fell silent upon Stickmans arrival. Stickman felt so out of place wanting to leave immdiently, but he still has a duty to fufill so he continues walking to the front desk",
        },
        {
            type: 'story',
            speaker: " Guild receptionist",
            text: "How many I help you sir?",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickman could tell the receptionist was stunned by his appeance, despite that Stickman asked",
        },
        {
            type: 'story',
            speaker: "Stickman",
            text: "*quietly* Can you help find this boys parents?"
        },
        {
            type: 'story',
            speaker: "Guild receptionist",
            text: "*looking for Stickboy* \"Excuss me but I don't see the boy you mention of.\""
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "\"Again?\" Stickman thought \"Can any see the kid?\" but he parished the thought and wanted to move to the next village for help",
        },
        {
            type: 'story',
            speaker: "Stickman",
            text: "\"Nevermind, can you tell me how to get to the next village?\"",
        },
        {
            type: 'story',
            speaker: "Guild recepionist",
            text: "\"Do you mean Xuě peak? If you are, the path unfortunately has been blocked by the recent avalance and needs at least a day to get everything ready.\"",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickboy grabs Stockmans hand with a pleading face begs him to help the village",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "*sighing* \"Is there anything I can do to speed up the process?\"",
        },
        {
            type: 'story',
            speaker: "Guild receptionist",
            text: "\"Actually I do, here let me give the list.\"",
        },
        {
            type: 'choices',
            speaker: "Narrator",
            text: "What will you do?",
            options: [
                {
                    text: "Flint n Steel - Deliver dynamite to the mines: addtionally place dynamite charges", // medium quest - needs a little bit of compassion
                },
                {
                    text: "You light up my world - Lanturn fluid colleting and delievering ", // easist quest - needs less compassion
                },
                {
                    text: "Pride of the drawfs - Furence operator and blacksmithing", // hardest quest - needs a ton of compassion
                },
                {
                    text: "Leave the village", // This leads to a ending
                },
            ]
        },
    ]
};

export const guild_a01 = {
    name: 'guild_a01',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickman arrives at the mining equipment shop, two other hires nad waiting for him",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "The Stickman and the hires are quickly briefed on the routes they're allowed to take and stations to stops at to pickup more supplies",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "Quest: Flint n Steel - Deliver the dynamite faster than the other hires",
        },
    ]
}



const mountains_a02 = { /* + negative karma */
    name: 'mountains_a02',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickman, stubborn, continues walking towards the guild",
            next: 'mountains_p02',
        },
    ]
};

const grasslands_a01 = {
    name: 'grasslands_a01',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "on the way to the grasslands, the pair see the crossing bridge in demolished and a sign reading",
        },
        {
            type: 'story',
            speaker: "Sign",
            text: "\"Sorry Player, but this part of the game isn't ready yet. -Dev Team\"",
        },
    ]
};

const desert_a01 = {
    name: 'desert_a01',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "The heats gets even stronger when the pair approach, so hot that they must retreat",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "This part of the game isn't done yet, come back when it is",
        },
    ]
};

export const completeStory = [prologue, forest_p01, forest_p02, forest_a01, forest_a02, forest_b01, forest_c01, call_p01, refuse_p01, refuse_a01, refuse_b01, mentor_p01, crossing_p01, crossing_a01, crossing_b02, tae_p01, tae_a01, tae_b01, tae_c01, mountains_p01, mountains_a01, mountains_p02, mountains_a02, grasslands_a01, desert_a01]

export const tempCompleteStory = [prologue, forest_p01 /* Add just the neccesary objects to complete one flow. */]