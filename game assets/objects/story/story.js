const prologue = {
    name: 'prologue',
    overlay_url: '/images/gameZoneOverlay/PixelBrickWall.svg',
    data: [/*Begins will the villagers*/
        {
            bg_url: '/images/gameZoneBG/prologue0.svg',
            type: 'story',
            speaker: "Villager 1",
            text: "\"Hey, have you heard about the figure in the woods?.\""
        },
        {
            bg_url: '/images/gameZoneBG/prologue1.svg',
            type: 'story',
            speaker: "Villager 2",
            text: "\"They say he isolates himself in a hut in the abandoned woods and prays on the folks that go near his woods.\""
        },
        {
            bg_url: '/images/gameZoneBG/prologue2.svg',
            type: 'story',
            speaker: "Villager 3",
            text: "\"Stop joking, that story's old now everybody knows about the man in the woods.\""
        },
        {
            bg_url: '/images/gameZoneBG/prologue2.svg',
            type: 'story',
            speaker: "Villager 3",
            text: "\"Come here, lemme tell you the story of the figure that we- all the villagers of the figures rising remember.\"",
            next: 'forest_p01'
        },
    ]
};

const forest_p01 = {
    name: 'forest_p01',
    overlay_url: './images/gameZoneOverlay/PixelForestOverlay.svg',
    data: [ /*The Narrator will tell most of the story*/
        {
            bg_url: '/images/gameZoneBG/PixelBG_Forest.svg',
            type: 'story',
            speaker: "Narrator",
            text: "\"This so called figure is named 'Stickman' he wasn't like the rest of the villagers-unlike us who have fur and different perspectives, Stickman was flat and had no defining features.\""
        },
        {
            bg_url: '/images/gameZoneBG/PixelBurningTown.svg',
            type: 'story',
            speaker: "Narrator",
            text: "\"Some say his parents died in a fire and he grew up resenting the ophanage he grewn up in.\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "\"He rejected the towns folk as the towns folk rejected him which lead to them exiling him from the forest although they forgot about that.\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "\"I don't know the exact details but I do know that he found a cabin in the woods to avoid others but ironically had to travel to the villages to get resources.\"",
            next: 'forest_p02'
        }
    ]
};

const forest_p02 = {
    name: 'forest_p02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickmans wandered around the forest after coming back from his outing in the nearby village, he looked exhausted taking heavy steps down the dirt trail",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "On the way back Stickman sees a strange hooded figure lurking around the trees",
            next: 'forest_a01'
        }
    ]
};

/*-----------------------------------------------------*/

const forest_a01 = {
    name: 'forest_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [ /* Stickamn approachs the stranger */
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman cautiously approaches the figure from behind until he gets within a arms reach of the figure"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "*Pat*"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "The Stranger",
            text: "\"WHO GOES THERE!?.\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman grabbed the strangers shoulder startling him as he quickly turned around meeting face to face with Stickman"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "The Stranger",
            text: "*Clears his throat* \"Excuss me, you caught me by surprise but as surprises go you're the one I'm looking for.\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman looked puzzeled, \"someone was looking for me?.\" He thought to himself "
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The figure removed his hood to reveal another Stickman only smaller and felt somewhat younger"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman was stunned to see another of his kind"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "The Stranger",
            text: "\"Right, let me introduce myself, I am Stickboy.\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickboy",
            text: "\"As I said before, I am looking for you, so if you would be so kind to listen to my request.\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickboy",
            text: "\"Please help me, help me find my parents.\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: 'What will you do?',
            options: [
                {
                    text: "Leave Stickboy",
                    next: 'forest_a02'
                },
                {
                    text: "Accept his request",
                    next: 'forest_b01'
                },
                {
                    text: "Question Stickboy",
                    next: 'forest_c01'
                },
            ],
        },
    ]
};

const forest_a02 = {
    name: 'forest_a02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman who has stayed isolated his entire life, signals for Stickboy to skedaddle",
            next: 'call_p01'
        },
    ]
};

const forest_b01 = {
    name: 'forest_b01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman considers the boys request and although he is reluctant, he decides to accept Stickboys request",
            next: 'mentor_p01',
        },
    ]
};

const forest_c01 = {
    name: 'forest_c01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [ /* The questions will be added later as it does */
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickboy felt suspicous, Stickman didn't know why I had to be him or why is the boy asking for help inside the forest but he knew Stickboy wasn't trustable, with that said, he decides to question Stickboys intentions",
            next: 'in_progress'
        },
    ]
};

const call_p01 = {
    name: 'call_p01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman who left Stickboy in the middle of the forest is sorting his groceries when suddenly *knock* *knock* *knock* followed by silence"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrotor",
            text: "Stickman checks the window to see Stickboy waiting at the door, Stickman getting fed up answers the door"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickboy",
            text: "Please reconsider my request, I AM lost and need help"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickboy",
            text: "I wanted your help because theres nobody else like me but you.",
            next: 'refuse_p01',
        },
    ]
};

const refuse_p01 = {
    name: 'refuse_p01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator", text: "Stickman pondered this, it's true, there is nobody else like him and Stickboy but the bitterness of society and the isolation clouded his judgement",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
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
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator", text: "Stickman deciding that it wasn't worth his time rejects Stickboys plead and instantly shuts the door on him",
        },
    ]
};

const refuse_b01 = {
    name: 'refuse_b01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "After thinking about their situation Stickman agrees to take Stickboys request",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Before departing Stickman takes his glasses, his bag, and his journal just in case his quest takes more than a day.",
            next: 'mentor_p01',
        },
    ]
};

const mentor_p01 = {
    name: 'mentor_p01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Not long after departing nightfalls and the pair exhausted from traveling down the long forest path, they setup camp by the riverside deciding to continue their journey in the morning"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman walks over to the river to collecting water, looking down into the waterm his reflection stares blankly at him"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Reflection",
            text: "\"Do you really think helping some little kid will change how we are? How you are?\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Reflection",
            text: "\"Come on, we both know why you live in a hut in the middle of nowhere.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman splashes the water in retaliation only to find himself feeling the truth behind his reflections words"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "He fills his water hide and turns to make it back to camp",
            next: 'crossing_p01',
        },
    ]
};

const crossing_p01 = {
    name: 'crossing_p01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "When morning broke quickly gathered his items and Stickboy to continue their journay",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The path is long and winding, Stickboy being new to the forest often got lost while Stickman tried to stop him from getting lost",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickboy",
            text: "\"I remember my parents saying something like \"We are head east but we'll be back soon\".\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman knew of paths that lead to the larger villages east which he avoided unless he was desprate for resources",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "They reach the edge of the forest though Stickman still feels reluctant about going to the villages espcially when its popular villages",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: 'What will YOU do?',
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
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Taking back what he said, Stickman ran back home without Stickboy noticing",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "narrator",
            text: "Stickboy never went back to Stickmans house assuming the kid could survive on his own in the wilds",
            next: 'in_progress',
        },
    ]
};

const crossing_b02 = {
    name: 'crossing_b02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Steeling himself, Stickman takes the biggest step out of the forest",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Sunlight cresses Stickmans face and blinds him, in response Stickman shades his eyes with his hands revealing the lush world outside the forest",
            next: 'tae_p01',
        },
    ]
};

const tae_p01 = {
    name: 'tae_p01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [ /*This stands for Test, Allies, and Enemies */
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Continuing down the path, Stickman and Stickboy find themselves at a fork road",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
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
                    next: 'tae_b01',
                },
                {
                    text: "Go right towards the desert",
                    next: 'tae_c01',
                },
            ],
        },
    ]
};

const tae_a01 = {
    name: 'tae_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "They head towards the mountains, the largest mining town",
            next: 'mountains_p01',
        },
    ]
};

const tae_b01 = {
    name: 'tae_b01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "They continue going forward towards the central planes",
            next: 'in_progress',
        },
    ]
};

const tae_c01 = {
    name: 'tae_c01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The blistering heat blast the pair as they head towards the desert",
            next: 'in_progress',
        },
    ]
};

const mountains_p01 = {
    name: 'mountains_p01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Carts are going everywhere and smoke clouds the town",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickboy",
            text: "\"Are you sure we should be in this town? Theres so many people.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman nods in confirmations, easing Stickboys doubts. He then continues walking to the guild ",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Before reaching the guild coals and metals tumble towrds Stickmans feet",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Villager",
            text: "\"Ahhh, I apologize, I didn't mean to send rocks flying towrds you.\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman just scoffs at the man and continues walking for the guild, Stickboy grabs Stickmans hand",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickboy",
            text: "\"You can't just leave him here. He apologized we should help him. If you don't help him then, I'll won't go with you.\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Fabbergasted Stickman steals his hand back before stopping to think about his next action",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "What will you do",
            options: [
                {
                    text: "Aid the man",
                    next: 'mountains_a01',
                },
                {
                    text: "leave him alone",
                    next: 'mountains_a02',
                },
            ],
        },
    ]
};

const mountains_a01 = {
    name: 'mountains_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman sighed as he turned to help the villager gather his materials",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Villager",
            text: "\"Thank you, thank you, but why the sudden change?\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman nods his head towards",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Villager",
            text: "\"I'm not sure who or what you\'re signaling too, but I thank you nonetheless.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman pauses in confusion and looks at Stickboy then looks back at the villager",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narratpr",
            text: "Stickman and the villager finish cleaning the mess then the villager leaves saying, \"Thank you again for overlooking my carelessness\" as he disappears upon the many other carts",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman continues to focus is attention on the guild. Stickboy looked him, pleased that Stickman helped the man",
            next: 'mountains_p02',
        },
    ]
};

const mountains_p02 = {
    name: 'mountains_p02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Opening the doors to the guild the once roaring room fell silent upon Stickmans arrival. Stickman felt so out of place wanting to leave immdiently, but he still has a duty to fufill so he continues walking to the front desk",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: " Guild receptionist",
            text: "How many I help you sir?",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman could tell the receptionist was stunned by his appeance, despite that Stickman asked",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickman",
            text: "*quietly* Can you help find this boys parents?"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Guild receptionist",
            text: "*looking for Stickboy* \"Excuss me but I don't see the boy you mention of.\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "\"Again?\" Stickman thought \"Can any see the kid?\" but he parished the thought and wanted to move to the next village for help",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickman",
            text: "\"Nevermind, can you tell me how to get to the next village?\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Guild recepionist",
            text: "\"Do you mean Xuě peak? If you are, the path unfortunately has been blocked by the recent avalance and needs at least a day to get everything ready.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickboy grabs Stockmans hand with a pleading face begs him to help the village",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "*sighing* \"Is there anything I can do to speed up the process?\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Guild receptionist",
            text: "\"Actually I do, here let me give the list.\"",
            next: 'quests',
        },

    ]
};

const mountains_a02 = { /* + negative karma */
    name: 'mountains_a02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman, stubborn, continues walking towards the guild",
            next: 'mountains_p02',
        },
    ]
};

const quests = {
    name: 'quests',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "What will you do?",
            options: [
                {
                    text: "Flint n Steel - Deliver dynamite to the mines: addtionally place dynamite charges", // medium quest - needs a little bit of compassion
                    next: 'guild_a01',
                },
                {
                    text: "You light up my world - Lanturn fluid colleting and delievering ", // easist quest - needs less compassion
                    next: 'guild_a02',
                },
                {
                    text: "Pride of the drawfs - Furence operator and blacksmithing", // hardest quest - needs a ton of compassion
                    next: 'guild_a03',
                },
            ]
        }
    ]
};

const quests_completed = {
    name: 'quests_completed',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: 'Stickboy',
            text: "I've finished all the quests", //This should appear after the player finishes all the quests
            options: [
                {
                    text: "Leave the village", // This leads to a ending
                    next: 'in_progress',
                },
            ]
        }
    ]
}

const guild_a01 = {
    name: 'guild_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman arrives at the mining equipment shop, two other hires were waiting for him",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The Stickman and the hires are quickly briefed on the routes they're allowed to take and stations to stops at to pickup more supplies",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Quest: Flint n Steel - Deliver the dynamite faster than the other hires",
            next: 'flint_p01',
        },
    ]
};

const flint_p01 = {
    name: 'flint_p01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Gathering the dynamite, Stickman and the others head towards the mines.",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The group finds themselves at a fork, one of the roads leads to the market, another leads to a bridge, the last path leads to a empty neighborhood",
            text: "You can only choose one path and you can't go back to the fork, each path has a different outcome that will affect your speed",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "Which path will you take?",
            options: [
                {
                    text: "The Market",
                    next: 'market_a01',
                },
                {
                    text: "The Bridge",
                    next: 'bridge_a01',
                },
                {
                    text: "The Empty neighborhood",
                    next: 'empty_a01',
                },
                {
                    text: "Go back to the guild",
                    next: 'quests',
                }
            ],
        },
    ],
};

const market_a01 = {
    name: 'market_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The market is bustling with people, carts, and animals. Stickman has to weave through the crowd to get to the other side of the market.",
            buff: '+1 speed',
            buffValue: '1',
            next: 'flint_p02',
        },
    ],
};

const bridge_a01 = {
    name: 'bridge_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The bridge is linear with carts traveling in both directions, Stickman follows the flow of the carts",
            buff: '+2 speed',
            buffValue: '2',
            next: 'flint_p02',
        },
    ],
};

const empty_a01 = {
    name: 'empty_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The neighborhood is quiet, too quiet, suddenly a group of bandits jump out and start attacking Stickman, Stickman has to fight them off before quickly leaving the neighborhood",
            buff: '+0 speed',
            buffValue: '0',
            next: 'flint_p02',
        },
    ],
};

const flint_p02 = {
    name: 'flint_p02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The group arrives at the first stationm, they unload supplies to trade material and check the map before leaving"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The map shows three more branches leading towrds the mines",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "There\'s a shortcut near one of the coal burning facilities",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "There\'s a path leading straight ahead towrds the mines",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "There\'s a path leading through one of the undeveloped roads. The road is rocky and is at a steep incline",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "Which path will you take?",
            options: [
                {
                    text: "Take the shortcut",
                    next: 'shortcut_a01',
                },
                {
                    text: "Go straight ahead",
                    next: 'straight_a02',
                },
                {
                    text: "Take the rocky path",
                    next: 'rocky_a03',
                },
            ],
        },
    ],
};

const shortcut_a01 = {
    name: 'shortcut_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Its blistering hot taking the shortcut, sparks from the furenaces fly everywhere and the heat is getting intenser the closer stickman to the exit.",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Suddenly the carts tarp caught on fire causing Stickman to put out the fire before continuing going through the shortcut",
            buff: '+1 speed',
            buffValue: '1',
            next: 'flint_p03',
        }
    ],
};

const straight_a02 = {
    name: 'straight_a02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The staright is very simple but it also leads to a intersection with a lot of traffic, Stickman has to wait for the carts to pass before he can continue",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman waits for a while before he eventually got tired of waiting and turned down another road to get through the traffic",
            buff: '+0 speed',
            buffValue: '0',
            next: 'flint_p03',
        }
    ],
};

const rocky_a03 = {
    name: 'rocky_a03',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The road looks very dangerous, its steep, rocky, and has chance for rocks tumbling down the mountain",
            next: 'flint_p03',
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Either way Stickman steels himself and carefully but quickly makes his way through the rocky path",
            buff: '+2 speed',
            buffValue: '2',
            next: 'flint_p03',
        },
    ],
};

const flint_p03 = { //quest end//
    name: 'flint_p03',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman arrives at the final station, shortly after the other hires arrive",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Quickly the station workers unload the supplies of dynamite and gunpowder then deliver it to the mines",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Mine manager",
            text: "\'Thank you all for you're hard work! When the mines open up, you'll be the first ones to get dibs on entering.\'",
            next: 'quests',
        },
    ],
};

const flint_p04 = {
    name: 'flint_p04',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Mine Manager",
            text: "You're a tad late bud, but still you brought the mats over",
            next: 'in_progress',
        },
    ]
}

const guild_a02 = {
    name: 'guild_a02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman arrives at the appointed location but to his surprise, it wasn't a shop but a open lush oil field crowded with workers striking the ground and oil gushing out",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman is called from a distance by a worker who is waving his arm, signaling for Stickman to come over",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Worker",
            text: "\"Hey you! Yeah you, come here, are you the temp hirer from the guild.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman nods in confirmation and the worker continues",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Manager",
            text: "\"Great, you're task is simple, all I need you to do is punch a hole into the ground and extract that oil.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Manager",
            text: "\"Here, take this pick and get started in the field over there.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Manager",
            text: "\"Oh, I almost forgot to mention but don't go yo far out, we only observe a small area and usual those who go to far out go missin.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman takes the pickaxe and nods before making his way towrds the field",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman thought about his early conversation, he wanted to go farther out to see whats there but he also wanted to finish his task quickly",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "What will you do?",
            options: [
                {
                    text: "Stay with in other miners",
                    next: 'lantern_a01',
                },
                {
                    text: "Go farther out",
                    next: 'lantern_b01',
                },
            ],
        },
    ],
};

const lantern_a01 = {
    name: 'lantern_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman resist his curiosity, heading to the field with the other miner"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman finds himself at a mining vein clustered in miners, there is a giant rock with oil oozing underneath it with tons of miners and there is a small hole in the ground gushing oil"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "What will you do?",
            options: [
                {
                    text: "Giant rock",
                    next: 'lantern_a02',
                },
                {
                    text: "The hole",
                    next: 'lantern_a03',
                },
            ]
        },
    ],
};

const lantern_a02 = {
    name: 'lantern_a02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman heads towards to the ginat rock, he readys his pickaxe and strikes it but he sent back by the recoil of his strike",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman coodinates his next strike with the other miners, they all recoil back, then they strike again, same result",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Eventually the group breaks open the rock to only be dissapointed by the amount of oil pouring out"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman collects what he could and goes to the small hole he saw before",
            next: 'lantern_a03',
        },
    ],
};

const lantern_a03 = {
    name: 'lantern_a03',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman stands above the hole readying his pickaxe",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "In just a single strike, oil rushes out of the gash Stickman made",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman collects all the oil he needs and walks back to the manager",
            next: 'lantern_p02',
        },
    ],
};

const lantern_b01 = {
    name: 'lantern_b01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Curosity getting the better him, Stickman explored outwards from the orginal mining site"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "He came upon a forest, entering it looks untouched, untained, as if it was never near civilization"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman comes across a boulder, although it looks starngly mushy it is seeping oil",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Still curious about the forest, Stickman strikes the boulder when sudden a geyser of oil sprays all over the forest",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The oil floods the forest, pushing Stickman out the same way he came in",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman wakes up and quickly realizing what happend, ran back to the manager",
        },
    ],
};

const lantern_b02 = {
    name: 'lantern_b02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman rushes over to the manager still dreanched in oil",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickman",
            text: "\"*out of breath* Manager! *wheezing* I just found the biggest spot of oil\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Manager",
            text: "\"What? You may be new, but I've got a handful of people who lie to me on a daily\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickman",
            text: "\" *astima voice* just follow me\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The manager rolled his eye followed Stickman",
        },

    ],
};

const lantern_b03 = { //quest end (same ending for oil)//
    name: 'lantern_b03',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Arriving at the border between the oil field and the forest, a lake of oil engulfed the area, the manager wiped his eyes before looking again"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Manager",
            text: "\"Oh my days... LOOK AT ALL OF THIS OIL, WE'LL NEVER RUN OUT FOR MONTHS\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The manager grabbed Stickmans hand and shooked it continuing to say.",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Manager",
            text: "\"You're the great hire we've gotten this past year, for this I gotta pay you double, no triple the original amount!\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman was stunned but greatfully took the offer, but gave it to Stickboy instead because it was heavy and Stickboy needed to pickup his weight",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman waved bye to the manager as he walked back to the guild with Stickboy slowly trailing behind him",
            next: 'quests',
            questCompleted: 'oil',
        },
    ],
};

const guild_a03 = {
    name: 'guild_a03',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman arrives at the great furnace, the heat is intense, the sound of metal clanging fills the air, and the look on the workers... razor sharp and focused, intimidating Stickman",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Master Blacksmith",
            text: "\"Aye lad, stop standing there yer gonna get burned\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The man was big, intimidating, and looked like he could crush Stickman if he wanted to, but Stickman although timid, handed in the flyer to help the smith",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Master Blacksmith",
            text: "\"Ahh, so someone actually took our request aye? Well, works for me.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Masther Blacksmith",
            text: "\"Listen hear, yer job is simple and very risk free, all ya gotta do is hand us the materials, but make sures its correct, the materials are that way, have a look before you start yer shift.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman nods, the task was simple, tendious but still a easy job nontheless. Besides the Master Blacksmith looked intimidating but he was kind and direct Stickman thought to himself",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman walked over to the many creates scattered around the workshop, the crates were filled with different materials, some were labeled while others weren't, this annoyed Stickman but he new what most of the materials were from his time in the forest.",
            next: "pride_p01",
        },
    ],
};

const materials_a01 = {
    name: 'materials_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "There three materials Iron: medium :raw , Coal: light :Coarse, Pig Iron: medium :refined, and Obsidian: heavy : raw",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman notes this down before putting on his gloves and googles and starting his shift",
            next: 'pride_p01',
        },
    ]
}

const materials_a02 = {
    name: 'materials_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "There three materials Iron: medium :raw , Coal: light :Coarse, Pig Iron: medium :refined, and Obsidian: heavy : raw",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman notes this down before putting on his gloves and googles and starting his shift",
            next: 'pride_p01',
        },
    ]
}

const materials_a03 = {
    name: 'materials_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "There three materials Iron: medium :raw , Coal: light :Coarse, Pig Iron: medium :refined, and Obsidian: heavy : raw",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman notes this down before putting on his gloves and googles and starting his shift",
            next: 'pride_p01',
        },
    ]
}

const pride_p01 = {
    name: 'pride_p01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman starts off with the smelting station, as soon as he gets there",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Smelter worker",
            text: "\"Oi, hire we need some raw rocks ova here make sures its ta light, shiny one.\"",
            next: 'pride_a01',
        },
    ]
};

const pride_a01 = {
    name: 'pride_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "Which material will you give the worker?",
            options: [
                {
                    text: "Coal",
                    next: 'wrong_a01',
                },
                {
                    text: "Iron",
                    next: 'pride_a02',
                },
                {
                    text: "Pig Iron",
                    next: 'wrong_a01',
                },
                {
                    text: "Obsidian",
                    next: 'wrong_a01',
                },
                {
                    text: "Check the crates again",
                    next: 'materials_a01',
                },
            ],
        },
    ],
};

const pride_a02 = {
    name: 'pride_a02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'stoy',
            speaker: "Smelter worker",
            text: "\"Thank, go down the line were the other workers are, they'll tell you what to do next.\"",
            next: 'pride_p02',
        },
    ],
};

const pride_p02 = {
    name: 'pride_p02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman contineus to the next station, the workers are casting and hammering metals",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Hammer worker",
            text: "\"Hire get over here quickly, the buckets a bit dry on minerals, get me some of the fine stuff.\"",
            next: 'pride_a01',
        },
    ],
};

const pride_a03 = {
    name: 'pride_a03',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "Which material will you give the worker?",
            options: [
                {
                    text: "Coal",
                    next: 'wrong_a01',
                },
                {
                    text: "Iron",
                    next: 'wrong_a01',
                },
                {
                    text: "Pig Iron",
                    next: 'pride_p02',
                },
                {
                    text: "Obsidian",
                    next: 'wrong_a01',
                },
                {
                    text: "Check the crates again",
                    next: 'materials_a01',
                },
            ],
        },
    ],
};


const pride_a04 = {
    name: 'pride_a04',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Hammer Worker",
            text: "\"Great work, move on over, the forge sounds like its in a warzone.\"",
            next: 'pride_p03',
        },
    ],
};

const pride_p03 = {
    name: 'pride_p03',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "Quickly arriving at the forge, it is loud, choatic, and the workers, as the worker said before, its a complete warzone",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The smiths are panicking, every thing they strike shatters to pieces, they yelling \"WE WON'T MAKE THE DEADLINE\" repeatedly, the manager is trying to calm them down but his voice is drowned out by the noise of the smiths and hammers striking",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The manager notices Stickman and rushes over to him, \"Hire! Sorry but can you get the obsidian, everything is in melt down without.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman taken aback that the manager gave him the actual name on the meterial quickly snapped into action, rushing to the creates with obsidian but struggles to move it.",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Checking inside the create, Stickman find that the obsidian was a giant block. making it impossible to lift over to the workers",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman saw a pickaxe nearby but the sounds of frenized smiths echoed through the furnace",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "What will you do?",
            options: [
                {
                    text: "Use the pickaxe",
                    next: 'pride_b01'
                },
                {
                    text: "Call upon the smiths",
                    next: 'pride_b02',
                },
            ],
        },
    ],
};

const pride_b01 = {
    name: 'pride_b01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman grabbed the pickaxe, as wrung at the black rock",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "*tink* *tink* Strike after strike Stickman relentlessly bombards the obsidian, eventuallty he breaks it down into carryable chucks.",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Although tired for mining the obsidian, Stickman rushes the obsidian back to the forge",
        },
    ],
};

const pride_b02 = { //quest ending//
    name: 'pride_b02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Manager",
            text: "\"You're here, quickly take in to the smiths.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman brings the smiths, in the blink of a eye, all of the obsidian he was carrying disappeared",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Manager",
            text: "\"Good work out there Stickman, its sad that you're here for today only but you keep the workshop going on.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Manager",    
            text: "\"Go get some rest, I'll invite you to the next work party.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Manager",
            text: "\"oh and take this pickaxe as a little token from us\"",
            next: 'quests',
            questCompleted: 'mining',
        },
    ],
};

const cave_p01 = {
    name: 'cave_p01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Guild receptionist",
            text: "\"You've already done all of the quest? Great, the grand reopening of the minings will be happening the next day\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: 'Guild receptionist',
            text: "\"Go ahead and take a rest in the room upstairs\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "A large crowd erupted in the streets, Stickman annoyed, checked outsided the windows to see a crowd of townfolk going to the mines",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman hurries out of bed and exits the guild, its hard to walk around the city, Stickman held on to Stickboys hand while traveling through the crowd"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "After a bit of crowd surfing the duo find themselves at the front of the parade.",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: 'Narrator',
            text: "Theres a empty stage with a pedal, shortly after the mayor arrives taking the stand",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Mayor",
            text: "\"Good morning everyone, today is a very momentous occasion and its all thanks to a roamer named Stickman, he has dealt with the biggest resource blockages and has allowed us to continue operating the mines as we once have!\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The Crowd cheered Stickmans name as a explosion erpouts behind the mayor, the mine entrence is revealed as the dust settles",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman hides in a ally waiting for the crowd to disperse",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "While waiting Stickman looks at Stickboy and thinks to himself, after the journey hes been through, is it still worth it to continue?",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "Will continue?",
            options: [
                {
                    text: "Keep going",
                    next: 'cave_a01',
                },
                {
                    text: "Give up",
                    next: 'cave-b01',
                },
            ],
        },
    ],
};

const cave_a01 = {
    name: 'cave_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman decides hes to far to give up now, making his way to the cave, taking a lantern before entering",
        },
    ],
};

const cave_b01 = {
    name: 'cave_b01',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman felt like he was doing something good for once but couldn't shake off the doubt that has cloud him his entire life."
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman looks at Stickboy",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickman",
            text: "\"I'm sorry but I can't keep going.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman pats Stickboys head before leaving to his forest",
        },
    ],
};

const cave_p02 = {
    name: 'cave_p02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Using the fruits of his labor, Stickman lit the lantern then followed a rope leading from the enternce into the darkness",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman came across a split road with a sign pointing in two directs, The \"Quarry\" and \"Xue peak\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The quarry had a trail of lanterns piercing the darkness, No one went to Xue peak, it was dark and the air was cold and dense"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "Where do you want to go?",
            options: [
                {
                    text: "The Quarry",
                    next: 'quarry_a01',
                },
                {
                    text: "Xue peak",
                },
            ],
        },
    ],
};

const quarry_a01 = {
    name: 'quarry_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Following the trail of lights, clatter, chattering, and the sound of rubble falling echos across the cave",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Tons of miners are go back and forth, carrying carts, sacks, and equipment along the way",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman still carrying his pickaxe his lured in by the temptation of mining",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "Give into temptation?",
            options: [
                {
                    text: "Yes",
                    next: 'quarry_a02',
                },
                {
                    text: "No",
                    next: 'quarry_a03',
                },
            ],
        },
    ],
};

const quarry_a02 = {
    name: 'quarry_a02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman unable to resist the alure of mining, readies his pickaxe and finds the nearist ore vein",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The first haul goes by, then the second, then the third... Stickman is one with the mines...",
        },
    ],
}

const quarry_a03 = {
    name: 'quarry_a03',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman shakes his head and heads back the way he came",
            next: 'quarry_a01',
        },
    ],
};

const peak_a01 = {
    name: 'peak_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The air is stagnant, Stickmans and Stickboys breathes freezes, its quiet, its dark, nonetheless, they continue their journey",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman reflections upon his journey, so many people, so little time to understand, Stickboy was the catalyst for the journey but whats the result?",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The lantern lickers brightly, blinding Stickman",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Visions of the ohange licker past Stickman, visions of joy, reject... family",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickboy whos hand was held by Stickman slowly fades as Stickmans visions come to a end",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            types: 'story',
            speaker: "Narrator",
            text: "Stickman tries to hold on to Stickboy only to phase through him",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickboy",
            text: "\"Sorry, but it was a good run, you're done so much for the people, you are different now, you're not alone.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickboy vanished before Stickmans eyes, again visions past by Stickman, visions of his journey",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickboy was never truly with Stickman, all the doubt of his reflection fade away as memories of Stickboys fades as well",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman continues through the darkness, suddenly snow caresses his face",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Light peaks through when Stickman turns the corner of the cave, a draft of cold air floods the cave",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Exiting the cave, a white light blinds Stickman",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: "story",
            speaker: "Narrator",
            text: "Winter covered the vally even more than the previous mountains, rivers still flowed, and Stickman notices a pathway leading from the cave",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman takes the path and traverses through the snowy plain, reaching a flat point in the path, Stickman heads to a nearby river",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Looking at his reflection, no more are there voices, no more are there doubts, just Stickman",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Getting up, Stickman wondered if he should continue down the path to find a village but he felt homesick and wanted to go home but then again Stickman was still dirty from when he exited the cave and he didn't want to put up the impression that he was homeless or broke",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "What will you do?",
            options: [
                {
                    text: "Continue down the path",
                },
                {
                    text: "Rebuild your life",
                    next: 'rebuild_a01',
                },
                {
                    text: "Take a bath in the river",
                    next: 'bath_a01',
                },
            ],
        },
    ],
};

const continue_a01 = {
    name: 'continue_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman continued down the path, its empty, no animals, no bugs, no villagers, only frozen tree litter the blanketed forest",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickman",
            text: "Stickman talks to himself, \"Its quiet, its uncomfortable now, the life I once had, feels so foreign, life I cherished, feels so lonenly\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Still monologing to himself, Stickman comes across wagon tracks",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman stops his monolog and follows the tracks in a hurry",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman see a troubled man trying to push his cart up a hill, deja vu passed over him",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "Help the man?",
            options: [
                {
                    text: "Yes",
                },
                {
                    text: "No",
                    next: 'xue_a01',
                },
            ],
        },
    ],
};

const xue_a01 = { //This is a ending //
    name: 'xue_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman gives the man the cold shoulder, leaving him and going ahead to find the village and entering it"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The streets are empty and most of the buildings are snowed in",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "After exploring the village for a while, Stickman leaves through a forest exit to find another place to settle in",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The forest for the most part is empty until Stickman come across a abandoned hut",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Its run down but barely holding and it looks like nobody as been in this part of the forest for a while",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman enters the house to inspect it tracks of people and usable tools or items",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "He finds an axe, a sheer, and some old bedding slightly covered in snow",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "He first takes the bedding and dusts it off before leaving it to hang on a nearby tree",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Next he takes the axe then searches for dead trees before cutting them down and hauling it over to the hut",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "He takes the sheers and carefully cuts off the branches, afterwards he cuts the wood into planks and carefully places it over the holes of the hut",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Months go by as Stickman occupies the hut, nobody knows hes there, nobody explores there",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman has achived true isolation...",
        }
    ],
};

const xue_b01 = {
    name: 'xue_b01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickman",
            text: "\"Hey! Do you need some help?\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Helpless man",
            text: "\"Ahh! yes, yes, if you would be so kind to help gather my belongings.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman helps the man gather his items and places it in the cart, after that, he inspected the knot holding the items and tightend it so it wouldn't fall off again",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Helpless man",
            text: "\"Thank you for your assistance, may I ask where you're going?\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Helpless man",
            text: "\"Its cold out here and most of the buildings are probably snowed in by this point.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Helpless man",
            text: "\"I just came from the mountains and I felt like I was on a quest - maybe I was on a quest but, I'm here now and I'm kinda lost.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Helpless man",
            text: "\"You're a travler? That would explain your attire or lack of.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Helpless man",
            text: "\"Anyways, as payment, I can give you a lift to the village that needs some help.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickman",
            text: "\"That would be great, thank you.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman gets on the back of the mans caravan, joining him of his travels",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Shortly after departing, they find themselves at the gate of the village",
            next: 'xue_p02',
        },
    ]
};

const xue_p02 = {
    name: 'xue_p02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Entering the village, the two are surprised to see mountains of snow blanketing the entire village",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'choices',
            speaker: "Narrator",
            text: "Offer to help the man again?",
            options: [
                {
                    text: "Yes",
                },
                {
                    text: "No",
                },
            ]
        }
    ]
}

const xue_a02 = {
    name: 'xue_a02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickman",
            text: "\"This looks like its gonna take you a while to clean.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Stickman",
            text: "\"Need some help?\"",
    
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Caravan man",
            text: "\"You truly are a gift from the heavens!\"",
        },        
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Caravan man",
            text: "\"Theres a extra shovel in the back, I'll start with the left side of the village.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman grabs the shovel then walks in the opposite direction from the man",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Walking up to one of the buildings, Stickman hears banging and begins to frantically dig towards the noise",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman shovels a mound of snow and eventually see a slight light, he shovels faster",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "He creates a opening to the builds door where it swings open",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Villager",
            text: "\"Thank you! oh, you're not the usual guy but still you saved us.\"",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Inside the building, its a family, a large family",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The entire family grabs tools, even the kids although their tools are plastic",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The family shovels their neighbor snow",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman stunned for a second, snaps out of it and helps the family",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The neighbors are free then they get their tools and help the next person, then the next. then the next",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman engrossed by the community can't help feel a sense of belonging",
        },
    ]
};

const xue_p03 = {
    name: 'xue_p03',
    data: [
        {
            type: 'story',
            speaker: "Narrator",
            text: "The building are cleared of snow and the once dark village became flooded in light",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The villagers quickly bring tables, pots, coals, and food",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "In the blink of an eye the villagers set up a festival"
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The smell of fresh food, the sight of villagers dancing in joy, and the feel of being useful strike Stickman",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman felt so out of place, he lived isolated his entire life, he had rejected everyone is enire life",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "While lost in thought, a villager came up to Stickman and offers him food, inviting Stickman to join the party",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman awkwardly joins the party, still out of place but eventually gets into the party spirit",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            spekaer: "Narrator",
            text: "Stickman felt like he belonged somewhere and didn't reject it",
        },
        {
            type: 'story',
            speaker: "Narrator",
            text: "Stickman decided to live in the village and be part of the community",
        },
    ]
}

const thank_p01 = {
    name: 'thank_p01',
    data: [
        {
            type: 'story',
            speaker: "Devs",
            text: "Thank you for playing our game!",
        },
        {
            type: 'story',
            speake
        }
    ]
}

const bath_a01 = {
    name: 'bath_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "If Stickman were to go to town, he rather look decent then rancid",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Without hesitation, Stickman dives into the water, regret instantly fills his body",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Moments later. Stickman becomes Sticksicle and slowly drifts down the river",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Years later, a village finds Stickmans frozen body, but thinking its a rare sculpture, they bring it to a frozen museum where Stickman now lies eternally"
        },
    ],
};

const rebuild_a01 = {
    name: 'rebuild_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman felt like hes done enough on his journey and remembered the comfort of his life before his journey",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "He went to the forest and with his pickaxe, he shattered rocks, collected woods, and kindle",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "He set up a temporary camp ground, made crude tools, and began to rebuild his old life",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Felling tree after tree, Stickman gathers enough logs to make a small cabin",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Weeks later Stickman finishes his cabin, its small, simple but it gets the job done",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Months past by Stickman, hes expanded his cabin and lives in isolation, but rustling in the bushes, curious eyes stares at Stickman inside his cabin",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman had a feeling of deja vu, walking outside he scans his surroundings",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The bushes rustle and out comes a young villager, timidly the boy say",
        },
        {
            type: 'story',
            speaker: "Young Villager",
            text: "\"Can you help me find my villager?\"",
        },
    ],
};

const wrong_a02 = {
    name: 'wrong_a02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Hammer worker",
            text: "\"Not that one, hurry and get the right one next.\"",
            next: 'pride_a03',
        },
    ],
};

const wrong_a01 = {
    name: 'wrong_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Smelter worker",
            text: "\"This is the wrong one, hurry get the right one.\"",
            next: 'pride_a01',
        },
    ],
};

const lantern_p02 = { //quest ending//
    name: 'lantern_p02',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Manager",
            text: "\"Great work out! now go home and get some rest.\""
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "Stickman just glares at him signaling that he was basically homeless in the mountains before going to the guild",
            next: 'quests',
            questCompleted: 'lantern',
        },
    ]
};


const grasslands_a01 = {
    name: 'grasslands_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "on the way to the grasslands, the pair see the crossing bridge in demolished and a sign reading",
        },
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Sign",
            text: "\"Sorry Player, but this part of the game isn't ready yet. -Dev Team\"",
        },
    ]
};

const desert_a01 = {
    name: 'desert_a01',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: "Narrator",
            text: "The heat gets even stronger when the pair approach, so hot that they must retreat",
            next: 'in_progress'
        },
    ]
};


const in_progress = {
    name: 'in_progress',
    overlay_url: '/images/gameZoneOverlay/defaultOverlay.svg',
    data: [
        {
            bg_url: '/images/gameZoneBG/defaultBG.svg',
            type: 'story',
            speaker: 'Dev Team',
            text: "This part of the game isn't done yet, come back when it is",
            next: 'in_progress',
        }
    ]
}

export const completeStory = [prologue, forest_p01, forest_p02, forest_a01, forest_a02, forest_b01, forest_c01, call_p01, refuse_p01, refuse_a01, refuse_b01, mentor_p01, crossing_p01, crossing_a01, crossing_b02, tae_p01, tae_a01, tae_b01, tae_c01, mountains_p01, mountains_a01, mountains_p02, mountains_a02, quests, quests_completed, guild_a01, guild_a02, guild_a03, lantern_a01, lantern_a02, lantern_a03, lantern_b01, lantern_b02, lantern_b03, lantern_p02, flint_p01, market_a01, bridge_a01, empty_a01, flint_p02, shortcut_a01, straight_a02, rocky_a03, flint_p03, flint_p04, materials_a01, materials_a02, materials_a03, pride_a01, pride_a02, pride_a03, pride_a04, pride_p01, pride_p02, pride_p03, pride_b01, pride_b02, cave_p01, cave_a01, cave_p02, quarry_a01, quarry_a02, quarry_a03, peak_a01, continue_a01, xue_a01, xue_b01, xue_p02, xue_a02, xue_p03, thank_p01, bath_a01, rebuild_a01, tae_a01, cave_b01, wrong_a01, wrong_a02, grasslands_a01, desert_a01, in_progress];
