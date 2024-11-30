import { metadata } from "./modules.js";

const hamburgerButton = document.querySelector("#hamburger-btn");
const closeModal = document.querySelector("#close-modal")
const navScreen = document.querySelector("#nav-screen")
const navCard = document.querySelector("#nav-card")

const toggleAction = () => {
    navScreen.classList.toggle("hidden")
    navScreen.classList.toggle("invisible")
}

export const toggleMenuAction = () => {
    hamburgerButton.addEventListener('click', toggleAction)
    closeModal.addEventListener('click', toggleAction)
    navScreen.addEventListener('click', toggleAction)
    navCard.addEventListener('click', event => event.stopPropagation())
    
}

export const pages = ["A1", "A2", "B1", "B2", "C1"]

export const items = {
    a1: [
        {
            title: "A request from your boss",
            description: "Listen to requests from a manager to practise and improve your listening skills.",
            image: "/public/images/boss.jpg",
            conversation: [
                { speaker: "Susanne", text: "Hi, Mario. Can you help me prepare some things for the next month?" },
                { speaker: "Mario", text: "OK, sure. What can I help you with?" },
                { speaker: "Susanne", text: "I need to visit the customer in Germany. It's important." },
                { speaker: "Mario", text: "What can I do to help?" },
                { speaker: "Susanne", text: "Can you send an email to the customer? Ask them when I can visit them next week. Please do this first. It's a priority and very urgent." },
                { speaker: "Mario", text: "Right. I'll do it today." },
                { speaker: "Susanne", text: "Thanks. This next task is also important. Can you invite everyone to the next team meeting?" },
                { speaker: "Mario", text: "Yes, I will." },
                { speaker: "Susanne", text: "But first you need to book a meeting room. After that, please send everyone an email about it." },
                { speaker: "Mario", text: "Yes, of course." },
                { speaker: "Susanne", text: "And finally, can you write a short report about our new project? I have to give a presentation to our managers next month. Please do it when you have time – sometime in the next two or three weeks. It's not too urgent." },
                { speaker: "Mario", text: "Sure, no problem. I can do it this week." },
                { speaker: "Susanne", text: "There's no hurry. Take your time." }
            ],
            audio: "/public/media/LE_listening_A1_A_request_from_your_boss.mp3",
        },
        {
            title: "A voicemail message",
            description: "Listen to a voicemail message and answer the questions to practise your listening skills.",
            image: "/public/images/phone.jpeg",
            conversation: [
                { speaker: "John", text: "Hi, this is John. Thanks for calling. I'm not here at the moment, so please leave a message and I'll call you back." },
                { speaker: "Marina", text: "Hi, John, this is Marina Silva calling from Old Time Toys. Your colleague Alex gave me your phone number. She said you can help me." },
                { speaker: "Marina", text: "I need some information on your new products. Could you please call me when you are back in the office? My phone number is 0-2-0-8, 6-5-5-7-6-2-1." },
                { speaker: "Marina", text: "Also, can you please email me your new brochure and information about your prices? My email address is Marina, that's M-A-R-I-N-A, dot Silva, S-I-L-V-A, at O-L-D-T-I-M-E hyphen toys dot com." },
                { speaker: "Marina", text: "Thanks a lot. I look forward to hearing from you." }
            ],
            audio: "/public/media/LE_listening_A1_A_voicemail_message.mp3",
        },
        {
            title: "Booking a table",
            description: "Listen to someone booking a table in a restaurant to practise and improve your listening skills!",
            image: "/public/images/booking.avif",
            conversation: [
                { speaker: "John", text: "Hi, this is John. Thanks for calling. I'm not here at the moment, so please leave a message and I'll call you back." },
                { speaker: "Marina", text: "Hi, John, this is Marina Silva calling from Old Time Toys. Your colleague Alex gave me your phone number. She said you can help me." },
                { speaker: "Marina", text: "I need some information on your new products. Could you please call me when you are back in the office? My phone number is 0-2-0-8, 6-5-5-7-6-2-1." },
                { speaker: "Marina", text: "Also, can you please email me your new brochure and information about your prices? My email address is Marina, that's M-A-R-I-N-A, dot Silva, S-I-L-V-A, at O-L-D-T-I-M-E hyphen toys dot com." },
                { speaker: "Marina", text: "Thanks a lot. I look forward to hearing from you." }
            ],
            audio: "/public/media/LE_listening_A1_Booking_a_table.mp3",
        },
        {
            title: "Business cards",
            description: "Listen to four people talk about their jobs to practise and improve your listening skills.",
            image: "/public/images/business-cards.avif",
            conversation: [
                {
                    speaker: "A",
                    text: "Hello, Doctor Miller. It's nice to meet you."
                },
                {
                    speaker: "B",
                    text: "Please call me Peter."
                },
                {
                    speaker: "A",
                    text: "OK. Are you a medical doctor? It must be helpful when you sell medical equipment."
                },
                {
                    speaker: "B",
                    text: "Actually, no. My doctorate was in electronic engineering, but it's still helpful for me when I sell our equipment."
                },
                {
                    speaker: "B",
                    text: "Good morning, everyone. I'm happy to be here today to tell you about our new project. My name is Alessandro Rossi. I'm the project leader on the Starlight programming project."
                },
                {
                    speaker: "C",
                    text: "Pleased to meet you. Here's my card. My real name is Megumi Tanaka, but people who are not from my country think it's difficult to say my name, so I use another name, Meg, when I'm working internationally."
                },
                {
                    speaker: "D",
                    text: "Hello, everyone. My name's Andres Mulligan. I'm very happy to be joining this team for the next few months and learning more about research and development."
                }
            ],
            audio: "/public/media/LE_listening_A1_Business_cards.mp3",
        },
        {
            title: "Finding the library",
            description: "Listen to a conversation about the university library to practise and improve your listening skills.",
            image: "/public/images/library_books.jpg",
            conversation: [
                { speaker: "Student", text: "Hi. Excuse me." },
                { speaker: "Student B", text: "Yes?" },
                { speaker: "Student", text: "Where's the library?" },
                { speaker: "Student B", text: "The library? It's next to the registration office." },
                { speaker: "Student", text: "Ah ... sorry, I'm new. Where's the registration office?" },
                { speaker: "Student B", text: "No problem. See the big building over there?" },
                { speaker: "Student", text: "Yes." },
                { speaker: "Student B", text: "OK, so that's the lecture theatre. Next to that, on the right, is the registration office. And next to that is the library." },
                { speaker: "Student", text: "I see. Thanks!" },
                { speaker: "Student", text: "Hello?" },
                { speaker: "Librarian", text: "Hello." },
                { speaker: "Student", text: "Is this the library?" },
                { speaker: "Librarian", text: "Yes, it is. Quiet, please." },
                { speaker: "Student", text: "Oh, sorry. Thank you." },
                { speaker: "Librarian", text: "Can I help you?" },
                { speaker: "Student", text: "Er, yes, please. I want to borrow some books. What do I need?" },
                { speaker: "Librarian", text: "You need a library card. Here's the application form. You can take up to six books maximum today." },
                { speaker: "Student", text: "OK. Six books." },
                { speaker: "Librarian", text: "Yes. You have two weeks to read the books. Then you bring them back." },
                { speaker: "Student", text: "And if I'm late?" },
                { speaker: "Librarian", text: "Every day you are late there is a fee of fifty pence." },
                { speaker: "Student", text: "OK, 50p a day. Er, anything else?" },
                { speaker: "Librarian", text: "Mobile phones must be switched off in the library. You can bring your laptop, but please use headphones to watch videos or listen to music." },
                { speaker: "Student", text: "OK, great." },
                { speaker: "Librarian", text: "And you can't bring food or drink." },
                { speaker: "Student", text: "No food, no drink. And ...?" },
                { speaker: "Librarian", text: "And please speak quietly! People are working here." },
                { speaker: "Student", text: "Oh! Oh, OK. Thank you." },
                { speaker: "Librarian", text: "You're welcome." }
            ],
            audio: "/public/media/LE_listening_A1_Finding_ the_library.mp3",
        },
        {
            title: "Meeting a new team member",
            description: "Listen to a conversation between two new colleagues to practise your listening skills.",
            image: "/public/images/team_meeting.jpg",
            conversation: [
                { speaker: "Peter", text: "Hi, my name's Peter. What's your name?" },
                { speaker: "Carla", text: "Hi, Peter. I'm Carla. I'm new here." },
                { speaker: "Peter", text: "Welcome to the company, Carla." },
                { speaker: "Carla", text: "Thanks, Peter. I'm happy to be here and it's nice to meet you." },
                { speaker: "Peter", text: "It's nice to meet you too." },
                { speaker: "Carla", text: "Where do you work?" },
                { speaker: "Peter", text: "I work in the design team. We sit over there." },
                { speaker: "Carla", text: "I'm in the marketing team. I started last week." },
                { speaker: "Peter", text: "You work in marketing? That's very interesting." },
                { speaker: "Carla", text: "Yes, it is. I'm enjoying it. But there are a lot of new things to learn." },
                { speaker: "Peter", text: "I'm sure there are. I'm happy to help you if I can." },
                { speaker: "Carla", text: "Thank you, Peter. What do you do in the design department?" },
                { speaker: "Peter", text: "I design new products." },
                { speaker: "Carla", text: "That sounds interesting. I plan marketing events for new products. So I think we'll work together sometimes." },
                { speaker: "Peter", text: "That would be great. So, where are you from, Carla?" },
                { speaker: "Carla", text: "Brazil. And you?" },
                { speaker: "Peter", text: "I'm from the UK." },
                { speaker: "Carla", text: "How long have you been here?" },
                { speaker: "Peter", text: "I've worked here for three years but I actually moved here from the UK five years ago, to study." }
            ],
            audio: "/public/media/LE_listening_A1_Meeting_a_new_team_member.mp3",
        },
        {
            title: "Meeting other students",
            description: "Listen to a group of new students meeting for the first time to practise and improve your listening skills.",
            image: "/public/images/students.jpg",
            conversation: [
                { speaker: "Teacher", text: "So, now you've got the important information, it's time to meet each other. Everyone turn to the people next to you and introduce yourselves." },
                { speaker: "Cara", text: "So, hi. I'm Cara. And you are?" },
                { speaker: "Robert", text: "Robert." },
                { speaker: "Selim", text: "Selim." },
                { speaker: "Cara", text: "Nice to meet you!" },
                { speaker: "Robert and Selim", text: "You too." },
                { speaker: "Robert", text: "Nice accent. Where are you from?" },
                { speaker: "Cara", text: "I'm from Glasgow." },
                { speaker: "Robert", text: "Oh, really? My mum's from near Glasgow, so I'm half Scottish." },
                { speaker: "Cara", text: "Cool. Do you live in Scotland?" },
                { speaker: "Robert", text: "No, we live in England, near Manchester. My dad's from there. What about you, Selim?" },
                { speaker: "Selim", text: "I'm from Leeds originally but I grew up near London." },
                { speaker: "Cara", text: "Are you both doing history on its own?" },
                { speaker: "Selim", text: "No. I'm doing history and German." },
                { speaker: "Robert", text: "I'm doing it with maths, actually." },
                { speaker: "Selim", text: "History and maths. That's different!" },
                { speaker: "Robert", text: "Yeah, I couldn't decide between arts and sciences. Maths doesn't help with remembering dates, though! And you?" },
                { speaker: "Cara", text: "I'm doing history and French." },
                { speaker: "Selim", text: "I wanted to do French but German was easier, so I took that." },
                { speaker: "Cara", text: "German is so hard!" }
            ],
            audio: "/public/media/LE_listening_A1_Meeting_other_students.mp3",
        },
        {
            title: "Meeting people at a dinner",
            description: "Listen to a group of new students meeting for the first time to practise and improve your listening skills.",
            image: "/public/images/business-meeting.png",
            conversation: [
                { speaker: "Charles", text: "Hello, Julian." },
                { speaker: "Julian", text: "Hello, Charles. How are you?" },
                { speaker: "Charles", text: "I'm fine. Fine. Julian, do you remember Alyssa?" },
                { speaker: "Julian", text: "No, I don't." },
                { speaker: "Charles", text: "She's Ben's sister. Do you remember? We were all at Ben's wedding together." },
                { speaker: "Julian", text: "Ah, yes, I do – in that old castle. Was it in January?" },
                { speaker: "Charles", text: "Yes, it was! Alyssa was there." },
                { speaker: "Alyssa", text: "Hello. Nice to meet you ... again." },
                { speaker: "Julian", text: "Hello, nice to meet you too, Alison." },
                { speaker: "Alyssa", text: "I'm not Alison." },
                { speaker: "Julian", text: "What?" },
                { speaker: "Alyssa", text: "My name isn't Alison. It's Alyssa." },
                { speaker: "Julian", text: "I'm sorry. Nice to meet you, Alyssa." },
                { speaker: "Charles", text: "Good. Would you like a drink?" },
                { speaker: "Julian", text: "Good idea." },
                { speaker: "Alyssa", text: "Yes, please." },
                { speaker: "Charles", text: "Here you are." },
                { speaker: "Alyssa and Julian", text: "Thanks!" }
            ],
            audio: "/public/media/LE_listening_A1_Meeting_people_at_a_dinner.mp3",
        },
        {
            title: "Ordering in a café",
            description: "Listen to people ordering food and drinks in a café to practise and improve your listening skills.",
            image: "/public/images/ordering-cafe.avif",
            conversation: [
                { speaker: "Customer 1", text: "Can I have an orange juice, please?" },
                { speaker: "Server", text: "Regular or large?" },
                { speaker: "Customer 1", text: "How big is a large?" },
                { speaker: "Server", text: "This is a large. This is a regular." },
                { speaker: "Customer 1", text: "I'll have a large, then, please. Without ice." },
                { speaker: "Server", text: "OK, coming up." },
                { speaker: "Customer 1", text: "Sorry, I wanted freshly squeezed orange juice." },
                { speaker: "Server", text: "I'm afraid we only have bottled juices." },
                { speaker: "Customer 1", text: "Oh, then I'll have an apple juice instead, please." },
                { speaker: "Server", text: "Here you go. That's £3.50, please." },
                { speaker: "Customer 1", text: "Thanks." },
                { speaker: "Server", text: "Thank you." },
                { speaker: "Server", text: "Can I help anyone?" },
                { speaker: "Customer 2", text: "Who's next?" },
                { speaker: "Customer 3", text: "You were first, I think." },
                { speaker: "Customer 2", text: "What teas do you have?" },
                { speaker: "Server", text: "Breakfast tea, mint and green tea." },
                { speaker: "Customer 2", text: "A mint tea and a slice of lemon cake, please." },
                { speaker: "Server", text: "To eat in or take away?" },
                { speaker: "Customer 2", text: "Take away, please." },
                { speaker: "Server", text: "There you go. That'll be £4.20, please." },
                { speaker: "Customer 2", text: "Sorry, I've only got a fifty." },
                { speaker: "Server", text: "That's OK. Here's your change … 5, 10, 30, 50." },
                { speaker: "Server", text: "Who's next?" },
                { speaker: "Customer 4", text: "Can I have a ..." },
                { speaker: "Customer 3", text: "Sorry, I think I was in front of you." },
                { speaker: "Customer 4", text: "Oh, sorry!" },
                { speaker: "Customer 3", text: "Can I have a chocolate chip cookie, please?" },
                { speaker: "Server", text: "Would you like a drink with that?" },
                { speaker: "Customer 3", text: "No, thanks. Just the cookie." },
                { speaker: "Server", text: "OK, then. That's 95p, please." },
                { speaker: "Customer 3", text: "Thanks. I think that's right." },
                { speaker: "Server", text: "50, 70, 80, 85, 90, 92, 94, yep, 95. Thank you." }
            ],
            audio: "/public/media/LE_listening_A1_Ordering_in_a_café.mp3",
        },
        {
            title: "Organising a group project",
            description: "Listen to people organising a group project and answer the questions to practise and improve your listening skills.",
            image: "/public/images/organizing-projects.png",
            conversation: [
                { speaker: "Cara", text: "So for our group project, do you want to start this week?" },
                { speaker: "Selim", text: "Yeah, I want to start early so we have enough time." },
                { speaker: "Robert", text: "Me too, but I've got a big maths project too." },
                { speaker: "Cara", text: "How about we meet first to plan what we're going to do? Just for an hour." },
                { speaker: "Robert", text: "Good idea, Cara." },
                { speaker: "Cara", text: "When are you free?" },
                { speaker: "Robert", text: "I can always do mornings before 10." },
                { speaker: "Cara", text: "Robert … Uh …" },
                { speaker: "Selim", text: "I'm sleeping before 10!" },
                { speaker: "Robert", text: "OK! OK, so when are you two free?" },
                { speaker: "Cara", text: "Wednesdays are good for me. But not very early, please!" },
                { speaker: "Selim", text: "I can't do the mornings on Wednesdays but I have 3 till 5 free." },
                { speaker: "Robert", text: "I can do 4 o'clock, just before my maths class." },
                { speaker: "Cara", text: "Great, 4 then. Where shall we meet?" },
                { speaker: "Selim", text: "The library?" },
                { speaker: "Robert", text: "I don't know. The library isn't a good place for a planning meeting as we can't talk in there." },
                { speaker: "Cara", text: "How about the university café? It's near the library. We can talk in there. And eat cake." },
                { speaker: "Selim", text: "Cake is good." },
                { speaker: "Robert", text: "OK, so Wednesday at the café. I need to leave at ten to five to go to my maths class." },
                { speaker: "Cara", text: "No problem. Planning will take less than an hour." },
                { speaker: "Selim", text: "OK! See you Wednesday for cake." },
                { speaker: "Robert and Cara", text: "See you, Selim!" }
            ],
            audio: "/public/media/LE_Listening_A1_Organising_a_ group_ project.mp3",
        },
        {
            title: "Shopping for clothes",
            description: "Listen to a conversation in a shop to practise and improve your listening skills.",
            image: "/public/images/buy-clothes.png",
            conversation: [
                { speaker: "Shop assistant", text: "Hello, can I help you?" },
                { speaker: "Customer", text: "I'm just looking, thanks." },
                { speaker: "Customer", text: "Excuse me?" },
                { speaker: "Shop assistant", text: "Yes?" },
                { speaker: "Customer", text: "Where are the changing rooms?" },
                { speaker: "Shop assistant", text: "They're over there. Behind you." },
                { speaker: "Customer", text: "Thank you." },
                { speaker: "Customer", text: "Hi. Excuse me again. Do you have this jumper in black?" },
                { speaker: "Shop assistant", text: "Yes, just a moment. What size do you need?" },
                { speaker: "Customer", text: "Extra small, please." },
                { speaker: "Shop assistant", text: "Here you are." },
                { speaker: "Customer", text: "How much is this?" },
                { speaker: "Shop assistant", text: "It's £29." },
                { speaker: "Customer", text: "Can I pay by credit card?" },
                { speaker: "Shop assistant", text: "Yes, you can. Of course." },
                { speaker: "Shop assistant", text: "Would you like a bag for that?" },
                { speaker: "Customer", text: "Yes, please." }
            ],
            audio: "/public/media/LE_listening_A1_Shopping_for_clothes.mp3",
        },
        {
            title: "The first English class",
            description: "Listen to a teacher give students information about a new course to practise and improve your listening skills.",
            image: "/public/images/first-class-day.jpg",
            conversation: [
                { speaker: "Lindsay Black", text: "Hello, everyone. Hello! It's nice to see you all here. Welcome to British Life and Language. I am your teacher. My name is Lindsay Black. That's L-I-N-D-S-A-Y Black." },
                { speaker: "Lindsay Black", text: "Before we begin, some information about the class." },
                { speaker: "Lindsay Black", text: "Our class is in room 13, on the first floor. When you go upstairs, turn left to find the room. Again, that's room 13." },
                { speaker: "Lindsay Black", text: "We have class twice a week, on Monday and Wednesday. Our class begins at 4.30 p.m. and lasts 90 minutes, so we finish at 6 p.m. That's 4.30 to 6. Please arrive on time, OK?" },
                { speaker: "Lindsay Black", text: "Also, I have an office hour if you have questions. I'm in office 7B on the second floor. My office hour is Friday at 6 p.m. So, if you have any questions or problems or want to talk to me, it's Friday at 6 p.m. in office 7B." },
                { speaker: "Lindsay Black", text: "We begin next week, on March the 13th. That's Monday, March the 13th. The course ends on May the 20th. May the 20th is the last day." },
                { speaker: "Lindsay Black", text: "I think that's all ... Oh, one more thing. For this course you need the book. Here it is: British Life and Language Level 1 Student's Book. So, please get a copy of the book. I don't want to see any photocopies of the book, thank you! Remember, it's level 1 student's book. Don't buy the teacher's book." },
                { speaker: "Lindsay Black", text: "I think that's all, everyone. I look forward to working with you. See you next Monday!" }
            ],
            audio: "/public/media/LE_listening_A1_The_first_English_class.mp3",
        }
    ],
    a2: [
        {
            title: "A morning briefing",
            description: "Listen to a morning briefing to practise and improve your listening skills.",
            image: "/public/images/briefing-morning.jpg",
            conversation: [
                { speaker: "Speaker", text: "Hi, everyone. I know you're all busy so I'll keep this briefing quick. I have some important information about a change in the management team." },
                { speaker: "Speaker", text: "As you already know, our head of department, James Watson, is leaving his position at the end of this week. His replacement is starting at the end of the next month. In the meantime, we'll continue with our projects as usual." },
                { speaker: "Speaker", text: "I have two more quick points." },
                { speaker: "Speaker", text: "Firstly, there will be some improvements made to the staff car park next month for a few weeks. It will be closed during that time." },
                { speaker: "Speaker", text: "Don't worry, we've found a solution. We can use the local church car park until our own one is ready. If you arrive before 8.30 a.m., please use our small car park on Brown Street, and if you arrive after that, you should go directly to the church car park. It's only a five-minute walk away. But they need it in the evenings, so you have to leave before 6 p.m. Sorry about that – I know how much you all love working late!" },
                { speaker: "Speaker", text: "The other thing I wanted to tell you about is that the canteen has now introduced a cashless payment system. So, you can't use cash for payments any more. You can pay directly with your smartphone or you can pay using your company ID card. The total amount put on your company ID card comes off your salary at the end of each month." },
                { speaker: "Speaker", text: "OK. That's it? Are there any questions?" }
            ],
            audio: "/public/media/LE_listening_A2_Morning_briefing.mp3",
        },
        {
            title: "An invitation to a party",
            description: "Listen to some phone messages with directions to practise and improve your listening skills.",
            image: "/public/images/An-invitation-to-party.jpg",
            conversation: [
                {
                    speaker: "Automated message",
                    text: "You have two new messages. Message number one, received today at 3.45 p.m. Hi, it's me. How's it going? I guess you're at work and you don't have your phone on, right? First of all, thank you, THANK YOU for the birthday card and message. I received it this morning. That's so nice of you. I'm organising a little party for my birthday. It's nothing very big – only a few of my best and closest friends. That means you too! We're going to have it at my cousin's house. She lives in the countryside in a nice big house with a swimming pool. I'd love to see you there. It's going to be this Friday. I'll send you the instructions on how to get there later, OK? Anyway, have fun at work. Don't work too hard, OK? Talk soon."
                },
                {
                    speaker: "Automated message",
                    text: "You have two new messages. Message number two, received today at 5.15 p.m. Aw, you're still not answering your phone! OK, here are the instructions to get to my cousin's house for the party. Are you going to take your car? If you take the car, drive straight on Forest Road until you get to the motorway. Drive past Brownsville and take exit 13A. That's 13A. You drive down the road there and turn left. It's the first big house on the right. OK? If you're taking a bus, you can get the number 80 to Brownsville. Call me when you get there and somebody can pick you up in a car. I can't wait. This is going to be so great!"
                }
            ],
            audio: "/public/media/LE_listening_A2_An_invitation_to_a_party.mp3",
        },
        {
            title: "Changing a meeting time",
            description: "Listen to two colleagues arranging a meeting to practise and improve your listening skills.",
            image: "/public/images/change-meeting-time.jpg",
            conversation: [
                {
                    speaker: "Lucy",
                    text: "Hi, Anna. Do you have a minute to talk about the meeting next Tuesday?"
                },
                {
                    speaker: "Anna",
                    text: "Sure. We said 11, didn't we?"
                },
                {
                    speaker: "Lucy",
                    text: "Yeah, we did. But I have a bit of a problem with the time. Would it be possible to move it?"
                },
                {
                    speaker: "Anna",
                    text: "Oh, I see. We could postpone it to the afternoon, to 1 p.m., for example. Or bring it forward to earlier in the morning. What would suit you?"
                },
                {
                    speaker: "Lucy",
                    text: "Could we make it 9 o'clock? That would really help me. I have another important meeting in the central office at 12."
                },
                {
                    speaker: "Anna",
                    text: "No problem. It's important you're there."
                },
                {
                    speaker: "Lucy",
                    text: "Thanks a lot, Anna."
                },
                {
                    speaker: "Anna",
                    text: "Do you need help with any preparation? Did you get the agenda I sent out?"
                },
                {
                    speaker: "Lucy",
                    text: "Yes, I did. And no, that's all fine, thanks. My report is ready and I'm looking forward to presenting it."
                },
                {
                    speaker: "Anna",
                    text: "Great."
                },
                {
                    speaker: "Lucy",
                    text: "I can tell Sven about the time change. I'll see him later."
                },
                {
                    speaker: "Anna",
                    text: "Don't worry about telling Sven. I'll send an email to everyone to confirm the time has changed and with an updated meeting invite."
                },
                {
                    speaker: "Lucy",
                    text: "Great. Thanks, Anna."
                },
                {
                    speaker: "Anna",
                    text: "OK. I'm happy that works for you. We really need you there and it's good we don't have to cancel it."
                },
                {
                    speaker: "Lucy",
                    text: "See you then. Have a good weekend in the meantime."
                },
                {
                    speaker: "Anna",
                    text: "You too."
                },
            ],
            audio: "/public/media/LE_listening_A2_Changing_a_meeting_time.mp3",
        },
        {
            title: "Changing plans",
            description: "Listen to two people talking about changing their plans to practise and improve your listening skills.",
            image: "/public/images/active-listening.png",
            conversation: [
                {
                    speaker: "Francesco",
                    text: "Sachi? Sachi? Sachiko!"
                },
                {
                    speaker: "Sachi",
                    text: "Francesco! Is everything OK?"
                },
                {
                    speaker: "Francesco",
                    text: "Yes. Yes. Sorry, I saw you and I was across the street … I ran."
                },
                {
                    speaker: "Sachi",
                    text: "I see. What's up?"
                },
                {
                    speaker: "Francesco",
                    text: "Do you have the tickets … for the play?"
                },
                {
                    speaker: "Sachi",
                    text: "No, I don't. I'm going to buy them this afternoon."
                },
                {
                    speaker: "Francesco",
                    text: "Oh good, good. Listen, don't buy tickets for this Friday."
                },
                {
                    speaker: "Sachi",
                    text: "Oh? Why not?"
                },
                {
                    speaker: "Francesco",
                    text: "I can't go to the theatre on Friday. Something's come up. I have a concert this Friday."
                },
                {
                    speaker: "Sachi",
                    text: "Another concert? But you said …"
                },
                {
                    speaker: "Francesco",
                    text: "I know, I know. I'm sorry. I forgot."
                },
                {
                    speaker: "Sachi",
                    text: "Francesco!"
                },
                {
                    speaker: "Francesco",
                    text: "How about next week? Are you free then? I can definitely go next Friday."
                },
                {
                    speaker: "Sachi",
                    text: "Francesco. You did this two weeks ago, remember? I had cinema tickets for the new Marvel movie and you changed the plans then too. For band practice."
                },
                {
                    speaker: "Francesco",
                    text: "I know, and I …"
                },
                {
                    speaker: "Sachi",
                    text: "We also missed my favourite dance group. Because your band was playing at some child's birthday party."
                },
                {
                    speaker: "Francesco",
                    text: "It was my nephew's birthday …"
                },
                {
                    speaker: "Sachi",
                    text: "Ha!"
                },
                {
                    speaker: "Francesco",
                    text: "OK, why don't we go out for dinner before my concert? Then, next Friday we can go to the play."
                },
                {
                    speaker: "Sachi",
                    text: "Oh …"
                },
                {
                    speaker: "Francesco",
                    text: "Come on, Sachi. Just this one more time."
                },
                {
                    speaker: "Sachi",
                    text: "OK, but promise me next Friday. OK?"
                },
                {
                    speaker: "Francesco",
                    text: "I promise. I promise!"
                }
            ],
            audio: "/public/media/LE_listening_A2_Changing_plans.mp3",
        },
        {
            title: "Facts and figures",
            description: "Listen to the lecturer giving some facts and figures to practise and improve your listening skills.",
            image: "/public/images/activelistening.jpeg",
            conversation: [
                {
                    speaker: "Speaker",
                    text: "… and the next part of this talk is on the Panama Canal. It's amazing how this one small section of a small country can be so important to the world. Let's learn a little bit about the canal itself, before we look at how it connects to everything else."
                },
                {
                    speaker: "Speaker",
                    text: "The Panama Canal is an artificial waterway in the Central American country of Panama that connects the Atlantic and Pacific Ocean. It is only 82 kilometres long. If you go around South America by ship then you need to travel another 15,000 kilometres. So the canal saves a lot of travel time. It takes around 8 to 10 hours to cross the canal."
                },
                {
                    speaker: "Speaker",
                    text: "The French started building the canal in 1881, but they couldn't finish it. The project was started again in 1904 by the United States and the canal was finally finished in 1914. Many people died while they were building the canal, some say up to 25,000. For the rest of the 20th century, the United States controlled the canal, but gave control back to Panama in 2000."
                },
                {
                    speaker: "Speaker",
                    text: "Every year, around 40,000 ships come through the canal. These are mostly commercial ships. They transport goods for trade between Asia and America, or Europe. In 2016 the government of Panama made the canal bigger, so that now 99 per cent of ships can pass through it."
                },
                {
                    speaker: "Speaker",
                    text: "Let's now turn to the role of the Panama Canal in the global economy …"
                }
            ],
            audio: "/public/media/LE_listening_A2_Facts_and_figures.mp3",
        },
        {
            title: "Four conversations",
            description: "Listen to four conversations to practise and improve your listening skills.",
            image: "/public/images/four-conversation.png",
            conversation: [
                {
                    speaker: "Man",
                    text: "How did it go?"
                },
                {
                    speaker: "Woman",
                    text: "Umm, I think it went quite well. I did a lot of research and prepared a lot. I was in there for ... I don't know ... half an hour?"
                },
                {
                    speaker: "Man",
                    text: "And? What did they say?"
                },
                {
                    speaker: "Woman",
                    text: "Nothing much. At the end I asked them, 'What happens now?', and the woman said, 'We'll call you back with news in three or four days.'"
                },
                {
                    speaker: "Man",
                    text: "Really?"
                },
                {
                    speaker: "Woman",
                    text: "Yeah, I think I've got the job. There weren't a lot of other people there. I was the only interview that day, you know?"
                },
                {
                    speaker: "Man",
                    text: "Well, good luck with it."
                },
                {
                    speaker: "Man",
                    text: "Anyway, you were saying ..."
                },
                {
                    speaker: "Woman",
                    text: "Oh, yeah, um ... let's see. Yes, so I was in the museum and there were, I don't know, a hundred people waiting to get into the room. Finally, I got in, and I tried to see the Mona Lisa but I couldn't look at it."
                },
                {
                    speaker: "Man",
                    text: "Why not?"
                },
                {
                    speaker: "Woman",
                    text: "Because the room was filled with people taking photographs of it!"
                },
                {
                    speaker: "Man",
                    text: "Oh, right."
                },
                {
                    speaker: "Woman",
                    text: "Yes! And selfies."
                },
                {
                    speaker: "Man",
                    text: "Wait a minute. You can take photos while you're in there?"
                },
                {
                    speaker: "Woman",
                    text: "Yes, but you can't use flash. I don't know ... Why do we take photos of everything we see when we travel?"
                },
                {
                    speaker: "Man",
                    text: "I know. And we never look at the photos after."
                },
                {
                    speaker: "Woman",
                    text: "Exactly! I'm tired of always taking photos. I don't feel I'm enjoying things."
                },
                {
                    speaker: "Man",
                    text: "Who took this?"
                },
                {
                    speaker: "Woman",
                    text: "I can't remember. Hmmm ..."
                },
                {
                    speaker: "Man",
                    text: "What am I doing?"
                },
                {
                    speaker: "Woman",
                    text: "You're sitting on the sofa, watching TV and eating chocolates. Nothing changes!"
                },
                {
                    speaker: "Man",
                    text: "Ha! Very funny. You look very young, though."
                },
                {
                    speaker: "Woman",
                    text: "I know. Look at my hair – it was so long!"
                },
                {
                    speaker: "Man",
                    text: "Mine too, look at me! Hey … I think I know who took this photo."
                },
                {
                    speaker: "Woman",
                    text: "Umm … who? Was it Dad?"
                },
                {
                    speaker: "Man",
                    text: "No, it wasn’t Dad or Mum. Do you remember Barry?"
                },
                {
                    speaker: "Woman",
                    text: "No."
                },
                {
                    speaker: "Man",
                    text: "Yes, YES! You do remember. Barry, your boyfriend at high school. You were seventeen and he was sixteen and he was so very polite: 'Hello, I'm Barry. It's very nice to meet you ...'"
                },
                {
                    speaker: "Woman",
                    text: "Stop it! He was nice."
                },
                {
                    speaker: "Man",
                    text: "Yeah, well, he took the photo."
                },
                {
                    speaker: "Woman",
                    text: "Let's see. OK. I'm glad we could talk about this. It's not easy to say."
                },
                {
                    speaker: "Man",
                    text: "What?"
                },
                {
                    speaker: "Woman",
                    text: "Well, you're not in our group – for the class project."
                },
                {
                    speaker: "Man",
                    text: "What do you mean? You know I'm always in a group with you."
                },
                {
                    speaker: "Woman",
                    text: "I know. It's just that this time … this time we made the group differently and because you were late ..."
                },
                {
                    speaker: "Man",
                    text: "I see. You don't want me in the group?"
                },
                {
                    speaker: "Woman",
                    text: "No, no. It isn't that. It's that we've already made the group, see? There's four of us already."
                },
                {
                    speaker: "Man",
                    text: "So? We can't be a group of five?"
                },
                {
                    speaker: "Woman",
                    text: "Well, the teacher said four people per group."
                },
                {
                    speaker: "Man",
                    text: "Oh."
                },
                {
                    speaker: "Woman",
                    text: "It's not about you or your work or anything like that. It's ... errrr ... well, we already have the group."
                },
                {
                    speaker: "Man",
                    text: "So I have to find another group."
                },
                {
                    speaker: "Woman",
                    text: "I'm sorry."
                }
            ],
            audio: "/public/media/LE_listening_A2_Four_conversations.mp3",
        },
        {
            title: "Instructions for an assignment",
            description: "Listen to a university teacher giving instructions for an assignment to practise and improve your listening skills.",
            image: "/public/images/1628258521169.jfif",
            conversation: [
                {
                    speaker: "Teacher",
                    text: "I want to explain a few things about your essay."
                },
                {
                    speaker: "Teacher",
                    text: "First of all, the deadline. The deadline for this essay is October the 18th. Not the 19th, not the 28th, not two days later because your dog was ill or your computer broke – the 18th. If it's late, I won't mark it. I won't even read it – you'll fail the assignment! So, please hand it in on time. You can even hand it in early, if you like!"
                },
                {
                    speaker: "Teacher",
                    text: "You can email me the essays at j.hartshorn@lmu.ac.uk. That's H-A-R-T-S-H-O-R-N. I'll reply to say I've got it. If I don't reply within a day, it might mean I didn't get it, so please email me again to make sure. You can also bring a paper copy of the essay to my office, but let's be kind to the trees, OK? Email is better for the trees and for me."
                },
                {
                    speaker: "Teacher",
                    text: "Don't forget that you must reference every idea or quote you use that isn't your own idea. And the last page of your essay should be a list of all the books you used, in alphabetical order, not in the order you used them!"
                },
                {
                    speaker: "Teacher",
                    text: "And lastly, make it easy for me to read! That means use a clear font. Arial is best, but Times New Roman is fine too. Not Comic Sans please! Size 12 font for the essay, and size 14 for the titles and subheadings. And use page numbers. Any questions?"
                }
            ],
            audio: "/public/media/LE_listening_A2_Academic_Instructions_for_an_assignment.mp3",
        },
        {
            title: "Leaving a message",
            description: "Listen to someone leaving a message to practise and improve your listening skills.",
            image: "/public/images/leaving-message.jpg",
            conversation: [
                {
                    speaker: "Jane",
                    text: "Hello, this is the sales department. Jane Solomon speaking."
                },
                {
                    speaker: "Peter",
                    text: "Hello, is Maria Fernandez there, please?"
                },
                {
                    speaker: "Jane",
                    text: "No, I'm sorry. She's not in the office at the moment. She's on her lunch break."
                },
                {
                    speaker: "Peter",
                    text: "Oh. Could you take a message, please? Could you tell her that Peter Griffin called?"
                },
                {
                    speaker: "Jane",
                    text: "Sure. Could you give me your number?"
                },
                {
                    speaker: "Peter",
                    text: "It's 0-7-4-6-0 double 9-0-1 double 8."
                },
                {
                    speaker: "Jane",
                    text: "Thanks. That's 0-7-4-6-0 2-9-0-1-2-8."
                },
                {
                    speaker: "Peter",
                    text: "Sorry, no. It's 0-7-4-6-0 9-9-0-1-8-8."
                },
                {
                    speaker: "Jane",
                    text: "9-9-0-1-8-8."
                },
                {
                    speaker: "Peter",
                    text: "Yes. Please ask her to call me back, and tell her it's about the PXO project. I need the new project figures."
                },
                {
                    speaker: "Jane",
                    text: "The PXO project. Right. I'll give her your message when she comes back to the office."
                },
                {
                    speaker: "Peter",
                    text: "Thank you. In case I'm in a meeting when she calls back, can I give you my email address too?"
                },
                {
                    speaker: "Jane",
                    text: "Of course."
                },
                {
                    speaker: "Peter",
                    text: "Great. It's P-E-T-E-R dot G-R-I-F-F-I-N at F-R-E-S-H dot com."
                },
                {
                    speaker: "Jane",
                    text: "Can I read that back to you?"
                },
                {
                    speaker: "Peter",
                    text: "Sure."
                },
                {
                    speaker: "Jane",
                    text: "That's P-E-T-E-R dot G-R-I-F-F-I-N at F-R-E-S-H dot com."
                },
                {
                    speaker: "Peter",
                    text: "Yes, that's it."
                },
                {
                    speaker: "Jane",
                    text: "OK. I'll tell her you called."
                },
                {
                    speaker: "Peter",
                    text: "Thank you. Goodbye."
                },
                {
                    speaker: "Jane",
                    text: "Goodbye."
                }
            ],
            audio: "/public/media/LE_listening_A2_Leaving_a_message.mp3",
        },
        {
            title: "Missing a class",
            description: "Listen to a student explain why she can't come to class to practise and improve your listening skills.",
            image: "/public/images/missing-class.jpg",
            conversation: [
                {
                    speaker: "Jane",
                    text: "Hello, this is the sales department. Jane Solomon speaking."
                },
                {
                    speaker: "Peter",
                    text: "Hello, is Maria Fernandez there, please?"
                },
                {
                    speaker: "Jane",
                    text: "No, I'm sorry. She's not in the office at the moment. She's on her lunch break."
                },
                {
                    speaker: "Peter",
                    text: "Oh. Could you take a message, please? Could you tell her that Peter Griffin called?"
                },
                {
                    speaker: "Jane",
                    text: "Sure. Could you give me your number?"
                },
                {
                    speaker: "Peter",
                    text: "It's 0-7-4-6-0 double 9-0-1 double 8."
                },
                {
                    speaker: "Jane",
                    text: "Thanks. That's 0-7-4-6-0 2-9-0-1-2-8."
                },
                {
                    speaker: "Peter",
                    text: "Sorry, no. It's 0-7-4-6-0 9-9-0-1-8-8."
                },
                {
                    speaker: "Jane",
                    text: "9-9-0-1-8-8."
                },
                {
                    speaker: "Peter",
                    text: "Yes. Please ask her to call me back, and tell her it's about the PXO project. I need the new project figures."
                },
                {
                    speaker: "Jane",
                    text: "The PXO project. Right. I'll give her your message when she comes back to the office."
                },
                {
                    speaker: "Peter",
                    text: "Thank you. In case I'm in a meeting when she calls back, can I give you my email address too?"
                },
                {
                    speaker: "Jane",
                    text: "Of course."
                },
                {
                    speaker: "Peter",
                    text: "Great. It's P-E-T-E-R dot G-R-I-F-F-I-N at F-R-E-S-H dot com."
                },
                {
                    speaker: "Jane",
                    text: "Can I read that back to you?"
                },
                {
                    speaker: "Peter",
                    text: "Sure."
                },
                {
                    speaker: "Jane",
                    text: "That's P-E-T-E-R dot G-R-I-F-F-I-N at F-R-E-S-H dot com."
                },
                {
                    speaker: "Peter",
                    text: "Yes, that's it."
                },
                {
                    speaker: "Jane",
                    text: "OK. I'll tell her you called."
                },
                {
                    speaker: "Peter",
                    text: "Thank you. Goodbye."
                },
                {
                    speaker: "Jane",
                    text: "Goodbye."
                }
            ],
            audio: "/public/media/LE_listening_A2_Missing_a_class.mp3",
        },
        {
            title: "Transport announcements",
            description: "Listen to some transport announcements to practise and improve your listening skills.",
            image: "/public/images/transport-announcement.png",
            conversation: [
                {
                    speaker: "A",
                    text: "The next train to arrive at Platform 2 is the 12.20 to Bristol Temple Meads, calling at Reading, Oxford and Bristol Parkway. Platform 2 for the 12.20 to Bristol. First class is in the rear carriage."
                },
                {
                    speaker: "B",
                    text: "This is a platform announcement for passengers for the 12.20 service to Bristol Temple Meads. This train is delayed by approximately 8 minutes. The train will now depart from Platform 9. Passengers for the 12.20 train to Bristol, please make your way to Platform 9."
                },
                {
                    speaker: "C",
                    text: "Passengers for Flight EB380 to Paris please make your way to Gate 13 for boarding. Gate 13 for flight EB380 to Paris. Please have your passports and boarding passes ready. Your flight is ready to board."
                },
                {
                    speaker: "D",
                    text: "This is a London Underground service to Liverpool Street. The next station is Liverpool Street. Upon arrival, the first set of doors will not open. Customers in the first carriage, please move towards the rear doors to leave the train. The next station is Liverpool Street. Change here for Central Line, Circle Line, Hammersmith & City Line and Metropolitan Line and Main Line Suburban rail services. Please mind the gap between the train and the platform. This train terminates at Redbridge."
                }
            ],
            audio: "/public/media/LE_listening_A2_Transport_announcements.mp3",
        },
        {
            title: "Understanding an explanation",
            description: "Listen to a professor's explanation to practise and improve your listening skills.",
            image: "/public/images/understanding-explation.png",
            conversation: [
                {
                    speaker: "Professor",
                    text: "OK, before we continue, does anybody have a question? Oh, lots of questions, I see. OK, we'll go one at a time. Yes?"
                },
                {
                    speaker: "Student",
                    text: "Thank you. You talked about Fibonacci numbers in the lecture. Sorry, I don't understand. Can you explain?"
                },
                {
                    speaker: "Professor",
                    text: "Of course. What do you want to know?"
                },
                {
                    speaker: "Student",
                    text: "OK … I hope this isn't a silly question, but what does Fibonacci actually mean?"
                },
                {
                    speaker: "Professor",
                    text: "No question is ever silly – it's always good to ask. OK, it's the name of a person. Fibonacci was a European mathematician in the Middle Ages."
                },
                {
                    speaker: "Student",
                    text: "Ah, OK. Thanks. So, we know he was a person, but what are the Fibonacci numbers? I don't get it."
                },
                {
                    speaker: "Professor",
                    text: "The Fibonacci numbers are a sequence of numbers. They go 1, 1, 2, 3, 5, 8 and so on. Do you see the sequence? Do you see how it works?"
                },
                {
                    speaker: "Student",
                    text: "I'm not sure."
                },
                {
                    speaker: "Professor",
                    text: "OK. This is how it works. The first number is 1, then 1 again, then 2. The third number is the first number plus the second number. The fourth number is the second number plus the third number: 1 plus 2 is 3. The fifth number is the third number, 2, plus the fourth number, 3. So the fifth number in a Fibonacci sequence is 5."
                },
                {
                    speaker: "Student",
                    text: "Ah! I think I understand now. But what about their importance? You said these were very important."
                },
                {
                    speaker: "Professor",
                    text: "Yes, let me explain. This sequence of numbers is important because we see it in many things. Fibonacci numbers are common in geometry, they are common in nature, for example in plants. We see the sequence everywhere."
                },
                {
                    speaker: "Student",
                    text: "Could you give us some more examples?"
                },
                {
                    speaker: "Professor",
                    text: "OK ... well, we don't have time right now but I can bring more examples in for next class, OK?"
                }
            ],
            audio: "/public/media/LE_listening_A2_Understanding_an_explanation.mp3",
        },
        {
            title: "Who's who in the office",
            description: "Listen to two people talking about the people in their office to practise and improve your listening skills.",
            image: "/public/images/office.png",
            conversation: [
                {
                    speaker: "Jani",
                    text: "Welcome to the department, Yuki. Let me show you around and tell you about your new colleagues. I'll introduce you to them all later."
                },
                {
                    speaker: "Yuki",
                    text: "Great. Thanks. So, who are those people over there?"
                },
                {
                    speaker: "Jani",
                    text: "That's the order management team. Luciana deals with the new orders. She's the one with short, dark hair."
                },
                {
                    speaker: "Yuki",
                    text: "In the purple dress?"
                },
                {
                    speaker: "Jani",
                    text: "Yeah, that's right. You'll probably work closely with her while you are learning about our ordering process."
                },
                {
                    speaker: "Yuki",
                    text: "Got it, thanks. And who's that over there? The guy who's on the phone?"
                },
                {
                    speaker: "Jani",
                    text: "Oh, you mean the one by the window? In the green shirt? Ah, that's Ian. He's the marketing director. And that's Maria beside him. She's responsible for the internal IT systems."
                },
                {
                    speaker: "Yuki",
                    text: "OK, I'll try to remember all of this. I should probably be taking notes!"
                },
                {
                    speaker: "Jani",
                    text: "Don't worry about it. For now it's just good to put some faces to names."
                },
                {
                    speaker: "Yuki",
                    text: "OK, great – and who do I talk to about setting up my mobile phone with email access? Is that also Maria?"
                },
                {
                    speaker: "Jani",
                    text: "No, you need to talk to Sebastian who works in communications. He can help you. That's him over there, next to the printer."
                },
                {
                    speaker: "Yuki",
                    text: "Thanks. I'll introduce myself to him later."
                }
            ],
            audio: "/public/media/LE_listening_A2_Who's_who_in_the_office.mp3",
        }

    ],
    b1: [
        {
            title: "A phone call from a customer",
            description: "Listen to the phone call from a customer to practise and improve your listening skills.",
            image: "/public/images/customer-calling-home-featured.avif",
            conversation: [
                {
                    speaker: "Junko",
                    text: "Hello, Junko Mori speaking. How can I help you?"
                },
                {
                    speaker: "Andrea",
                    text: "Hi, Junko, it's Andrea here from Red Band. I'm calling about our latest order."
                },
                {
                    speaker: "Junko",
                    text: "Everything arrived OK, right? We got the delivery confirmation at our end."
                },
                {
                    speaker: "Andrea",
                    text: "Yes, everything's fine with the order. I'm calling about the invoice and the payment terms. I need a favour."
                },
                {
                    speaker: "Junko",
                    text: "A favour? What do you need?"
                },
                {
                    speaker: "Andrea",
                    text: "This is a little, er ... difficult, but I need an extension on the payment terms. I know they're usually 30 days, but we're having some cash flow problems. You'd really be helping us out if you could extend it to 60 days."
                },
                {
                    speaker: "Junko",
                    text: "I'm not sure if I can do that, Andrea. We've got regulations at our end, and also have to manage our own cash flow."
                },
                {
                    speaker: "Andrea",
                    text: "I promise this won't become the norm, Junko. Actually, I also want to place another new order. The same size order as last time. It's for an important customer and they pay on delivery."
                },
                {
                    speaker: "Junko",
                    text: "I see. So your cash flow problem will be solved after this new order is delivered."
                },
                {
                    speaker: "Andrea",
                    text: "Exactly."
                },
                {
                    speaker: "Junko",
                    text: "That sounds good. Hold on, Andrea. Let me see what I can do. Yes, I think we can make an exception this time."
                },
                {
                    speaker: "Andrea",
                    text: "That's great, Junko. I appreciate your help."
                },
                {
                    speaker: "Junko",
                    text: "And we appreciate your business, Andrea. It works both ways."
                },
                {
                    speaker: "Andrea",
                    text: "Thanks again, Junko. Can you send me a quick email confirmation of the payment terms extension?"
                },
                {
                    speaker: "Junko",
                    text: "Sure, no problem. We're happy to help you."
                },
                {
                    speaker: "Andrea",
                    text: "Great. And I'll email you the new order."
                },
                {
                    speaker: "Junko",
                    text: "Thanks. I'll keep an eye out for it. Talk to you soon."
                },
                {
                    speaker: "Andrea",
                    text: "You too. Goodbye."
                }
            ],
            audio: "/public/media/LE_listening_B1_A_phone_call_from_a_customer.mp3",
        },
        {
            title: "A student discussion",
            description: "Listen to two students comparing Mars and Earth to practise and improve your listening skills.",
            image: "/public/images/group-discussion.151207.jpg",
            conversation: [
                { speaker: "Teacher", text: "So you've got a few minutes to discuss with your partner." },
                { speaker: "Student 1", text: "So, as far as I know, the main similarity between Mars and Earth is that they can both support human life." },
                { speaker: "Student 2", text: "Yeah, but do we know that's actually true? I mean, Mars is much colder than Earth, isn't it? It says here it's about minus 55 degrees most of the time, whereas on Earth only places like Antarctica get that cold." },
                { speaker: "Student 1", text: "True. Well then, I suppose you could say both planets are a similar distance from the Sun?" },
                { speaker: "Student 2", text: "No way! Mars is much further away! It says here it's about 228 million kilometres, while Earth is about 150 million." },
                { speaker: "Student 1", text: "Yes, but in space that's not that far. Jupiter is, like, almost 780 million kilometres. That's why we use astronomical units when we talk about distances in space. Earth is 1 astronomical unit from the Sun and Mars is 1.3. The difference doesn't sound so big when you look at it that way." },
                { speaker: "Student 2", text: "I see what you mean. Jupiter is 5.2 astronomical units so I guess you're right. What other similarities are there between the two planets?" },
                { speaker: "Student 1", text: "Let's see … not the colour, obviously!" },
                { speaker: "Student 2", text: "Yeah! Earth is called the blue planet and Mars is called the red planet for pretty obvious reasons!" },
                { speaker: "Student 1", text: "Their sizes are pretty different. Mars is about half the size of Earth." },
                { speaker: "Student 2", text: "What about this? It looks like the days on both planets are almost the same length. Earth's day is 24 hours but Mars's is about half an hour longer." },
                { speaker: "Student 1", text: "You're right. OK, any other things they both share?" },
                { speaker: "Student 2", text: "I suppose you could say they have water in common." },
                { speaker: "Student 1", text: "Could you? How?" },
                { speaker: "Student 2", text: "Well, Earth is 70 per cent water and Mars probably had huge oceans in the past. It's just that most of the water there now is probably frozen." },
                { speaker: "Student 1", text: "Ah, I see. I don't think we can say the air is the same, though. Most of Earth's air is nitrogen and oxygen, but Mars …?" },
                { speaker: "Student 2", text: "Mars doesn't really have air, not compared with Earth. It's got about one per cent as much air as Earth." },
                { speaker: "Student 1", text: "Right, and it's mostly carbon dioxide." },
                { speaker: "Student 2", text: "Gravity is another difference. I didn't know this, but Mars has higher gravity than the Moon. But it's much less than on Earth, of course." },
                { speaker: "Student 1", text: "Oh, yes. It says Mars has about 38 per cent of Earth's gravity." },
                { speaker: "Teacher", text: "OK, let's see what you've found …" }
            ],
            audio: "/public/media/LE_listening_B1_Student_discussion.mp3",
        },
        {
            title: "A team meeting about diversity",
            description: "Listen to a team meeting about diversity to practise and improve your listening skills.",
            image: "/public/images/happy-business-people-meeting-strategy-planning-team-discussion-sharing-idea-office-group-employees-teamwork-collaboration-discussing-project-plan-conference-workplace_590464-194246.avif",
            conversation: [
                { speaker: "Nina", text: "As you know, our team has grown a lot in the past year and we feel we need to address the diversity in the team." },
                { speaker: "Brenda", text: "How do you mean, 'address the diversity'?" },
                { speaker: "Nina", text: "Well, we all know that diversity in teams is a good thing, but it can also be a challenge for some people to respect and value people's differences. We've got a really diverse team here – people of different nationalities, backgrounds, religions, ages … and sometimes I don't feel we make the most of this." },
                { speaker: "Stefano", text: "Yes, and even if it isn't specifically challenging, many people are simply unaware of the isolation that some team members may feel because they are different." },
                { speaker: "Brenda", text: "So, what does this mean? What are we going to do?" },
                { speaker: "Nina", text: "Well, we need to create a workplace charter. You know, one that promotes equality, diversity and inclusion." },
                { speaker: "Brenda", text: "That sounds like a good idea. But will people just see it as something the management team has created? Maybe they won't even pay attention to it." },
                { speaker: "Nina", text: "I know. That's why we're going to involve everyone in creating it." },
                { speaker: "Stefano", text: "That's a good idea. We could run some workshops and get ideas from the employees about how we can create a more inclusive workplace." },
                { speaker: "Nina", text: "Exactly. I was thinking that before that we could run some team-building sessions so they can experience the value of diversity for themselves." },
                { speaker: "Brenda", text: "Yes, I like that. Many people see diversity as something negative, often because there are different opinions or ways of doing things." },
                { speaker: "Nina", text: "Yes, I know, but if there's no diversity, then the risk is that we all work in the same way, think the same and see the world the same. This makes it hard to be creative and to innovate." },
                { speaker: "Stefano", text: "I completely agree, Nina. OK. So, what do you want us to do?" },
                { speaker: "Nina", text: "Stefano, can you look for a successful trainer who specialises in running workshops and team-building sessions on diversity and inclusion?" },
                { speaker: "Stefano", text: "Sure. I'll be happy to." },
                { speaker: "Nina", text: "And Brenda, can you find a fun venue? Somewhere that is quite diverse itself. Something that's not the usual seminar-style environment?" },
                { speaker: "Brenda", text: "Sure. That'll be fun." },
                { speaker: "Nina", text: "And I'm going to do some further research into how other organisations are benefiting from their diversity. I can share this with the whole team." }
            ],
            audio: "/public/media/LE_listening_B1_Team_meeting_about_diversity.mp3",
        },
        {
            title: "A weather forecast",
            description: "Listen to a weather forecast and answer the questions to practise and improve your listening skills.",
            image: "/public/images/weather-forcaster.jpg",
            conversation: [
                { speaker: "Presenter", text: "Hello and good morning! Well, we're off to a good start in the south this week, as most of the rain from the weekend has disappeared – just a few patches of cloud and maybe some showers here on the east coast. They'll all clear up by lunchtime, though." },
                { speaker: "Presenter", text: "Over the next day or so, London and the area around Kent can expect a couple of isolated showers, but mostly dry through until Thursday." },
                { speaker: "Presenter", text: "It's not such good news for the north-west this week, I'm afraid: more wet weather, and not a lot of sunshine. Some of today's showers will be heavy – and even thundery in Manchester and across the Pennines." },
                { speaker: "Presenter", text: "Leeds will escape the thunderstorms, with drizzle and light rain only throughout the rest of the day and tonight." },
                { speaker: "Presenter", text: "Elsewhere it becomes dry today, but with some foggy patches towards Wales. In England, tomorrow morning will see a dry, bright start in most places, with high temperatures throughout the week." },
                { speaker: "Presenter", text: "We might see one or two thunderstorms appearing as the week goes on, with temperatures everywhere at 29 to 30 degrees." },
                { speaker: "Presenter", text: "By the weekend, unfortunately, the dry weather will make way for mostly cloudy skies and rain. The rain will move from Scotland, down towards the north and reach the south coast by Saturday afternoon." },
                { speaker: "Presenter", text: "Temperatures, at least, will stay mostly warm at around 21 degrees for the weekend. It might feel like a nice change from the high twenties and early thirties we'll see in the week." },
                { speaker: "Presenter", text: "That's all from me until tomorrow. Enjoy the mini-heatwave while you can!" }
            ],
            audio: "/public/media/LE_listening_B1_A_weather_forecast.mp3",
        },
        {
            title: "An interview about listening skills",
            description: "Listen to the English teacher talk about listening to practise and improve your listening skills.",
            image: "/public/images/interview.png",
            conversation: [
                { speaker: "Presenter", text: "So, today's expert teacher is Gabriella, a university English teacher from Leeds. Gabriella, hi and thanks for joining us today." },
                { speaker: "Gabriella", text: "Thanks for having me!" },
                { speaker: "Presenter", text: "So, I have to confess today's topic is something I am really bad at: listening. Most people say speaking is the most stressful part of learning a new language but, for me, with my B1 German, speaking isn't so bad. At least I'm in control of it. But listening … woah … people speak so fast and it's like my brain just shuts down. Am I just really strange and bad at listening? Tell me, honestly, I can take it." },
                { speaker: "Gabriella", text: "No, you're not strange. In fact, it's really common. You know, in exams most people do pretty well in speaking compared with listening. Of course, exams are a different situation from real life because in an exam you can't ask for something to be repeated or explained. You usually have just one or maybe two opportunities to listen to the dialogue and then it's gone." },
                { speaker: "Presenter", text: "Right, but in real life I feel stupid always saying, 'Sorry, can you repeat that, please?', especially if I still don't understand even when they repeat it. And people out there listening, I hope you don't do this – quite often the person just repeats what they said equally as fast and I'm still lost!" },
                { speaker: "Gabriella", text: "They do, don't they? In real life, you've got two strategies. One is to pretend to understand and get out of the conversation as fast as you can." },
                { speaker: "Presenter", text: "Yep, sounds familiar!" },
                { speaker: "Gabriella", text: "But, obviously that's not going to help if it's a conversation with high stakes. It might have important consequences. I mean, if you're just chatting with a stranger at the bus stop, it doesn't matter. But imagine you're at a government office or a bank, trying to find out what paperwork you need to get your ID or open a bank account. What can you do then?" },
                { speaker: "Presenter", text: "I hope you've got the answer, Gabriella, because I'm coming out in a cold sweat just thinking about either of those situations!" },
                { speaker: "Gabriella", text: "The other strategy is to summarise what they said." },
                { speaker: "Presenter", text: "But how can you do that if you didn't understand what they said?" },
                { speaker: "Gabriella", text: "Ah, well, you only start the summary, so you might say, in German in your case, 'OK, so the first thing I have to do is …?' and make it a question. Or, for example, 'And which office is that again?' Break it down into smaller questions and the other person will naturally start answering them. That way you're controlling the conversation a bit more." },
                { speaker: "Presenter", text: "I get you ...." }
            ],
            audio: "/public/media/LE_listening_B1_An_interview_about_listening_skills.mp3",
        },
        {
            title: "An introduction to a lecture",
            description: "Listen to the introduction of a psychology lecture to practise and improve your listening skills.",
            image: "/public/images/An-introduction-to-a-lecture.jpg",
            conversation: [
                { speaker: "Lecturer", text: "Good afternoon, everyone. Welcome to the first lecture of our new course in Positive Psychology. While some people may associate psychology with looking at what's wrong with us, and at what problems we have, there is much more to psychology than that. Positive psychology, for example, looks at how to help people become happier." },
                { speaker: "Lecturer", text: "This lecture begins with a question: what makes a happy life?" },
                { speaker: "Lecturer", text: "Now, I'm going to give you one possible answer. A happy life is a life in which you are completely absorbed in what you do. Now, how does this compare with what you and your partner said?" },
                { speaker: "Lecturer", text: "This answer comes from the work of Mihaly Csikszentmihalyi and the theory of flow. Csikszentmihalyi is a psychologist who has spent much of his professional life on the study of what makes people happy and how we can find happiness." },
                { speaker: "Lecturer", text: "Csikszentmihalyi suggests the theory that happiness is not caused by external events or things that happen to us. Our perception of these things and how we see these events either makes us happy or sad. In other words, if we want happiness, we have to actively look for it. However, this does not mean that we should always look for happiness! Csikszentmihalyi believed that our happiest moments happen when we are in a state of flow." },
                { speaker: "Lecturer", text: "The theory of flow can be summarised like this: when we are totally involved in, or focused on, what we are doing, we are in a state of flow." },
                { speaker: "Lecturer", text: "Csikszentmihalyi got the inspiration for this theory when he noticed how artists worked in a studio. They completely lost track of time, they didn't notice they were hungry or tired, and they could work for hours, even days, without stopping. Anyone I have spoken to who has experienced this state of concentration has said it's difficult to explain. The best way to explain it is that it is like being in a river and the flow of the water carries you away." },
                { speaker: "Lecturer", text: "For the rest of this lecture, I will explore this theory of flow in more detail. First we will look at Csikszentmihalyi's life, and how it influenced his ideas. Then we will look at the conditions that go with a state of flow. What creates flow, exactly? Finally, we will look at activities that can help us achieve flow in our everyday lives. Will this course make you happy for life? Well, maybe. Maybe." },
                { speaker: "Lecturer", text: "Right, let's get started. If you look at the next slide …" }
            ],
            audio: "/public/media/LE_listening_B1_An_introduction_to_a_lecture.mp3",
        },
        {
            title: "Arriving late to class",
            description: "Listen to the conversation between two students to practise and improve your listening skills.",
            image: "/public/images/Arriving-late-to-class.png",
            conversation: [
                { speaker: "Student 1", text: "Sorry. Sorry, excuse me. I'm just … just coming to sit over here. Phew. Hey. How's it going? So, what have I missed?" },
                { speaker: "Student 2", text: "Nothing. He just started around five minutes ago." },
                { speaker: "Student 1", text: "Did he say anything about the mid-term?" },
                { speaker: "Student 2", text: "What?" },
                { speaker: "Student 1", text: "About the mid-term tests. Did he say anything about when he was going to hand them back?" },
                { speaker: "Student 2", text: "He's almost finished marking them, he said. We get them next Tuesday." },
                { speaker: "Student 1", text: "I'm sorry, I didn't catch that. When do we get them?" },
                { speaker: "Student 2", text: "Tuesday. Next Tuesday." },
                { speaker: "Student 1", text: "OK. Got it. Sorry. What page are we meant to be on?" },
                { speaker: "Student 2", text: "Page 34." },
                { speaker: "Student 1", text: "Page … 34. Oh, wait. I don't have my textbook. Can I … share with you? Wow. This is hard stuff." },
                { speaker: "Student 2", text: "Mmm." },
                { speaker: "Student 1", text: "What does SEO mean?" },
                { speaker: "Student 2", text: "What?" },
                { speaker: "Student 1", text: "SEO. This is all about SEO but he hasn't said what it means." },
                { speaker: "Student 2", text: "Search engine optimisation. How to appear on internet searches." },
                { speaker: "Student 1", text: "Internet searches. Right. Right. OK." },
                { speaker: "Student 2", text: "He said what it meant." },
                { speaker: "Student 1", text: "What?" },
                { speaker: "Student 2", text: "He explained it before you got here." },
                { speaker: "Student 1", text: "Oh. Right. OK." },
                { speaker: "Student 2", text: "Can you be quiet? I'm trying to listen to the lecture." },
                { speaker: "Student 1", text: "So am I. Sorry. Sorry, one more question. What does this have to do with the American Revolution?" },
                { speaker: "Student 2", text: "What?" },
                { speaker: "Student 1", text: "I don't get it. Why is he talking about search engines in a course on the American Revolution?" },
                { speaker: "Student 2", text: "What are you talking about? This is a class on software engineering." },
                { speaker: "Student 1", text: "You mean, it's not Early American History?" },
                { speaker: "Student 2", text: "You're in the wrong class." },
                { speaker: "Student 1", text: "Oh, wow. Now it all makes sense. I'm so sorry." },
                { speaker: "Student 2", text: "It's fine." },
                { speaker: "Student 1", text: "Here, I'll just … excuse me. I'm in the wrong class. Excuse me. Thanks. Sorry." }
            ],
            audio: "/public/media/LE_listening_B1_Arriving_late_to_class.mp3",
        },
        {
            title: "At the chemist",
            description: "Listen to a conversation at a chemist's to practise and improve your listening skills.",
            image: "/public/images/pharmaceutical-chemist-in-lab-scaled.png",
            conversation: [
                { speaker: "Chemist", text: "Hello, can I help?" },
                { speaker: "Customer", text: "Yes, my wife sent me here. I, erm, need something for a sore throat … and I can't stop coughing. It really hurts." },
                { speaker: "Chemist", text: "Do you have a headache too?" },
                { speaker: "Customer", text: "Not really, no." },
                { speaker: "Chemist", text: "Well, we have this syrup. And these lozenges." },
                { speaker: "Customer", text: "Which is better?" },
                { speaker: "Chemist", text: "They're both good. The syrup is more expensive." },
                { speaker: "Customer", text: "Oh, well … I'll take the lozenges, then. How many do I take?" },
                { speaker: "Chemist", text: "Just one." },
                { speaker: "Customer", text: "Sorry, I'm sorry. Er, how often should I take it?" },
                { speaker: "Chemist", text: "Just one every four to six hours. Take it before mealtimes. Are you allergic to any medicine?" },
                { speaker: "Customer", text: "No." },
                { speaker: "Chemist", text: "Then you'll be fine with this." },
                { speaker: "Customer", text: "Can I get some antibiotics too?" },
                { speaker: "Chemist", text: "I'm afraid you need a prescription for that." },
                { speaker: "Customer", text: "Ah." },
                { speaker: "Chemist", text: "You know, you should really see a doctor if that cough continues." },
                { speaker: "Customer", text: "Thanks. I know." },
                { speaker: "Chemist", text: "Anything else?" },
                { speaker: "Customer", text: "No, thanks." },
                { speaker: "Chemist", text: "That'll be £7.49 then, please." }
            ],
            audio: "/public/media/LE_listening_B1_At_the_chemist.mp3",
        },
        {
            title: "Chatting about a series",
            description: "Listen to two friends chatting about a television series to practise and improve your listening skills.",
            image: "/public/images/Chatting-about-series.jpg",
            conversation: [
                { speaker: "Man", text: "So, did you see the final episode last night?" },
                { speaker: "Woman", text: "Of course! As if I would miss that!" },
                { speaker: "Man", text: "And?" },
                { speaker: "Woman", text: "It was by far the best episode, definitely." },
                { speaker: "Man", text: "Yeah, totally. The dragon at the end and all the special effects in that final scene were amazing." },
                { speaker: "Woman", text: "I loved that part! But I still don't think this series was as good as the others." },
                { speaker: "Man", text: "Really? But you said you wouldn't want to miss it?" },
                { speaker: "Woman", text: "I know, but still … it's a lot more predictable than it used to be." },
                { speaker: "Man", text: "But that's because the story has been told so well that all the characters are reaching their destiny now." },
                { speaker: "Woman", text: "I don't know … before, anyone could die at any time so it was exciting! But, this series, no key characters died and we all knew they wouldn't. When Jaime fell in the water after the dragon attacked him, we knew he would make it somehow. And … oh, surprise, Bronn jumps in and saves him." },
                { speaker: "Man", text: "They did kill some characters in this series, though. What was that one's name …?" },
                { speaker: "Woman", text: "Exactly, see! You can't even remember who died!" },
                { speaker: "Man", text: "Hmm. The only thing I didn't like about this series was that it was shorter than the others. Seven episodes instead of ten. Maybe they spent all their money on that dragon!" },
                { speaker: "Woman", text: "Right! I don't understand why they did it, as all the fans would happily watch ten episodes." },
                { speaker: "Man", text: "I reckon that now they're not using the story in the books any more, they don't have as many ideas." },
                { speaker: "Woman", text: "That would explain why they're not being as brave with the story too. It's more like a Hollywood film than a TV show now." },
                { speaker: "Man", text: "So, is Tyrion still your favourite character?" },
                { speaker: "Woman", text: "You know … surprisingly, I think my favourite might be Cersei." },
                { speaker: "Man", text: "What?!" },
                { speaker: "Woman", text: "She's so interesting! All the awful things she's done and the way she's just aiming for revenge, even though it won't make her happy. She still surprises us because we're expecting her to have a happy ending where she sees her mistakes and becomes a good person. But she never does, no matter what it costs her. She's unpredictable because we just can't believe anyone would be like her." },
                { speaker: "Man", text: "I guess. You don't have to like a character for them to be your favourite!" }
            ],
            audio: "/public/media/LE_listening_B1_Chatting_about_a_series.mp3",
        },
        {
            title: "Making a decision",
            description: "Listen to a meeting in which colleagues make a decision to practise and improve your listening skills.",
            image: "/public/images/Decision-making.png",
            conversation: [
                { speaker: "Jani", text: "Thanks for coming, everyone. So, we're here today to define the timeline for our new project." },
                { speaker: "Emiko", text: "Yes, Jani, that's a great idea." },
                { speaker: "Carolina", text: "OK. What do you need from us?" },
                { speaker: "Emiko", text: "Hold on a moment. I think we need to decide between us what to do, to make sure it works for all departments." },
                { speaker: "Jani", text: "Yes, exactly, don't worry. We're going to discuss this and make a decision together. Let's first think about the scheduling of each project phase. What do you think, Emiko?" },
                { speaker: "David", text: "Can I interrupt? I think we should first be clear about the process we'll use to make the decision. How are we going to do it?" },
                { speaker: "Jani", text: "Ah, yes. Good point. Well, I think the best way is for each of you to give your opinion and then we can discuss and make a decision." },
                { speaker: "David", text: "OK. That sounds good." },
                { speaker: "Emiko", text: "Yes, that works for me too. I know we're still planning the structure of the later phases of the project, but I think we should begin phase one as soon as possible. We can work out the rest later, as we go along." },
                { speaker: "David", text: "I'm sorry, I don't think so. How can we start phase one if we're not fully clear on where the rest of the project will take us? We might make a wrong decision and waste time." },
                { speaker: "Jani", text: "I agree with you on that point, David. However, we'll waste too much time if we wait until everything is planned before we actually start working on the project. I think we should take an agile approach." },
                { speaker: "David", text: "Agile approach?" },
                { speaker: "Jani", text: "Well, it means that we start quickly and then adapt as we go along." },
                { speaker: "Emiko", text: "That's right." },
                { speaker: "Jani", text: "Carolina, you've been very quiet." },
                { speaker: "Carolina", text: "Um … I'm sorry. I didn't want to interrupt. I'm listening … and thinking." },
                { speaker: "David", text: "Do you agree we should get the plan right first, and then start with phase one?" },
                { speaker: "Carolina", text: "I'm sorry, David. I don't think I agree with you. It's important to have a good plan. But plans can change, even the good ones – and business changes often. We need to be flexible, and we also need to move quickly." },
                { speaker: "Jani", text: "OK. So should we take a vote?" },
                { speaker: "Emiko", text: "Well, you're the project leader. Let's go with your decision." },
                { speaker: "Carolina", text: "Yes, I'll follow your lead, Jani." },
                { speaker: "David", text: "Well, I guess that's decided then. We'll follow your agile approach, Jani. Start quickly and keep planning the later stages of the project." },
                { speaker: "Jani", text: "Yes, that's right." },
                { speaker: "David", text: "I still don't think this is the right decision, but I'm happy to go with the majority. We should add some space into the schedule later for additional work this 'flexibility' will need." },
                { speaker: "Jani", text: "Don't worry, David, we will. OK, so it's decided then. We'll start phase one as soon as possible, and in the background we'll continue planning the later phases and adapt them as we go along." }
            ],
            audio: "/public/media/LE_listening_B1_Making_a_decision.mp3",
        },
        {
            title: "Meeting an old friend",
            description: "Listen to the conversation between two old friends to practise and improve your listening skills.",
            image: "/public/images/meeting-old-friends.jpg",
            conversation: [
                { speaker: "Selina", text: "Patrick? Is that you?" },
                { speaker: "Patrick", text: "Selina! Hello!" },
                { speaker: "Selina", text: "Well, well. Patrick Eastwood. How have you been?" },
                { speaker: "Patrick", text: "Good. Great, actually. How are you? I haven't seen you for ... how long?" },
                { speaker: "Selina", text: "It's been ages. At least fifteen years. Wow." },
                { speaker: "Patrick", text: "Yeah. Wow." },
                { speaker: "Patrick and Selina", text: "So, what are you doing here?" },
                { speaker: "Selina", text: "Sorry, you go first." },
                { speaker: "Patrick", text: "OK. What are you doing here? I thought you'd moved to London." },
                { speaker: "Selina", text: "I was in London for a couple of years. But it didn't work out." },
                { speaker: "Patrick", text: "Oh, I'm sorry to hear that. Are you ... OK?" },
                { speaker: "Selina", text: "I'm fine! The dream job wasn't really a dream, you know? Um ... and London is great but it's so expensive. I mean, just the rent on a flat is ... uh … crazy expensive." },
                { speaker: "Patrick", text: "I see." },
                { speaker: "Selina", text: "So, I came back. I've been back now for almost five months. Living back home with Mum and Dad. Which is err ... interesting. Um ... but anyway, what about you?" },
                { speaker: "Patrick", text: "Me? Oh, nothing new. You know me – 'Patrick the predictable'. I never left here." },
                { speaker: "Selina", text: "Oh. And is that ...?" },
                { speaker: "Patrick", text: "Oh, I'm very happy. I'm married now. We've just celebrated our tenth anniversary." },
                { speaker: "Selina", text: "No way! You? Married? To …?" },
                { speaker: "Patrick", text: "I don't think you know her. Her name's Marigold. And we've got two kids. They're five and eight years old." },
                { speaker: "Selina", text: "Married and with two kids? Wow!" },
                { speaker: "Patrick", text: "Don't look so surprised!" },
                { speaker: "Selina", text: "No, no … I'm just amazed how time flies! I'm happy for you. I really am." },
                { speaker: "Patrick", text: "Thanks. You should really come round to the house one day." },
                { speaker: "Selina", text: "That would be great. Let's swap numbers and ..." }
            ],
            audio: "/public/media/LE_listening_B1_Meeting_an_old_friend.mp3",
        },
        {
            title: "Work–life balance",
            description: "Listen to a radio interview about maintaining a good work–life balance to practise and improve your listening skills.",
            image: "/public/images/work-life-balance.jpg",
            conversation: [
                { speaker: "Presenter", text: "Good morning, everyone. On today's show, we've got Chris Svensson with us, the author of No more nine to five, the new best-selling book about work–life balance in the current working world. Good morning, Chris. Thanks for coming." },
                { speaker: "Chris", text: "Thanks for having me, Anna." },
                { speaker: "Presenter", text: "So, Chris, tell us about your book and how the concept of a work–life balance has been changing?" },
                { speaker: "Chris", text: "Well, in the more traditional workplaces, people's working lives and their private lives are, or were, clearly divided. People often work from nine in the morning until five or six in the evening. People sometimes stay late in the office and work in the evenings. This is called working overtime." },
                { speaker: "Presenter", text: "OK, and what else?" },
                { speaker: "Chris", text: "Well, in these environments it isn't common for people to work at the weekend or while they're on holiday. They can clearly separate their working lives and their private lives. And the evenings, weekends and holidays are free to focus on non-work areas of life, such as hobbies, interests, sports, spending time with the family and friends, and so on. It's important and healthy not to spend all your time just working, right?" },
                { speaker: "Presenter", text: "Right! So what has changed? How are things different now?" },
                { speaker: "Chris", text: "Well, for a start, most people can now access their work emails from their mobile phones. So they are more likely to quickly reply to an important mail in the evening or at the weekend. The same goes for laptops. It's easier to access your work in the evenings from home or even from your hotel when you're on holiday." },
                { speaker: "Presenter", text: "That doesn't sound like much of a work–life balance. It sounds like all work." },
                { speaker: "Chris", text: "Exactly, but this new mobility brings a lot of advantages with it. More people are now able to work flexibly, so if they need to leave the office early one afternoon to be with their family, they can catch up on work that evening from home or somewhere else." },
                { speaker: "Presenter", text: "That sounds good. So, what you're saying is that although traditional divisions between work and life are fading, many employees now have more freedom to do their work from different locations and at different times." },
                { speaker: "Chris", text: "Yes, that's it." }
            ],
            audio: "/public/media/LE_listening_B1_Work_life_balance.mp3",
        }
    ],
    b2: [
        {
            title:
                "A business interview",
            description: "Listen to the business interview to practise and improve your listening skills.",
            image: "/public/images/business-interview.jpg",
            conversation: [
                { speaker: "Presenter", text: "Welcome to today's show. We're very happy to have Anna Oliveira as our guest today. Anna is the creator and founder of HomeworX – spelled with an 'x' we should note – an app which helps teenagers with their homework. Thanks for coming in, Anna." },
                { speaker: "Anna", text: "Thanks for having me." },
                { speaker: "Presenter", text: "So, tell us about your app. How does it work?" },
                { speaker: "Anna", text: "Well, teenagers and their parents have numerous challenges when it comes to homework these days. In many families both parents work and don't have much available time to help their kids with their homework. And even if they do have time to help, they may not be able to offer support with the content. What I mean is, they may not know, or at least remember, enough in any given subject to support." },
                { speaker: "Presenter", text: "You mean they might not be able to remember complex maths or might have never studied certain subjects, such as biology or economics, themselves?" },
                { speaker: "Anna", text: "Exactly. So they might want to support their children with their homework, but have neither the time nor the knowledge to do so." },
                { speaker: "Presenter", text: "I see. So the app helps solve this problem?" },
                { speaker: "Anna", text: "Yes, and more. The next issue is that tutors can be expensive, and there may be long waiting lists for specialist tutors in the town or region you live in. Our HomeworX app brings students and tutors together online. Students can search a database of pre-approved tutors and sign up for live online support. They don't need to be in the same town or city." },
                { speaker: "Presenter", text: "That sounds really great." },
                { speaker: "Anna", text: "It is. And this approach also enables us to offer the tutoring services at lower prices because there's no travelling time involved for the tutor to get to the student's home. And tutors who live in remote areas are happy to get access to more students, and be able to work from home, even at lower rates." },
                { speaker: "Presenter", text: "This all sounds great. So, how did you come up with the idea?" },
                { speaker: "Anna", text: "Well, as you might guess, I was one of those parents I described earlier. I really wanted to help my son with his homework, but I was either too busy with work or I didn't actually know anything about the subjects he was having difficulty with. Also, we live in an area where there aren't many tutors and the ones that are there are either very expensive or have long waiting lists." },
                { speaker: "Presenter", text: "Yes. I can understand your predicament. Well, it sounds like a very useful app that is clearly meeting a need. And its popularity obviously speaks for itself." },
                { speaker: "Anna", text: "Thank you." },
                { speaker: "Presenter", text: "So, do you have plans for the future?" },
                { speaker: "Anna", text: "We've just secured some funding and hope to expand the range of services we offer using the app." },
                { speaker: "Presenter", text: "We wish you the best of luck. Thanks again for coming in. That was Anna Oliveira, founder of the tutoring app HomeworX (with an 'x', don't forget!), which is available for both Apple and Android devices. Join us again next week for another business interview. Have a great week, everyone." }
            ],
            audio: "/public/media/LE_listening_B2_A_business_interview.mp3",
        },
        {
            title: "A design presentation",
            description: "Listen to the presentation about a new product design to practise and improve your listening skills.",
            image: "/public/images/presentation.jpg",
            conversation: [
                { speaker: "Presenter", text: "Hi, everyone. Thanks for coming to this short presentation on our new product design. As you know, we've already redeveloped our 'Adventure' shampoo to make it more modern and appealing. And we've renamed it 'Adventure Tech'. Our market research established the target market as men in the 18–40 age range who like to be outdoors and also like technical gadgets, such as smartwatches, drones and things like that. We needed to create a bottle which appeals to that market." },
                { speaker: "Presenter", text: "So, today, I'm happy to unveil our new bottle design. As you can see, it's designed to look like a black metal drinking flask, with some digital features printed on it." },
                { speaker: "Presenter", text: "I'd like to talk you through the following three points: the key features, sizing and our timeline for production." },
                { speaker: "Presenter", text: "Firstly, you'll notice it has an ergonomic design. That means it fits smoothly into your hand and can be easily opened and squeezed using one hand. And, it looks like a flask you might use when hiking outdoors. The imitation digital displays are designed to remind the user of other tech devices they may have, such as a smartwatch or smart displays in their home." },
                { speaker: "Presenter", text: "I'd now like to tell you about the sizes. It comes in two sizes: the regular size and a small travel size. The travel size is the same type of design – a flask, also with imitation digital displays on the bottle. We were thinking of starting with one and following with the travel-size in a few months, but we've worked hard and both are ready now." },
                { speaker: "Presenter", text: "Finally, I'm going to talk to you about our timeline for production. You've probably heard that we're launching in two months. In preparation for that, we're starting the marketing campaign next month. You can see the complete overview of all phases in this Gantt chart." },
                { speaker: "Presenter", text: "In summary, the bottle's been designed for men who like adventure and technology, and it comes in two sizes. The marketing campaign is starting next month and we're launching the product in two months." },
                { speaker: "Presenter", text: "OK. So, any questions? Feel free to also email me for further information in case we run out of time." }
            ],
            audio: "/public/media/LE_listening_B2_A_design_presentation.mp3",
        },
        {
            title: "A digital detox podcast",
            description: "Listen to the podcast about doing a digital detox to practise and improve your listening skills.",
            image: "/public/images/digital-detox.png",
            conversation: [
                { speaker: "Presenter", text: "So, we're back in the studio. Welcome back, everyone. My name's Rick Walker. From our laptops to our televisions, from the displays on our smartphones to those on our satnavs, we are in front of screens all the time. Have you ever wondered what it would be like to disconnect completely? To choose not to have access to the internet? If you have, you may be in need of a digital detox – a total switch-off from all things digital. The idea of people taking a digital detox is becoming more and more popular, especially amongst young people – and today we're joined by someone who's tried a number of digital detox activities and is here to give us some advice about it. Amanda Vince, welcome to the studio." },
                { speaker: "Amanda", text: "Thank you very much." },
                { speaker: "Presenter", text: "So, Amanda, you work for a fashion magazine in London, right? I guess your work means you need to be online a lot." },
                { speaker: "Amanda", text: "Oh, yes. Apart from the hundreds of emails I get every day, I'm always browsing fashion websites, as well as online videos. I also need to be very active online, especially on Twitter and Instagram – sharing what we're doing in the magazine, interacting with designers, photographers, influencers … it never stops, literally. Then of course there's my friends and family to keep in touch with online too, and for me, my work grew out of my passion, so friends and work colleagues aren't two totally separate groups of people and it all gets a bit messy online sometimes. I think I'm online for at least 12 hours a day." },
                { speaker: "Presenter", text: "So, how did you get the idea for a digital detox?" },
                { speaker: "Amanda", text: "I read a book about it, called Log Off: How to Stay Connected after Disconnecting. The author's name is Blake Snow. That book gave me some really good advice and made me think about trying to change some of my digital habits. I started with removing distraction." },
                { speaker: "Presenter", text: "What do you mean by that?" },
                { speaker: "Amanda", text: "That means turning off alerts, buzzes, alarms or notifications of any kind. I had notifications set up for everything, and it meant I was always being forced to look at my phone. Removing all of them except for important contacts helped me focus immediately. The book also made a really good point, that we should ask ourselves 'Why?' every time we take out our phone. I realised that most of the times I looked at my phone were because I was trying to avoid or ignore something else happening right in front of me. It was an automatic habit." },
                { speaker: "Presenter", text: "I have to confess, that happens to me too. But what else are you going to do when you're standing in line at the bank or waiting for your train?" },
                { speaker: "Amanda", text: "OK, yes, I'm the first to admit that it's great for helping time go by. But speaking personally, I found I wasn't just checking my phone to kill time when I was alone. I was also doing it with friends or family around." },
                { speaker: "Presenter", text: "Hmmm … right. Well, so far, this doesn't sound too drastic. Turning off notifications and becoming aware of when we use our devices. That sounds easy." },
                { speaker: "Amanda", text: "Yes, it's the first step. Once we begin to realise just how much of a grip our devices have on us, then we're ready to really take the next step. First, my partner and I did a weekend with absolutely no screens. She found it easier than I did. For me, it was a little bit scary at first but it turned out to be a pretty rewarding experience." },
                { speaker: "Presenter", text: "A whole weekend, huh? I don't know if I could ..." },
                { speaker: "Amanda", text: "I think everyone has to do this at their own pace. If a weekend feels too much, maybe just try for an evening. Then work your way up to more. I guarantee, once you've tried it, you'll want to try it again. We're going to try for a whole week in the summer." },
                { speaker: "Presenter", text: "OK, let's pause there then and see what our listeners have to say. You can call us here directly, or send us a message on any of our social media channels ... oops, should I be saying that? Anyway, more after the break." }
            ],
            audio: "/public/media/LE_listening_B2_Digital_detox_podcast.mp3",
        },
        {
            title: "A lecture about an experiment",
            description: "Listen to the lecture about a science experiment to practise and improve your listening skills.",
            image: "/public/images/a-lecture-about-an-experiment.png",
            conversation: [
                {
                    speaker: "Instructor",
                    text: "In today's lecture we're going to be talking about experiments, and I thought it might be interesting for you all to learn about the world's oldest continuously running laboratory experiment that is still going today. In fact, it holds the Guinness World Record for being the longest-running experiment. This experiment began in 1927 and has been going ever since."
                },
                {
                    speaker: "Instructor",
                    text: "It's called the 'pitch drop' experiment and it was created by Professor Thomas Parnell at the University of Queensland, Australia. Parnell was the university's first physics professor, and he wanted to show in this experiment that everyday materials, such as pitch, can have quite surprising properties."
                },
                {
                    speaker: "Instructor",
                    text: "You see, when pitch is at room temperature, it feels solid. You can easily break it with a hammer. However, it isn't in fact solid. At room temperature, pitch is many billions of times more viscous than water, but it's actually fluid."
                },
                {
                    speaker: "Instructor",
                    text: "In 1927, Professor Parnell took a sample of pitch. He heated it and poured it into a glass funnel. He allowed the pitch to cool and settle – for three years. He then turned the funnel upside down and cut the top off it."
                },
                {
                    speaker: "Instructor",
                    text: "Since then, the pitch has slowly dropped out of the funnel. How slowly? Well, the first drop took eight years to fall. It took another forty years for another five drops to fall. Today it's been almost 90 years since the experiment started. Only nine drops have fallen from the funnel. The last drop fell in April 2014 and the next one is expected to fall in the 2020s."
                },
                {
                    speaker: "Instructor",
                    text: "The experiment has a tragic story associated with it. Professor Parnell died without seeing a pitch drop. His replacement, Professor John Mainstone, became responsible for the pitch drop experiment from 1961. He held the job for 52 years, and missed seeing the drop fall three times – by a day in 1977, by just five minutes in 1988 and finally in 2000, when the webcam that was recording the experiment suffered a power outage for 20 minutes, during which time the pitch dropped."
                },
                {
                    speaker: "Instructor",
                    text: "The pitch drop experiment is something we can all participate in now. There's a live web stream that allows anyone to watch the glass funnel and wait for the fateful moment. A similar experiment to the Queensland pitch drop was set up in Dublin, and the video of the moment the pitch actually dropped went viral on the internet. It's interesting to see how a very slow event can spread news so quickly."
                }
            ],
            audio: "/public/media/LE_listening_B2_A_lecture_about_an_experiment.mp3",
        },
        {
            title: "A talk about motivation",
            description: "Listen to the talk about motivation to practise and improve your listening skills.",
            image: "/public/images/motivational-speech.jfif",
            conversation: [
                {
                    speaker: "Instructor",
                    text: "So, we think we know how to motivate people, right? Offer them a reward. Do this and you'll get this. Do this faster, earn more money. Do this better than everyone else, here's a promotion. We offer incentives when we want people to do things. We do it at work, at school, even at home with our kids. Tidy your room and you can watch TV."
                },
                {
                    speaker: "Instructor",
                    text: "But when social psychologists test whether incentives work, they get surprising results. Sam Glucksberg, from Princeton University, America, set people a problem to solve and told them he was going to time them to see how long they took. Then he put them in two groups. He offered one group a reward for finishing fast. Five dollars for anyone finishing in the top 25 per cent and 20 dollars for the person who finished the fastest of all. To the other group he offered no incentive, but he told them he was going to use their times to calculate an average time."
                },
                {
                    speaker: "Instructor",
                    text: "The first group, the ones with the reward, solved the problem faster, you'd think, right? Well, no, they actually took three and a half minutes longer than the group who just thought they were being timed. Incentive didn't work. In fact, it made them slower. This experiment has been repeated, with the same results, many times. But in business we still offer bonuses, promotions and rewards to staff."
                },
                {
                    speaker: "Instructor",
                    text: "That's fine if we want them to do something simple, like chop wood. We'll pay you more if you chop the wood faster. An incentive works then. But if we want someone to do something complex, something creative, something where they have to think, rewards don't work. They might even have the opposite result, and make people perform worse. Another study, by Dan Ariely, showed that the bigger the reward, the worse the subjects performed on a complex task. The reward made them focus so hard on the result that they couldn't think creatively any more."
                },
                {
                    speaker: "Instructor",
                    text: "And this all matters because more and more simple jobs will become automated. We'll be left with creative, problem-solving jobs that computers will never do. And we need to find a way to motivate people to do those jobs when we've proved the traditional incentives don't work."
                },
                {
                    speaker: "Instructor",
                    text: "So what does work? Giving your workers freedom; freedom to work on the things they want to work on, freedom to choose when, where and how they work. Want to work from home three days a week, get up late and work into the night instead? Fine. Just do the job well. And evidence shows people who choose the way they work get results. Companies that give employees time during the week to work on things that interest them and are not part of their regular job achieve amazing things. Some of the big tech companies are good examples of this, with ping-pong tables and areas to relax in …"
                }
            ],
            audio: "/public/media/LE_listening_B2_A_talk_about_motivation.mp3",
        },
        {
            title: "Business news",
            description: "Listen to the business news to practise and improve your listening skills.",
            image: "/public/images/business-news.jpg",
            conversation: [
                {
                    speaker: "News Anchor",
                    text: "The first item in the news today is the recent elections that took place across the country. This was a crucial vote, which may see a dramatic change in how the country develops over the coming years. Overall, a 54.5 per cent voter turnout was registered. This represents an increase of 11 per cent over the previous election and six per cent above the average for the past 50 years. There has also been a slight change in demographics, with an increase in youth turnout in the 18- to 24- and 24- to 29-year-old brackets. Despite this increase, young people are still less likely to vote than older people; 84 per cent of voters in the 70 plus age group came to the polling stations."
                },
                {
                    speaker: "News Anchor",
                    text: "Moving on, the global digital powerhouse ONK today posted quarterly results which were above forecast. Back in March, Tim Bolling, CEO, issued a profit warning over fears that there would be losses following the recall of their leading product, the 40d device. In fact, the company posted quarterly revenue of US$14.8 billion which represents an increase of 11 per cent from the same quarter a year ago. They also announced that they had sold 21 million 40d devices over the quarter. The company has provided the information that with this level of revenue, there will be a gross margin of 34 to 35 per cent, ultimately leading to a US$1.20 per share cash dividend awarded to shareholders."
                },
                {
                    speaker: "News Anchor",
                    text: "And in our final news item we ask, will we soon be saying goodbye to coins and notes forever? The nationwide trend of using cashless payment options is increasing. There are a number of reasons for this development. A key reason for this is a growing interest in reducing the number of items people need to leave their homes with. As almost everyone carries a smartphone with them, and many people also have smartwatches, the ability to pay for things using one of these two technologies is particularly appealing. More and more retailers are accepting cashless payments and in some cases they've stopped accepting cash altogether."
                }
            ],
            audio: "/public/media/LE_listening_B2_Business_news.mp3",
        },
        {
            title: "Creating a study group",
            description: "Listen to the conversation about creating a study group to practise and improve your listening skills.",
            image: "/public/images/Study-Group-web.jpeg",
            conversation: [
                {
                    speaker: "Ali",
                    text: "Hey, you guys, I've been looking for you. I've got an idea – a study group. What do you think? Are you interested?"
                },
                {
                    speaker: "Dina",
                    text: "Yes! I need a study group, in a big way."
                },
                {
                    speaker: "Bea",
                    text: "Me too."
                },
                {
                    speaker: "Ali",
                    text: "Do you think we have enough people here for a study group? I mean, there are only four of us …"
                },
                {
                    speaker: "Bea",
                    text: "Sorry. Three of us. Chris can't do study group. Right, Chris?"
                },
                {
                    speaker: "Chris",
                    text: "Yeah, there's no way I can do a study group. I have an assignment and then I'm too busy. But I'll stay for this first meeting."
                },
                {
                    speaker: "Ali",
                    text: "Should we try and get another group together with us for this?"
                },
                {
                    speaker: "Bea",
                    text: "No, I don't think so. I think three is fine. Ideal size, really."
                },
                {
                    speaker: "Dina",
                    text: "Me too."
                },
                {
                    speaker: "Ali",
                    text: "OK, three people then. Four people for the first meeting. What next?"
                },
                {
                    speaker: "Bea",
                    text: "What about a meeting place? We can't meet here in the library …"
                },
                {
                    speaker: "Ali",
                    text: "It's not too bad, especially if those other people would go away."
                },
                {
                    speaker: "Bea",
                    text: "But we can't exactly ask them to leave, and people might get annoyed with us talking."
                },
                {
                    speaker: "Dina",
                    text: "Can I say something here?"
                },
                {
                    speaker: "Ali",
                    text: "Sure, go ahead."
                },
                {
                    speaker: "Dina",
                    text: "There's a study hall next to the cafeteria. It's almost always empty. Could we meet there?"
                },
                {
                    speaker: "Ali",
                    text: "A study hall?! Who knew? Well, it sounds good to me."
                },
                {
                    speaker: "Bea",
                    text: "Yeah. I've never been there but …"
                },
                {
                    speaker: "Ali",
                    text: "So, we ought to decide how long for and how often."
                },
                {
                    speaker: "Dina",
                    text: "I read somewhere that you should make the meeting at the same time each week. Like a seminar. That way we'd take it more seriously."
                },
                {
                    speaker: "Bea",
                    text: "We may as well make it for this time since we're all here. Is this time OK?"
                },
                {
                    speaker: "Dina",
                    text: "Works for me."
                },
                {
                    speaker: "Ali",
                    text: "Me too."
                },
                {
                    speaker: "Chris",
                    text: "Hang on just a minute. I know I'm not going to be in this group, but aren't we supposed to have a seminar at this time every other week?"
                },
                {
                    speaker: "Dina",
                    text: "Umm, no."
                },
                {
                    speaker: "Bea",
                    text: "Thursday, no?"
                },
                {
                    speaker: "Ali",
                    text: "No, that's on Thursday."
                },
                {
                    speaker: "Chris",
                    text: "Sorry. Forget I said anything."
                },
                {
                    speaker: "Ali",
                    text: "Don't worry about it."
                },
                {
                    speaker: "Bea",
                    text: "So everyone agrees that this time is fine? Every week?"
                },
                {
                    speaker: "Ali",
                    text: "How long should we make it?"
                },
                {
                    speaker: "Bea",
                    text: "An hour?"
                },
                {
                    speaker: "Dina",
                    text: "Could we find a way of making it two hours?"
                },
                {
                    speaker: "Ali",
                    text: "Two hours seems a bit like … too much. To start with then?"
                },
                {
                    speaker: "Bea",
                    text: "Ninety minutes? Compromise?"
                },
                {
                    speaker: "Ali",
                    text: "Is that OK with you, Dina?"
                },
                {
                    speaker: "Dina",
                    text: "Fine by me."
                },
                {
                    speaker: "Ali",
                    text: "OK, so I guess all we have left to decide is exactly what we'll do when we meet. The final exam is a way off. I guess we could review our notes, or practise learning things by heart."
                },
                {
                    speaker: "Dina",
                    text: "I have a list of dos and don'ts actually that I got online. I could be a moderator, and we could use the ideas as a starting point …"
                }
            ],
            audio: "/public/media/LE_listening_B2_Creating_a_study_group.mp3",
        },
        {
            title: "Film reviews",
            description: "Listen to the film reviews to practise and improve your listening skills.",
            image: "/public/images/film-review.jpg",
            conversation: [
                {
                    speaker: "Reviewer",
                    text: "Obviously, this is the sequel to Fun in the City, which is a film I didn't like so it's fair to say my expectations were low. So, you could say I wasn't disappointed, as it met my expectations. It was awful! It was so awful, I'd rather not spend any more time on it by talking about it. But, that wouldn't be a film review and I think I owe you all a review to save you wasting your money going to see it."
                },
                {
                    speaker: "Reviewer",
                    text: "So, it starts off with this big wedding scene. And, I won't go into why, but the whole scene is just there so they can make this one joke. It's not even a funny joke ... it's just, ah, it's just terrible. It's got nothing to do with the rest of the film. Anyway, it starts there."
                },
                {
                    speaker: "Reviewer",
                    text: "Then, instead of the characters and the plot staying in New York where the original film was set, one of them wins a ticket to India and decides to take all her friends. It's what directors do when they've run out of ideas … let's take our characters on tour!"
                },
                {
                    speaker: "Reviewer",
                    text: "Anyway, they gossip, cry and shop, and they repeat this until the end. No real people would ever act like this. I didn't have any sympathy for their problems or even care what happened to them. Don't go and see it, you'll only encourage them to make another sequel. The world doesn't need three of these films. Please save your money and go and see the other big film this week: Twilight Mirror."
                },
                {
                    speaker: "Reviewer",
                    text: "So, if you're a fan of the book it's based on, you're probably as excited as I was about this. For everyone else, this is a film fans have been waiting ten years to see. I have to confess, I was a bit nervous. I'd seen the posters and they didn't look right. I didn't love them at all. And I wasn't sure about the actors they cast either. So I went in not sure what to expect. But … I loved it."
                },
                {
                    speaker: "Reviewer",
                    text: "One thing I really liked about it was the pace. They went backwards and forwards between the real world and the computer world and it worked really well. The special effects brought the computer world to life and I totally believed in it."
                },
                {
                    speaker: "Reviewer",
                    text: "But, more than that, I felt emotionally connected to the story and the characters. The whole film worked on so many levels. It reminded me of going to the cinema as a child – how much fun that was. I can't recommend it enough."
                }
            ],
            audio: "/public/media/LE_listening_B2_Film_reviews.mp3",
        },
        {
            title: "Getting advice",
            description: "Listen to someone getting advice from a friend to practise and improve your listening skills.",
            image: "/public/images/advice-giving.jpg",
            conversation: [
                {
                    speaker: "Clara",
                    text: "Hi, how are you? I haven't seen you in class for a while."
                },
                {
                    speaker: "Ben",
                    text: "Good, thanks. You?"
                },
                {
                    speaker: "Clara",
                    text: "Great, as long as I don't think too hard about all the essays I have to write this term!"
                },
                {
                    speaker: "Ben",
                    text: "Yeah …"
                },
                {
                    speaker: "Clara",
                    text: "Hey, are you OK?"
                },
                {
                    speaker: "Ben",
                    text: "I have to admit, I'm struggling a bit. Maybe even a lot. I've not been sleeping well at all and then I can't concentrate. And all these things are just going around and around in my head."
                },
                {
                    speaker: "Clara",
                    text: "Mmm … that doesn't sound good. So, you're sleeping badly and you can't concentrate. Is that all it is, do you think?"
                },
                {
                    speaker: "Ben",
                    text: "Well, if I'm honest, it's more than that. I'm starting to dread going outside. I find myself worrying about stupid things like what if I forget the way home. Or, what if I go to class thinking it's Monday but actually it's Friday and I'm in the wrong place at the wrong time. It sounds even more stupid when I say it out loud. It took me two hours to leave the house today."
                },
                {
                    speaker: "Clara",
                    text: "It doesn't sound stupid at all. It actually sounds a lot like me last year."
                },
                {
                    speaker: "Ben",
                    text: "Really? But you're so together!"
                },
                {
                    speaker: "Clara",
                    text: "I've learned to be, but even I still have bad days. I used to have panic attacks and everything. When you were trying to leave the house today, how did you feel?"
                },
                {
                    speaker: "Ben",
                    text: "Like I couldn't breathe. And my heart was going way too fast."
                },
                {
                    speaker: "Clara",
                    text: "Hmm … that sounds like a panic attack to me."
                },
                {
                    speaker: "Ben",
                    text: "I thought I was going to die."
                },
                {
                    speaker: "Clara",
                    text: "You'd be surprised how common they are. Loads of people have them, they just don't talk about it."
                },
                {
                    speaker: "Ben",
                    text: "How did you get over them?"
                },
                {
                    speaker: "Clara",
                    text: "I actually talked to a doctor about it, and you should too. But I learned some practical things as well. Though they're easier said than done, and they're going to sound weird, so hear me out, OK?"
                },
                {
                    speaker: "Ben",
                    text: "OK …"
                },
                {
                    speaker: "Clara",
                    text: "So, one thing I did was to try to reduce the power of the anxiety and the panic attacks when they came. So – and this may sound strange – at a time when you're feeling safe and OK, you literally do things that make your heart start racing faster and your breathing speed up. Like spinning around on a chair until you're dizzy or hyperventilating so you're short of breath."
                },
                {
                    speaker: "Ben",
                    text: "That sounds awful!"
                },
                {
                    speaker: "Clara",
                    text: "It is, but it means you get used to the symptoms, so they feel less scary."
                },
                {
                    speaker: "Ben",
                    text: "Right."
                },
                {
                    speaker: "Clara",
                    text: "Then you have to deliberately do the things that usually make you feel panic. So, if it's going to class on Monday and being scared you've got the wrong day, on Monday you go to class. If you let the anxiety control you by making you stay at home, it just makes it worse the next time you really do have to go out."
                },
                {
                    speaker: "Ben",
                    text: "And what did you do if a panic attack came anyway?"
                },
                {
                    speaker: "Clara",
                    text: "I had a distraction plan. So, I walked everywhere instead of taking the bus because the exercise helped, but also I did things like count trees or red cars or something. Whatever it was didn't matter, as long as I had something else to focus on."
                },
                {
                    speaker: "Ben",
                    text: "I can't tell you how much I appreciate this. I thought …"
                }
            ],
            audio: "/public/media/LE_listening_B2_Getting_advice.mp3",
        },
        {
            title: "Joining a gym",
            description: "Listen to the conversation about joining a gym to practise and improve your listening skills.",
            image: "/public/images/joining-gym.jpg",
            conversation: [
                {
                    speaker: "Receptionist",
                    text: "Sure, of course. What would you like to know?"
                },
                {
                    speaker: "Customer",
                    text: "I saw on the sign outside that you have the best budget membership in the city. Is that right?"
                },
                {
                    speaker: "Receptionist",
                    text: "You've got that right, yes. If you find a better rate, then we'll match it. Also, we don't have any sign-up fees or cancellation fees."
                },
                {
                    speaker: "Customer",
                    text: "Sorry, what was that last bit?"
                },
                {
                    speaker: "Receptionist",
                    text: "Cancellation fees. Some gyms charge you money if you leave before a minimum number of months or something like that. We don't do that."
                },
                {
                    speaker: "Customer",
                    text: "That's useful to know. Ummm, what times do you have?"
                },
                {
                    speaker: "Receptionist",
                    text: "We open at 5 a.m. and close at midnight."
                },
                {
                    speaker: "Customer",
                    text: "Not 24 hours then, I see."
                },
                {
                    speaker: "Receptionist",
                    text: "No. Almost, though! We tried doing the 24-hour thing, but there really weren't a lot of people who wanted to do exercise at 2 in the morning."
                },
                {
                    speaker: "Customer",
                    text: "Makes sense. Another question: do you have trainers? Like, will you do a personalised evaluation of me?"
                },
                {
                    speaker: "Receptionist",
                    text: "Sure we do. As we say on our brochure, we can show you what to do, how to do it and why you're doing it. Have you worked with a personal trainer before?"
                },
                {
                    speaker: "Customer",
                    text: "Err, no. No, I haven't. No."
                },
                {
                    speaker: "Receptionist",
                    text: "So, it's very easy. For your first visits we'll assign you one of our expert personal trainers. He or she will design an exercise plan that's just right for you and show you exactly what to do. We even include nutrition advice in the plan."
                },
                {
                    speaker: "Customer",
                    text: "Let me get this straight. All of this is included in the price?"
                },
                {
                    speaker: "Receptionist",
                    text: "Yes, it is. If you want to continue with your trainer after the first few classes, we can talk about that. It does cost extra though. OK?"
                },
                {
                    speaker: "Customer",
                    text: "Yeah. Sounds ... great."
                },
                {
                    speaker: "Receptionist",
                    text: "Do you have any other questions?"
                },
                {
                    speaker: "Customer",
                    text: "Hmmm, yeah. Um, OK. Why should I choose here instead of any of the other gyms in the city?"
                },
                {
                    speaker: "Receptionist",
                    text: "What, you mean apart from our competitive rates and personalised attention?"
                },
                {
                    speaker: "Customer",
                    text: "Yeah, I guess."
                },
                {
                    speaker: "Receptionist",
                    text: "Listen, here's a free day pass. Why don't you drop by and see for yourself? That way you can talk to other members, see the facilities and our staff."
                },
                {
                    speaker: "Customer",
                    text: "OK, I'll do that. Thanks very much!"
                }
            ],
            audio: "/public/media/LE_listening_B2_Joining_a_gym.mp3",
        },
        {
            title: "Office party planning",
            description: "Listen to the conversation with an event planner to practise and improve your listening skills.",
            image: "/public/images/business-planning.png",
            conversation: [
                {
                    speaker: "Ayako",
                    text: "Hello, sales department. This is Ayako speaking. How can I help you?"
                },
                {
                    speaker: "Sam",
                    text: "Hi, Ayako, this is Sam from Events-4-U. I'm calling about the piano you want at your Christmas party next month."
                },
                {
                    speaker: "Ayako",
                    text: "Oh, good. It would be a great surprise to have one there for our boss for the night. He can play and it would be a great addition for the party. Have you been able to source one?"
                },
                {
                    speaker: "Sam",
                    text: "Well, yes, I have, but …"
                },
                {
                    speaker: "Ayako",
                    text: "But what?"
                },
                {
                    speaker: "Sam",
                    text: "Well, we're going to either have an issue with the logistics or the budget, or possibly both."
                },
                {
                    speaker: "Ayako",
                    text: "Oh dear."
                },
                {
                    speaker: "Sam",
                    text: "Well, we've found a baby grand piano, as you requested, and it's available for the date you want."
                },
                {
                    speaker: "Ayako",
                    text: "OK, great. So what's the issue? Is it too expensive?"
                },
                {
                    speaker: "Sam",
                    text: "No, it's within the budget you gave me, so everything there is OK. But it's too wide for the entrance doorway into the building."
                },
                {
                    speaker: "Ayako",
                    text: "Oh, I see. So what are our options? Could we dismantle it outside and reassemble it inside?"
                },
                {
                    speaker: "Sam",
                    text: "Er, no. Unfortunately, you can't really do that with pianos. But don't worry, I'm sure we can find some inventive solution."
                },
                {
                    speaker: "Ayako",
                    text: "Do you have any ideas?"
                },
                {
                    speaker: "Sam",
                    text: "Well, we could hoist it up to the first-floor balcony. The door there would be large enough to fit it through."
                },
                {
                    speaker: "Ayako",
                    text: "Great. That sounds like a good plan."
                },
                {
                    speaker: "Sam",
                    text: "That would work, though it would increase the cost considerably as we'd need a crane, an extension on the insurance policy and probably two to three additional people to manage getting it successfully into the building."
                },
                {
                    speaker: "Ayako",
                    text: "Oh, I see. Well, we can definitely stretch the budget by about ten per cent, but we shouldn't go over that. If we exceed the budget by more than ten per cent, then other areas of the party budget will have to be cut. And we don't really want that."
                },
                {
                    speaker: "Sam",
                    text: "OK, so this idea won't work then. Sorry if I wasn't being clear. The considerable budget increase I was referring to would add a further fifty per cent. You know, cranes are expensive."
                },
                {
                    speaker: "Ayako",
                    text: "Oh … um … OK. So what other options do we have?"
                },
                {
                    speaker: "Sam",
                    text: "Well, how fixed are you on the piano being a baby grand? Would an upright piano be an option?"
                },
                {
                    speaker: "Ayako",
                    text: "Hmm. I don't know."
                },
                {
                    speaker: "Sam",
                    text: "It would fit through the door on the ground floor and cause fewer problems. I've also got the option on a really nice white vintage upright piano, with black design work."
                },
                {
                    speaker: "Ayako",
                    text: "OK. That sounds like it might work. Could you send me over some photos of it?"
                },
                {
                    speaker: "Sam",
                    text: "I'll do it now, together with the rental and delivery information and costs."
                },
                {
                    speaker: "Ayako",
                    text: "Great. Thanks, Sam. Let me think about it and I'll call you back later today."
                },
                {
                    speaker: "Sam",
                    text: "Sure, no problem. I'll wait for your call."
                }
            ],
            audio: "/public/media/LE_listening_B2_Office_party_planning.mp3",
        },
        {
            title: "Talking about rumours",
            description: "Listen to two people talking about a colleague to practise and improve your listening skills.",
            image: "/public/images/Rumours_1934f13ef47_original-ratio.jpg",
            conversation: [
                {
                    speaker: "Will",
                    text: "Kiera, have you heard John isn't coming back and they might even fire him?"
                },
                {
                    speaker: "Kiera",
                    text: "No! I knew he was away but I thought it was for personal reasons?"
                },
                {
                    speaker: "Will",
                    text: "I'm pretty sure that's not the full story. Have you ever worked with him?"
                },
                {
                    speaker: "Kiera",
                    text: "A long time ago, but … well, I've heard stories about him for years."
                },
                {
                    speaker: "Will",
                    text: "I've never worked with him directly but I know people that have and they say he was always shouting and screaming, threatening to fire people. And Susanne told me he took credit for one of her ideas. She had this idea for a project and she brought it up at the monthly creative workshop and he liked it – everybody did. But she saw the notes from the meeting and there was no mention of her name anywhere. John had agreed with her and repeated some of the things she said and the notes made it look like they were his ideas in the first place. He made her do all the work planning it, then when the project actually got started – it was that cars one – Susanne was moved to something else."
                },
                {
                    speaker: "Kiera",
                    text: "It won an award, didn't it?"
                },
                {
                    speaker: "Will",
                    text: "Yeah, but Susanne didn't get to share it – there was zero recognition of her contribution. She was furious but she couldn't do anything about it. Not if she wanted to keep her job."
                },
                {
                    speaker: "Kiera",
                    text: "Yeah, it's almost impossible to report people who are as high up as John is, or was."
                },
                {
                    speaker: "Will",
                    text: "How did you find working with him, then?"
                },
                {
                    speaker: "Kiera",
                    text: "Well, you know what you said about him shouting at people? I've been in meetings with him and we all learned to keep our mouths shut. It was horrible. People were genuinely afraid of him."
                },
                {
                    speaker: "Will",
                    text: "Did you ever see him stealing people's ideas?"
                },
                {
                    speaker: "Kiera",
                    text: "It was never that obvious. He was a genius. He had incredible vision but, you know, there was a whole team of people working with him. Not every single idea came from him and after a while it's not easy to say, 'Oh, this idea was mine and this idea was yours.' For me, the bigger problem was that you could be in his good books and then suddenly, with no explanation, you were out. And if you were out, life got very difficult."
                },
                {
                    speaker: "Will",
                    text: "I heard women in particular had a hard time working with him."
                },
                {
                    speaker: "Kiera",
                    text: "Yeah, well, like I said, you had to stay in his good books. So, if there was a comment that made you feel uncomfortable, you didn't say anything."
                },
                {
                    speaker: "Will",
                    text: "Did that happen to you?"
                },
                {
                    speaker: "Kiera",
                    text: "Not to me, no, but we all knew … and no one said anything. And I was lucky I didn't have that much contact with him myself."
                },
                {
                    speaker: "Will",
                    text: "They're doing a full investigation so I suppose a lot of these stories are going to come to light."
                },
                {
                    speaker: "Kiera",
                    text: "I hope so. I really hope he's not coming back."
                }
            ],
            audio: "/public/media/LE_listening_B2_Talking_about_rumours.mp3",
        }
    ],
    c1: [
        {
            title: "A job interview",
            description: "Listen to the job interview to practise and improve your listening skills.",
            image: "/public/images/job-interview.jpg",
            conversation: [
                {
                    speaker: "Interviewer",
                    text: "Hello, Maria. Thanks for coming in for the interview."
                },
                {
                    speaker: "Maria",
                    text: "It's my pleasure. Thanks for inviting me."
                },
                {
                    speaker: "Interviewer",
                    text: "Well, as you know, the company has been expanding and we have an opening in our HR department. We're creating a new role for someone to lead our training and development within the company."
                },
                {
                    speaker: "Maria",
                    text: "Yes, I very much think that my skills and experience are a good fit for what you're looking for."
                },
                {
                    speaker: "Interviewer",
                    text: "That sounds great. So, your CV looks strong, though it would be good if you could give us an overview, in your own words, of what you've been doing over the past four years or so."
                },
                {
                    speaker: "Maria",
                    text: "Well, in my first job, four years ago, I was working for a small HR services provider which offered HR services, including L&D, to corporate clients."
                },
                {
                    speaker: "Interviewer",
                    text: "OK, so it was only B2B?"
                },
                {
                    speaker: "Maria",
                    text: "Yes, we only offered services to other companies, not B2C."
                },
                {
                    speaker: "Interviewer",
                    text: "Right, and it says here you then left that company about three years ago."
                },
                {
                    speaker: "Maria",
                    text: "Yes, that's right. I was looking for a little more stability and also to be part of a larger organisation. So I joined a company with around one hundred staff and a small HR team. As there are only a few of us, we each deal with a range of HR topics. In addition to payroll, one of the areas I was responsible for was learning and development."
                },
                {
                    speaker: "Interviewer",
                    text: "I see. And, so why do you want to change jobs now?"
                },
                {
                    speaker: "Maria",
                    text: "Well, I very much like the L&D side of my role and I've always had particularly good feedback for my work in this area. I believe I excel in that field. So, I'm looking to specialise, and as your company has around 2,000 people, right …?"
                },
                {
                    speaker: "Interviewer",
                    text: "Yes, that's right."
                },
                {
                    speaker: "Maria",
                    text: "Well, an organisation of this size would give me the scope to specialise in L&D. I'm also a big follower of your brand and feel fully aligned with your image and values."
                },
                {
                    speaker: "Interviewer",
                    text: "Well, that all sounds good. And I can see you have an L&D qualification."
                },
                {
                    speaker: "Maria",
                    text: "Yes, I got a diploma two years ago. I am also currently working on a further diploma in psychology, with a specific focus on learning and performance management."
                },
                {
                    speaker: "Interviewer",
                    text: "Very good. Well, it looks like you have the qualifications and experience we're looking for. What do you think will be the main challenges of coming to a much larger company?"
                },
                {
                    speaker: "Maria",
                    text: "I can see that it might be perceived as a weakness to not have experience in an organisation of this size, though I see that it could also be a benefit. I won't be bringing too many preconceived and possibly inflexible ideas with me to the role."
                },
                {
                    speaker: "Interviewer",
                    text: "Yes, that would be a good thing."
                },
                {
                    speaker: "Maria",
                    text: "Also, I'm used to taking a very personal approach to employee development. I realise that such an approach with 2,000 staff members will have to happen in a different way, but I bring many ideas with me that can be replicated on a larger scale."
                },
                {
                    speaker: "Interviewer",
                    text: "I see what you mean. Right, so, do you have any questions for me?"
                },
                {
                    speaker: "Maria",
                    text: "Um, I think we've covered many of the areas I had wanted to address. I have two quick questions though."
                },
                {
                    speaker: "Interviewer",
                    text: "Go on."
                },
                {
                    speaker: "Maria",
                    text: "Who would I mostly work with on a daily basis?"
                },
                {
                    speaker: "Interviewer",
                    text: "Well, there's the HR manager who you would report to. And then the HR team, which currently has six people in it. There's usually an intern or two who you can get some support from also."
                },
                {
                    speaker: "Maria",
                    text: "OK. Thanks. That's all really clear. And my other question is how performance in this role will be measured. What does success look like?"
                },
                {
                    speaker: "Interviewer",
                    text: "That's a good question. As you know, we have a performance management system in place, and from that we have identified some learning and development needs within the organisation. But we haven't devised a strategy. Your role would be to devise and then successfully implement this strategy."
                },
                {
                    speaker: "Maria",
                    text: "Thank you. That sounds interesting."
                },
                {
                    speaker: "Interviewer",
                    text: "Great. So, thanks again for coming in today. We'll be discussing all candidates next week and then I'll get back to you by the end of next week to let you know the outcome."
                },
                {
                    speaker: "Maria",
                    text: "Thank you for your time. I'd welcome the opportunity to continue discussing this role with you."
                }
            ],
            audio: "/public/media/LE_listening_C1_A_job_interview.mp3",
        },
        {
            title: "A project management meeting",
            description: "Listen to a project management meeting to practise and improve your listening skills.",
            image: "/public/images/team-management.jfif",
            conversation: [
                {
                    speaker: "John",
                    text: "Thanks, everyone, for coming to this project meeting. I know we're all working cross-functionally on this project, but so far the key stakeholders are really pleased with how it's going. This project will really benefit our overall value proposition and the company as a whole."
                },
                {
                    speaker: "Akiko",
                    text: "Thanks, John. It's an important project. It's good to be collaborating on this together."
                },
                {
                    speaker: "Matteo",
                    text: "Yes, it's important, but we're all so busy with our regular jobs. It'll be difficult to fit things in."
                },
                {
                    speaker: "John",
                    text: "It's OK, Matteo. We'll work it out. I know that you all have a lot on at the moment, combining this project with your regular jobs."
                },
                {
                    speaker: "Barbara",
                    text: "So, what do we need to do, and by when?"
                },
                {
                    speaker: "John",
                    text: "Good questions, Barbara. We have a number of key deliverables to discuss so it's essential we're all in agreement about roles and responsibilities and also the timelines we're working to."
                },
                {
                    speaker: "Akiko",
                    text: "Great."
                },
                {
                    speaker: "Matteo",
                    text: "Yes, it's good to get this clear."
                },
                {
                    speaker: "John",
                    text: "So, the first thing we need to do is design the customer survey questionnaire. In my experience, this is best done through an online survey tool."
                },
                {
                    speaker: "Akiko",
                    text: "That sounds like a great idea. I'm glad you have experience with this."
                },
                {
                    speaker: "John",
                    text: "Yeah, we've done something similar on previous projects."
                },
                {
                    speaker: "Matteo",
                    text: "So will you do that, John?"
                },
                {
                    speaker: "John",
                    text: "I'd love to but I'm already tied up managing this project, and my line manager, Kate, has agreed that I should focus on the timelines, reporting and financial management. I'd like Akiko to lead on the questionnaire. You learned about this on your marketing and PR course, didn't you?"
                },
                {
                    speaker: "Akiko",
                    text: "Yeah, happy to take it on."
                },
                {
                    speaker: "John",
                    text: "Thanks, Akiko. Next thing is we need the new designs finalised. Matteo, you said you could do this in a couple of weeks, right?"
                },
                {
                    speaker: "Matteo",
                    text: "Yeah, I know, but that was last month, and then nothing happened. I'm overloaded at the moment and my line manager won't be happy if I don't hit my targets. Sorry, but this project has to take lower priority."
                },
                {
                    speaker: "John",
                    text: "Hmm. I see. I can understand the challenge you're facing. I've been in that situation before. So, what can we do to help you hit those targets and free up some time?"
                },
                {
                    speaker: "Matteo",
                    text: "That's a good question. If I could get a slight reduction in my targets, I could use the extra time that would create to finish the designs for this project."
                },
                {
                    speaker: "John",
                    text: "OK. We might not be able to get your targets reduced, but I'll see what we can do."
                },
                {
                    speaker: "Barbara",
                    text: "How about if I support Matteo there? I know his job well and I have some capacity at the moment. I can help him meet his targets so he can free up some time to finish the designs for this project."
                },
                {
                    speaker: "Matteo",
                    text: "Could you, Barbara?"
                },
                {
                    speaker: "John",
                    text: "Hmm. I'm not sure if it's fair to ask Barbara to be supporting Matteo in his regular job so he can work on this project."
                },
                {
                    speaker: "Barbara",
                    text: "It's up to you, but I'm happy to support Matteo with his regular work, just for a couple of weeks so he can create the designs. He's the only one with the expertise."
                },
                {
                    speaker: "John",
                    text: "Yeah, you're right. OK, thanks a lot, Barbara. I appreciate it. Matteo, would that work for you?"
                },
                {
                    speaker: "Matteo",
                    text: "Yes, that would work. Thanks. OK, you've made it easy for me to say yes."
                },
                {
                    speaker: "John",
                    text: "OK, then that's settled. Thanks, both. I really appreciate your help in this. So, can you get them done by the end of the month?"
                },
                {
                    speaker: "Matteo",
                    text: "Yes, that should be no problem."
                }
            ],
            audio: "/public/media/LE_listening_C1_A_project_management_meeting.mp3",
        },
        {
            title: "An interview about two books",
            description: "Listen to an interview about two books to practise and improve your listening skills.",
            image: "/public/images/RS8095_GettyImages-937431092-hig.avif",
            conversation: [
                {
                    speaker: "Presenter",
                    text: "Today we're looking at the darker side of literature with two books about not-so-happy families. And we've got writer Helen Slade and book critic Anna Kimura to talk us through them. First up, we're looking at Her Mother's Daughter by Alice Fitzgerald, a novel written from two points of view, one of a child and the other of her very troubled mother. Helen, I have to be honest. I found this one hard to read. It's very well written but, well, how did you find it?"
                },
                {
                    speaker: "Helen",
                    text: "I know what you mean, but I literally couldn't put it down and stayed up till three in the morning to finish it. There's something about immersing yourself in a family this flawed, this damaged, that's compelling. You'd never want to be in that family yourself, but that's what reading is about, isn't it? Wearing someone else's shoes for a while without ever having to live their reality."
                },
                {
                    speaker: "Presenter",
                    text: "You surprise me! The families in your own books are a million miles away from this one."
                },
                {
                    speaker: "Helen",
                    text: "Yeah, my readers can always be sure they're going to get a happy ending. Which you definitely ... I don't want to give too much away here, but you definitely don't feel like a happy ending is coming for these characters."
                },
                {
                    speaker: "Presenter",
                    text: "OK, so don't mention the ending, but can you just describe for listeners what the book is about?"
                },
                {
                    speaker: "Helen",
                    text: "So, it's about a family with secrets. The mother has hidden her troubled childhood from her husband and her two children but, of course, it's shaped her entire personality and how she behaves as a mother and as a wife. Which is especially obvious when we're reading the sections told in the child's voice, even though the little girl herself doesn't understand the meaning of everything she's seeing."
                },
                {
                    speaker: "Presenter",
                    text: "For me, what was really so shocking was less what happened to the mother when she was a child but how the mother treated her own children. Why is that, do you think?"
                },
                {
                    speaker: "Helen",
                    text: "I think we're all programmed to see mothers as something sacred and pure. As a child she was mistreated by her father, and in some ways we're not that shocked by that, which is a sad thing in itself, and her own mother didn't help her. As a reader we're less affected by that, I think, because that part of the story is revealed to us in the mother's voice, the adult voice. But the reason the way she treats her own child is so much more shocking is that the child is telling us about it and we sympathise with her. It's very clever how the author plays on our natural instincts to protect a child."
                },
                {
                    speaker: "Presenter",
                    text: "Though we do feel sorry for the mother too. Or, at least, I did."
                },
                {
                    speaker: "Helen",
                    text: "It's hard not to. She's trapped in her own unhappiness."
                },
                {
                    speaker: "Presenter",
                    text: "And we're trapped right there with her as the reader. It made me wonder, Anna, why is it that miserable books like this one sell so well?"
                },
                {
                    speaker: "Anna",
                    text: "Because all of us have families. I suppose the books play out things we all see in much smaller ways in our own family lives."
                },
                {
                    speaker: "Presenter",
                    text: "The other hard-hitting book this week is We Need to Talk About Kevin by Lionel Shriver. Now there's a family who have a problem!"
                },
                {
                    speaker: "Anna",
                    text: "They definitely do. Very few people will ever have a killer as a teenage son like the narrator in the book, but we can all identify with the challenges and often terrifying reality of raising teenagers!"
                },
                {
                    speaker: "Presenter",
                    text: "So can you give us the lowdown on Kevin, then, Anna?"
                },
                {
                    speaker: "Anna",
                    text: "This book is written from the point of view of the mother in letters she's writing to her husband, Kevin's father. Again, we shouldn't say too much about the ending, but the way the author uses the letters is very clever."
                },
                {
                    speaker: "Presenter",
                    text: "I have to admit, I really enjoyed this book. It's a difficult topic, but it was much easier to read than Her Mother's Daughter."
                },
                {
                    speaker: "Anna",
                    text: "As Helen said before, it's about the voice of the narrator. There's no child's voice and, in this story, the victims in many ways are the adults, though, of course, Kevin's sister is a victim of her brother's evil."
                },
                {
                    speaker: "Helen",
                    text: "Yes, and the idea of where 'evil' comes from is a theme that comes out in both books. If you choose to call it 'evil' that is. I prefer to describe it as a complete lack of empathy. The mother in Her Mother's Daughter had a terrible childhood, but Kevin's from a happy home and good parents."
                },
                {
                    speaker: "Presenter",
                    text: "Is he though? The mother often admits she found motherhood hard. Aren't we supposed to think she might have caused Kevin to turn out the way he does? Just like in Her Mother's Daughter."
                },
                {
                    speaker: "Anna",
                    text: "Both books certainly look at how the mistakes of the parents affect children. And this is another reason we relate to these books. Parents are always worrying if they're doing a good job."
                }
            ],
            audio: "/public/media/LE_listening_C1_An_interview_about_two_books.mp3",
        },
        {
            title: "Birthday parties",
            description: "Listen to a conversation about birthday parties between three friends to practise and improve your listening skills.",
            image: "/public/images/birthday-party.jpg",
            conversation: [
                {
                    speaker: "Marco",
                    text: "The big four-oh, Charles!"
                },
                {
                    speaker: "Dora",
                    text: "Oh!! It's your 40th!"
                },
                {
                    speaker: "Marco",
                    text: "Are you planning a party?"
                },
                {
                    speaker: "Charles",
                    text: "Nah, I never celebrate birthdays. I don't see why this one should be any different."
                },
                {
                    speaker: "Dora",
                    text: "Why not?"
                },
                {
                    speaker: "Charles",
                    text: "First, you know me, I can't be bothered with the hassle. It's my birthday but I'm supposed to do all the hard work – contacting people, finding a venue, organising food, worrying who will show up. No, thanks."
                },
                {
                    speaker: "Marco",
                    text: "Ah, someone's angling for a surprise party, eh, Dora?"
                },
                {
                    speaker: "Charles",
                    text: "Marco, stop! Even worse. Having to pretend to be delighted 50 people just sprang up in your living room when you thought you were coming home to put your feet up. Probably having a heart attack at the shock."
                },
                {
                    speaker: "Dora",
                    text: "Note to self: never to organise you a surprise party. OK then!"
                },
                {
                    speaker: "Marco",
                    text: "You've got to do something, though, Charles. It's your 40th."
                },
                {
                    speaker: "Charles",
                    text: "Why? What's so great about getting old?"
                },
                {
                    speaker: "Dora",
                    text: "Er … still being here to have your birthday?"
                },
                {
                    speaker: "Marco",
                    text: "Yeah, 'Ageing is better than the alternative', as they say."
                },
                {
                    speaker: "Dora",
                    text: "Yeah, and it's true – so why not celebrate?"
                },
                {
                    speaker: "Charles",
                    text: "You guys can have parties for your 40ths if you like. I just don't go in for that kind of self-indulgent attention-seeking."
                },
                {
                    speaker: "Dora",
                    text: "Wow, that's a bit harsh! I had a huge bash for my 30th. And you came. And enjoyed yourself if I recall. Are you trying to say I was just doing it for attention?"
                },
                {
                    speaker: "Charles",
                    text: "Not exactly … but … well … at least a small part of you must have been."
                },
                {
                    speaker: "Dora",
                    text: "Remind me not to invite you to my 40th then, so you won't have to put up with my huge ego while I feed you and provide free drinks all night because I thought we were friends."
                },
                {
                    speaker: "Charles",
                    text: "I meant, er, I mean, not all attention-seeking is bad. It's just not my style is all."
                },
                {
                    speaker: "Dora",
                    text: "Whereas it is mine?"
                },
                {
                    speaker: "Marco",
                    text: "Anyway ..."
                },
                {
                    speaker: "Charles",
                    text: "I didn't say that!"
                },
                {
                    speaker: "Dora",
                    text: "Er, yes, yes, you did. You said celebrating birthdays is self-indulgent and ..."
                },
                {
                    speaker: "Marco",
                    text: "Guys, guys! Who knew birthdays was such a touchy subject? Speaking of which, I have to sort out my nine-year-old’s party the weekend after next."
                },
                {
                    speaker: "Charles",
                    text: "Now, that's a party I'd love to organise."
                },
                {
                    speaker: "Marco",
                    text: "Really? It's a nightmare. It's not like when we were kids. Now you have to take them all rock-climbing or hire a make-up artist to come and teach them how to look like a zombie or a film star. And there'd be trouble if someone else in school had the same kind of party and your kid gets accused of copying. That fear you said about no one turning up? It's a million times worse when you're scared your kid is going to have no one turn up."
                },
                {
                    speaker: "Charles",
                    text: "Is there that much pressure?"
                },
                {
                    speaker: "Marco",
                    text: "Yeah, it's crazy. Last year, I got it right with a cinema trip. Simple, but always a winner. But we can't do the same thing again apparently. It says it in my 'Official Laws for 9-Year-Olds' book."
                },
                {
                    speaker: "Charles",
                    text: "That's a pity. I've got so many fond memories of birthday parties as a kid. Party food and games and watching cartoons until your parents arrived."
                },
                {
                    speaker: "Marco",
                    text: "Trust me, your parents were stressing out!"
                },
                {
                    speaker: "Dora",
                    text: "At the risk of restarting the argument, when do you think you stopped enjoying birthdays then?"
                },
                {
                    speaker: "Charles",
                    text: "I dunno really … somewhere around moving away from home and getting a job and being a grown-up. I don't mean birthdays are immature. I mean, it takes a while to make new friends and so birthdays just become more low-key and it's drinks with a couple of friends or dinner or something. And I just got out of the habit, I guess. Maybe I just need to have a kids-style party like we used to have! Play musical chairs and eat pineapple and cheese on sticks and all that."
                },
                {
                    speaker: "Dora",
                    text: "Very retro. I bet people would love that."
                },
                {
                    speaker: "Marco",
                    text: "Yeah, they would. Well, I would anyway. And maybe it'll catch on with my kids and it'll start a new party trend."
                },
                {
                    speaker: "Charles",
                    text: "You've got me thinking … it's not a terrible idea. Maybe I will have a party this year!"
                }
            ],
            audio: "/public/media/LE_listening_C1_Birthday_parties.mp3",
        },
        {
            title: "Catching up after a trip",
            description: "Listen to two friends talking about a recent trip abroad to practise and improve your listening skills.",
            image: "/public/images/group-people-talking.jpg",
            conversation: [
                { speaker: "Dave", text: "Jean, hi!" },
                { speaker: "Jean", text: "Hi, Dave. How are you?" },
                { speaker: "Dave", text: "Good, good." },
                { speaker: "Jean", text: "Wait a second, I'm not calling you in Canada, right? You're back now, aren't you?" },
                { speaker: "Dave", text: "Yeah, I got back two days ago." },
                { speaker: "Jean", text: "Oh good, phew. Because I wouldn't want to be calling you long distance without realising it and suddenly ..." },
                { speaker: "Dave", text: "You've spent a fortune on a long-distance call. No, I know, it's OK. I actually wouldn't answer the phone while I was over there if I saw the call was coming from England. But no worries, we're in the same country now." },
                { speaker: "Jean", text: "Yeah. So, how was the trip? Did you meet your long-lost uncle?" },
                { speaker: "Dave", text: "I did, actually. It was very good. I flew to Toronto and stayed there for a few days. At first I was really worried about my accommodation because I kept reading these appalling stories about rental flats going all wrong." },
                { speaker: "Jean", text: "Oh, was it one of those?" },
                { speaker: "Dave", text: "Yeah." },
                { speaker: "Jean", text: "My friend had a disastrous experience in Barcelona with one of them. The place didn't look anything like the photos, and all the neighbours hated that there was a holiday flat in their building. Awkward situation. Urgh." },
                { speaker: "Dave", text: "Right. So, as I was saying, I was really worried because I heard these stories. And at first I couldn't find the place. Turns out I was in the wrong building. It was next door, and on the top floor, and … wow. Jean, this place was fabulous! Really spacious, with these floor-to-ceiling windows and the most scenic views of the city. I could see the lake and the whole city skyline and skyscrapers from my bedroom. I had to pinch myself to prove I wasn't dreaming." },
                { speaker: "Jean", text: "Sounds pretty cool. So, what's it like? The city, I mean. I've always wanted to go to Canada." },
                { speaker: "Dave", text: "It's nice. I mean, it's another big, vibrant, modern city. But it's really clean, and there's lots of parks. One of the things I liked was the multiculturalism. We visited Chinatown, Little Italy, Greektown, Little India … umm, I can't remember the others but it was sort of a new area every three or four blocks, you know?" },
                { speaker: "Jean", text: "Hey, is it true that there's a whole part of the city that's underground? I read that somewhere about Toronto, or saw it on some TV show." },
                { speaker: "Dave", text: "It's true! I asked about that. They call it the PATH. There's, like, almost 30 kilometres of restaurants, shops, cinemas and stuff all underground. In the middle of the downtown area." },
                { speaker: "Jean", text: "Amazing!" },
                { speaker: "Dave", text: "Yeah, but actually once you're down there it's not that noticeable. There's actually a lot of natural light. I forgot we were underground. It's mostly useful to get out of the cold weather." },
                { speaker: "Jean", text: "What temperature was it while you were there?" },
                { speaker: "Dave", text: "It was still only November, but it was getting cold. We had at least a day where it was less than zero. My uncle told me that in January and February it can go down to 20 below zero." },
                { speaker: "Jean", text: "Oh, wow. I think I'd die!" },
                { speaker: "Dave", text: "Yeah, and the worst thing was what they call the 'wind-chill' factor. So they say the temperature is zero degrees, but minus eight with the wind chill. So it feels like minus eight. And my uncle said the wind-chill factor can go down to minus 40." },
                { speaker: "Jean", text: "Stop it! You're making me feel cold just thinking about it. So, how was meeting your uncle? The famous Uncle George." },
                { speaker: "Dave", text: "That was great too. He lives outside of Toronto, in a cottage by a lake. Really tranquil and unspoiled nature." },
                { speaker: "Jean", text: "I'm dying to see photos. You want to meet up soon? Or are you too jet lagged still?" },
                { speaker: "Dave", text: "Yeah, I'm actually free tomorrow if you like." }
            ],
            audio: "/public/media/LE_listening_C1_Talking_about_a_trip.mp3",
        },
        {
            title: "Challenges at work",
            description: "Listen to four people talking about different business challenges to practise and improve your listening skills.",
            image: "/public/images/commonworkplacechallenges.jpg",
            conversation: [
                {
                    speaker: "A",
                    text: "I'll never forget the first time I met our new contact from Retrolink, one of our top five customers. I had travelled to their office to meet him in person, talk about the history of our companies together and define a shared vision for future co-operation. I wanted to focus on building a good relationship with him which would be a good foundation for working together."
                },
                {
                    speaker: "A",
                    text: "So, when we met I wanted to make a good impression and also show him respect. I greeted him with a handshake and addressed him by his surname. When I put my hand out I realised he had been moving in to give me a hug, so we did an awkward mixture of the two! Also, when I greeted him by his surname, he responded politely, though he used my first name. It was all a little uncomfortable."
                },
                {
                    speaker: "A",
                    text: "In this situation, I guess I made assumptions about the level of formality he expected. Even though he had never met me before, he knew our two companies had been doing business with each other for years and he wanted to build on that history by being less formal with me from the beginning. The real learning here for me was that I shouldn't assume we all have the same ideas about meeting people for the first time."
                },
                {
                    speaker: "B",
                    text: "I'd never worked with a virtual team on an international project before. It was quite exciting, though also challenging to work with people from different countries, many of whom I would never actually get to meet in person. There were a lot of things that were different about working in the same office and it was quite challenging at the beginning."
                },
                {
                    speaker: "B",
                    text: "For example, there were different time zones, different IT systems and even different local regulations, which impacted on what each person was allowed to, or able to, do for the project."
                },
                {
                    speaker: "B",
                    text: "There were also interpersonal differences, such as different ways of working, approaches to deadlines and when to reply to emails. And we shouldn't forget the fact that English was the project language and that most people on the team had to work in a language which wasn't their first. A positive of this was that it meant that everyone, including the native English speakers, had to make the effort to communicate clearly and clarify their own and everyone else's understanding."
                },
                {
                    speaker: "B",
                    text: "To help us all get on the same page, we defined the communication norms and the rules the team would follow, as well as the meeting dates and deadlines. We laid this all out in a document called a team or project charter. This was really useful and in the end the project was a great success. I'm looking forward to working on my next international project."
                },
                {
                    speaker: "C",
                    text: "I went through a bit of a rough patch last year at work. I was already committed to too much and then we lost a team member through restructuring and I quickly became overloaded. This led to me doing too much overtime and feeling very stressed. My boss was really helpful and she pushed back against the unrealistic targets that had been set for our department. She also introduced me to the smart approach to goal setting. It's an acronym, S-M-A-R-T. You use it to create goals that are Specific, Measurable, Achievable, Relevant and Timely."
                },
                {
                    speaker: "C",
                    text: "I used this approach to deal with all of the things that were overloading me. It helped me to prioritise some tasks, to do some later and to drop some completely."
                },
                {
                    speaker: "C",
                    text: "I often use this approach now and feel much more in control of my time and workload."
                },
                {
                    speaker: "D",
                    text: "Have you ever missed a flight or had one cancelled? I did. It happened to me last week. My flight home from a business trip was the last one of the day and we were told it was going to be delayed. That's always a risk at the end of each day. The ground crew kept extending the delay until eventually they cancelled the flight completely. They then told us to go back through the airport to the departures area to talk to their agent who would organise hotels for everyone and rebook us on the following day's flight."
                },
                {
                    speaker: "D",
                    text: "As soon as they made the announcement about the cancellation, I knew I had to think quickly as it would not be likely that the flight would have capacity to take everyone from my cancelled flight. I hurried back through the airport and was one of the first to make it to the desk. That turned out to be a good idea, as there were only nine seats available on the flight the next morning. Everyone else had to fly to a different airport and then continue back to our destination airport in coaches. Lucky me! Right?"
                }
            ],
            audio: "/public/media/LE_listening_C1_Challenges_at_work.mp3",
        },
        {
            title: "Innovation in business",
            description: "Listen to the business podcast about innovation to practise and improve your listening skills.",
            image: "/public/images/rawpixel-678089-unsplash-e1535035548812.jpg",
            conversation: [
                { speaker: "Podcast", text: "Welcome to today's Business4U podcast. The focus of this podcast is to think about innovation and why it's important, and also to look at different types and stages of innovation. By the end of it, you will hopefully have a better grasp of the topic of innovation and be able to better understand and drive innovation in both your working and personal lives." },
                { speaker: "Podcast", text: "So, why is innovation important? Well, simply put, without innovation it would be difficult to make progress. Organisations and societies would stagnate. Innovation is what drives us forward. It's what forces us to compete in the business world. It's what leads to better products and services, and solutions to new and existing problems. From a business point of view, it's also something which is necessary for survival." },

                { speaker: "Podcast", text: "Four key types of innovation are incremental, disruptive, architectural and radical." },

                { speaker: "Podcast", text: "Incremental innovation involves innovating in increments, or small stages. Step by step. It focuses on existing markets and technologies and aims to make improvements and design changes to existing products and services." },

                { speaker: "Podcast", text: "Disruptive innovation aims to bring new ideas, like technology or processes, to existing markets. In that sense, the innovations will disrupt the market and the companies currently serving that market. The first touchscreen smartphones disrupted the mobile phone industry because up to then, mobile phones had buttons and keypads." },

                { speaker: "Podcast", text: "Architectural innovation involves taking successful ideas from one market or industry and applying them to a new or different market. This often happens when people think of other unconventional uses of existing technology. A good example of this can be seen in vacuum company Dyson's entry into the hand dryer and hairdryer market. Their advanced airflow technology from their vacuum cleaners was applied in reverse to machines that blow out air. In the case of these examples, it's personal hairdryers and hand dryers in public toilets." },

                { speaker: "Podcast", text: "And finally, we come to radical innovation. This is where a completely new idea is created for a market that doesn't exist yet. It's often what we think of when we think of innovation and it often swallows up existing markets. For example, the birth and growth of digital and downloadable music has practically led to the death of music CDs, and even DVDs. Similarly, film and TV streaming services may lead to the demise of traditional TV within a few short years." },

                { speaker: "Podcast", text: "Moving on from types of innovation, let's have a quick look at five key stages of innovation." },

                { speaker: "Podcast", text: "The first stage is Idea generation. This is where you think of the initial idea and develop it into a more detailed proposal or plan." },

                { speaker: "Podcast", text: "The next stage is Support. You need to check if you can get support for it, for example from senior leaders or stakeholders in your company. If you're innovating in your personal life, then the support you might need could be from friends or family. Do they think it's a good idea and do they think it would work?" },

                { speaker: "Podcast", text: "The third step is to Experiment and test out the idea. This could mean creating a sample or a prototype of it, if it's a product. Or if it's a service, you could test out a basic version of it." },

                { speaker: "Podcast", text: "The fourth step is Evaluation. You need to assess how successful your experiments were and what chances of larger success your idea will have." },

                { speaker: "Podcast", text: "And finally, you then need to actually Implement your idea. That's the fifth stage." },

                { speaker: "Podcast", text: "So, there you have it. We've looked at four key types of innovation: incremental, disruptive, architectural and radical, and also five stages of successful innovation: firstly, idea generation. Then, get support. Next, experiment and test out the idea. The fourth stage is evaluation and finally implementation." }
            ],
            audio: "/public/media/LE_listening_C1_Innovation_in_business.mp3",
        },
        {
            title: "Introverts – redressing the balance",
            description: "Listen to a talk about social psychology to practise and improve your listening skills.",
            image: "/public/images/Introverts-redressing-the-balance.jpg",
            conversation: [
                {
                    speaker: "Speaker",
                    text: "If I asked you to describe a great leader, I'd be willing to bet certain traits come to mind … someone charismatic, dynamic, inspiring, a confident public speaker. You're probably imagining a man too, but that's a bias we'll save for another talk! We tend to think of great leaders as people who naturally take to the stage, who draw other people to them by their sheer presence, who are extroverts. But history has also been transformed by people who don't fit these descriptions. People like Rosa Parks, Eleanor Roosevelt and Gandhi. These people would have described themselves as shy, quietly spoken … as introverts."
                },
                {
                    speaker: "Speaker",
                    text: "Of course we're drawn to extroverts. They're usually charming and persuasive, fun to be around. They're not quietly in the corner somewhere reading a book where we might not notice them. Introverts are mostly happy to let the extroverts take the attention; they'd rather not be in the spotlight, they'd rather finish that book. If they become leaders, it's not because they want to be the centre of attention, it's because they feel compelled to act. They lead not because they enjoy giving orders but because circumstances have put them in a position to make change. If they're the boss, they allow space for the ideas of others to grow because they're not trying to make their mark. An introvert sounds like a pretty good boss, right? You won't need to worry about them stealing your ideas or talking over you in a meeting."
                },
                {
                    speaker: "Speaker",
                    text: "Some of our great creators are introverts too. People like the writer JK Rowling, the great thinker Darwin and the designer of the first Apple computer, Steve Wozniak. It turns out coming up with good ideas is easier when you're engaged in quiet, solo contemplation than when you're leading the cheerleading squad. Not that I'm saying there's anything wrong with cheerleaders! Extroverts are great – some of my favourite people are extroverts. But why is the world so set up for extroverts and so hard for introverts? Why are we always encouraging our kids to speak up, join in, work as a team?"
                },
                {
                    speaker: "Speaker",
                    text: "Nowadays, most schools and most workplaces are set up with the extrovert in mind. Children no longer sit in rows in desks, they sit in groups of four or six, doing group projects. Even subjects like maths and creative writing are taught with an emphasis on group collaboration, even though most writers sit alone in front of their computer or typewriter, with nothing between them and the blank page. A kid who prefers to go off into a corner and work alone starts to look like a problem. What's wrong with Janie? Why isn't she joining in? Studies show teachers think extroverts make better students, even though introverts actually tend to get higher grades. We're telling our introverted kids something is wrong with them, that they need to be more sociable, more outgoing. We're giving them fewer opportunities for the quiet contemplation they need in order to produce the best work and be their best selves."
                },
                {
                    speaker: "Speaker",
                    text: "And then at work we do the same. Most offices today are open plan, everyone working and creating noise in one big room, attending team-building workshops or group brainstorming sessions; the introverts' worst nightmares. The introverts at school are judged negatively by their teachers and when they reach the workplace, they're passed over for promotion into leadership positions. But introverts typically take fewer risks and make more careful decisions, and don't we need those traits too?"
                },
                {
                    speaker: "Speaker",
                    text: "I'm not saying let's get rid of extroverts and grab all those talkative, sociable performers at primary school and send them off to the library for four hours a day of solitude until they learn to tone it down. I'm not saying that at all. I'm saying we're doing something like the opposite of that to introverts and we need to stop. We need to allow them space to be themselves and then we'll end up getting the most out of our extroverts and our introverts. Let's teach all our kids how to work with others and how to work on their own. Let's create space in offices and at conferences for people to work on their own when they want to and give them the opportunity to come together to share ideas. Let's give staff 'away days', where they go off into the woods, walk up a mountain or wherever, to work on something alone, as well as the 'team-building day' where everyone learns to dance salsa together."
                },
                {
                    speaker: "Speaker",
                    text: "The future is complicated, with a lot of huge, complex problems to solve. Let's make sure we've got our best people working on those problems in the way that suits them best. And then we've got to make sure we listen to our extroverts and our introverts and everyone who sits somewhere in between on the scale. We're going to need all of them."
                }
            ],
            audio: "/public/media/LE_listening_C1_Introverts_reddressing_the_balance.mp3",
        },
        {
            title: "Renting a house",
            description: "Listen to four different people talking about their experiences with renting accommodation to practise and improve your listening skills.",
            image: "/public/images/house-renting.jpg",
            conversation: [
                {
                    speaker: "Part: A",
                    text: "We saw the ad in the summer, in about July, I think, but we weren't really serious about moving then so we didn't even go and see it. It wasn't until November when they readvertised it that we got in touch with the agency and had a look. They'd put the price down since the summer too, I suppose because it had been empty so long, so that made it more affordable for us which helped us make up our minds. It was perfect – a bigger garden for the kids and enough space for an office. In winter it was lovely, very cosy, in fact, which is important to me as I really feel the cold, whereas my husband will open a window when it's minus temperatures outside! Anyway, in July when summer really started and we had that heatwave, we understood why no one had wanted to rent it over summer. It was boiling! All those lovely big windows that made the flat so light and open were like a greenhouse as soon as it got warmer. From about 8 in the morning until 7 in the evening, it was like living in a sauna! We couldn't stand being at home, and weekends were especially bad. No air conditioning, of course. If only we'd gone to see it when it was first advertised in July, we'd never have moved in!"
                },
                {
                    speaker: "Part: B",
                    text: "I always rent apartments when I go on holiday, rather than staying in hotels. Hotels are so impersonal, aren't they? This way you get to feel like you really live in the place you're visiting. It's the first time I've done it the other way round, though, and rented out my place … but it seemed like a good way of making some extra money. The website is really easy to use and they only charge five per cent commission, which is lower than a lot of the other holiday rental sites. It's all about the photos and the reviews. Get the photos right and the place can look really upmarket and spacious, but you don't want to make it look too much better than it really is or you end up with a bad review. It's better to undersell and overdeliver so guests are pleasantly surprised and leave an extra positive review. So far, I'm averaging three stars because of one bad review that brought my average down from four and a half stars, but hopefully I'll get it back up during the busy season."
                },
                {
                    speaker: "Part: C",
                    text: "Buying a house seems so far out of my reach it's almost impossible, as it is for loads of people my age these days. My parents always told me renting was throwing money away, but it was different in their day. Then people could afford to buy a house on a normal salary, but nowadays house prices are so high and no bank will look at you unless you've got a huge deposit. The problem with my dream of buying is that it's never going to come true. Not unless my parents help me out, but I've got two sisters and we're all in the same position. At least they've both got good jobs. Not good enough to buy a house, but at least they can afford to rent places of their own in nice areas. I just don't earn enough to rent around here. Even if I get promoted to manager, it'll be tough to find somewhere unless I share, and call me fussy, but there aren't that many people I want to share a bathroom and kitchen with. Some days I think I'll be stuck living with my parents forever – even renting is like a dream to me."
                },
                {
                    speaker: "Part: D",
                    text: "At first our landlord was really helpful, couldn't do enough for us. You hear stories of nightmare landlords and we felt like we were really lucky, or so we thought anyway. He redecorated the whole place, from top to bottom, and let us keep all the bills in his name so we didn't have the bother of contacting all the companies ourselves. He even offered to come round and do the gardening as he knew we both worked long hours and might not have time. That's where the problems started now I look back. Then he'd pop round 'just to check everything's OK for you' … once a month, then twice a month. Soon he was coming every week with some excuse or other. In the beginning we'd invite him in for tea, but it was only encouraging him, so when we realised, we'd try to have the conversation on the doorstep instead. It got so bad we pretended to be on our way out if we saw him coming up the path. We'd grab our coats and walk round the block until he'd gone. I don't know if he was just lonely or just didn't trust us not to ruin his precious house. In the end we gave our notice and found somewhere else. It's a shame because we really loved that house, but at least it's more peaceful in the new place."
                }
            ],
            audio: "/public/media/LE_listening_C1_Renting_a_house.mp3",
        },
        {
            title: "Tech addiction",
            description: "Listen to the radio programme about tech addiction to practise and improve your listening skills.",
            image: "/public/images/tech-addication.jpeg",
            conversation: [
                {
                    speaker: "Presenter",
                    text: "The sound of kids hanging out together. Or, at least, how it sounded a few years ago. Nowadays a group of, well, just about anyone – kids, teens, tweens, their parents – might sound a lot more like this …"
                },
                {
                    speaker: "Presenter",
                    text: "Most of us spend hours a day with our heads bent over our smartphones. Research suggests teenagers spend as many as nine hours a day, while pre-teens spend up to six."
                },
                {
                    speaker: "Teen voice",
                    text: "I don't know, it's, like, the first thing I do in the morning, check in and see who's posted anything overnight. It's my alarm clock so I kind of have to look at it and then, you know, it's pretty hard not to scroll through."
                },
                {
                    speaker: "Presenter",
                    text: "And it's not just teenagers and millennials, Generation X and even the Baby Boomers are almost as bad."
                },
                {
                    speaker: "Adult voice",
                    text: "I'm online most of the day for work and you'd think I'd be sick of screens by the time I get home, but most of my news comes through Facebook and I'm really into food so I'll hold my hands up to being one of those people who posts photos of their meals."
                },
                {
                    speaker: "Presenter",
                    text: "But are we addicted to our phones and apps? And does it matter? Former Google and Facebook employees certainly think so. So they've set up a non-profit organisation, the Center for Humane Technology, to reverse the digital attention crisis and promote safe technology for children."
                },
                {
                    speaker: "Expert",
                    text: "Anyone who's seen queues round the block for the latest iPhone has to wonder what these people are thinking. You've literally got people sleeping in the street to get the newest device, probably not even talking to anyone else in the queue because they're on social media, taking selfies in the queue to post to Instagram. If that's not addiction, it's certainly obsession."
                },
                {
                    speaker: "Presenter",
                    text: "A more formal definition of addiction describes it as a repeated involvement with an activity, despite the harm it causes. Someone with an addiction has cravings – that feeling that you haven't checked your phone for two minutes and can't relax until you get your hands on it again. They may have a lack of self-control and not realise their behaviour is causing problems – like texting while cycling or falling off a cliff taking a selfie. And, in case you're wondering, I read about both of those via the news app on my phone, which updates every couple of minutes with the latest stories … definitely addicted. So the 'Truth about Tech' campaign by Common Sense Media and the Center for Humane Technology couldn't come fast enough for most of us. But it's children who are probably most at risk because of the effect tech addiction might be having on their brain development. Professor Mary Michaels of the Atlanta Future Tech Institute has been working with very young children. Mary, thanks for dropping by. What is your research telling us?"
                },
                {
                    speaker: "Mary",
                    text: "Well, we know that screen time is affecting key aspects of healthy child development, like sleep, healthy eating and what psychologists call 'serve and return' moments, which are when parents respond to babies seeking assurance and connection by making eye contact, smiling or talking. All perfectly normal things we do and which help lay the foundations of babies' brains. It's much harder to engage with a baby normally if you're looking at your phone. Or, even worse, if parents give a crying child a phone to distract them instead of talking to them or hugging them, and that might lead to them failing to develop their ability to regulate their own emotions."
                },
                {
                    speaker: "Presenter",
                    text: "And what about older children?"
                },
                {
                    speaker: "Mary",
                    text: "Again, we know that teenagers who spend a lot of time on social media are 56 per cent more likely to report being unhappy and 27 per cent more likely to suffer depression. Teenagers are especially vulnerable because they're more sensitive to highs and lows anyway, so we're looking at, potentially, higher instances of suicide, schizophrenia, anxiety and addiction in teens which is exacerbated by dependence on technology."
                },
                {
                    speaker: "Presenter",
                    text: "It sounds like a vicious circle. They're more likely to get addicted to smartphones and social media and that addiction itself makes them candidates for other addictions."
                },
                {
                    speaker: "Mary",
                    text: "Yes, that's right."
                },
                {
                    speaker: "Presenter",
                    text: "Time to stage an intervention! Is there anything we can do to make tech less addictive?"
                },
                {
                    speaker: "Mary",
                    text: "Setting devices to greyscale, which is basically black and white, might make them less appealing. Scrolling through a newsfeed of boring, washed-out photos just doesn't create the same rush as bright colours perhaps. And you can turn off the notifications that are constantly pulling you back in to check your phone."
                },
                {
                    speaker: "Presenter",
                    text: "So is it ..."
                }
            ],
            audio: "/public/media/LE_listening_C1_Tech_addiction.mp3",
        },
        {
            title: "The helix",
            description: "Listen to a lecture about the helix shape to practise and improve your listening skills.",
            image: "/public/images/RS7989_GettyImages-980196834-hig.avif",
            conversation: [
                {
                    speaker: "Presenter",
                    text: "I'd like to turn now to the object which is the main point of this talk: the helix. This is a fascinating mathematical object which touches many parts of our lives. Movement, the natural world, the manufactured world and our genetic make-up are all connected to the shape of the helix."
                },
                {
                    speaker: "Presenter",
                    text: "A helix is a type of three-dimensional curve that goes around a central cylindrical shape in the form of a spiral, like a corkscrew or a spiral staircase. The helix is a very popular shape in nature because it is very compact. In fact, helices are sometimes referred to as 'nature's space saver'. In architecture too, the helix shape of a spiral staircase is an attractive option in buildings where space is very restricted."
                },
                {
                    speaker: "Presenter",
                    text: "The most renowned type of helix is probably the double helix of DNA, or deoxyribonucleic acid. DNA is made of two helices that curve around each other, a bit like a twisted ladder. DNA contains the genetic information or 'code' that determines the development and functioning of all known living things. The helix shape is a very efficient way to store a long molecule like DNA in the limited space of a cell."
                },
                {
                    speaker: "Presenter",
                    text: "There are different types of helices. Helices can twist clockwise, right-handed, or anti-clockwise, left-handed. An interesting experiment is to hold a clockwise helix, such as a corkscrew, up to a mirror. The clockwise helix appears to become counterclockwise."
                },
                {
                    speaker: "Presenter",
                    text: "We can perceive examples of helices in many areas of our world. Spiral staircases, cables, screws and ropes can be right-handed or left-handed helices. A helix that goes around a cone is called a conical helix. Examples of conical helices are screws or the famous spiral ramp designed by the architect Frank Lloyd Wright in the Guggenheim Museum in New York."
                },
                {
                    speaker: "Presenter",
                    text: "Helices are also prevalent in the natural world. The horns of certain animals, viruses, seashells and the structure of plants, flowers and leaves can all contain helices. The human umbilical cord is in fact a triple helix."
                },
                {
                    speaker: "Presenter",
                    text: "With the discovery that the helix is the shape of the DNA molecule, it is not surprising that the helix is found in so many areas. It's one of the most natural shapes in nature."
                },
                {
                    speaker: "Presenter",
                    text: "Let's turn our attention now to the mathematical description of the helix. You'll need a pen and paper for the next part of the talk as I am going to give you some variables to write down. Take your time to notice the different ..."
                }
            ],
            audio: "/public/media/LE_listening_C1_The_helix.mp3",
        },
        {
            title: "The history of hand gestures",
            description: "Listen to a lecture about the history of hand gestures to practise and improve your listening skills.",
            image: "/public/images/360_F_267372722_L5l4IeoL56Oipw0m0erqGGSsScv5ojhz.jpg",
            conversation: [
                {
                    speaker: "Presenter",
                    text: "Earlier on in today's lecture, I mentioned the importance of hand gestures and said that I'd touch on some of these, pardon the pun! Hand gestures are, of course, often culturally bound and can vary from group to group. But there are a few of them which, if not universal, are very common indeed around the world. I'd like to focus on the history of four gestures in particular: the salute, the thumbs up, the high five and the handshake."
                },
                {
                    speaker: "Presenter",
                    text: "The salute, a gesture most associated with the military, may have originated in the 18th century. The Grenadier Guards, one of the oldest regiments of the British Army, used helmets in the form of cones. These were held in place by chinstraps. It was difficult to raise your helmet when greeting someone, so the soldiers simply touched their head with one short movement of the hand before quickly putting it back down again at their side."
                },
                {
                    speaker: "Presenter",
                    text: "The thumbs-up gesture apparently goes back a lot further. It's widely believed that this gesture goes back to Roman times when gladiators fought in front of the emperor and eager crowds in the Colosseum. The fallen gladiator's fate was decided by the audience. If they felt he had fought well, they showed their approval with a thumbs-up gesture. The emperor would then confirm this and thereby would spare the gladiator's life. If the crowd gave a thumbs down, on the other hand, that meant execution."
                },
                {
                    speaker: "Presenter",
                    text: "However, there are no reliable historical references to thumbs going either up or down in the Colosseum. It may be that if the crowd wanted to spare the gladiator's life, then they would actually cover up their thumb and keep it hidden. They would only extend their hand and thumb if they wanted the gladiator killed. This actually makes more sense, as the emperor could much more easily see what the crowd was indicating when looking out over a huge arena."
                },
                {
                    speaker: "Presenter",
                    text: "The high-five hand gesture is almost universally used as a greeting or celebration. Many see its origins in baseball. Two US teams lay claim to inventing the high five: the Los Angeles Dodgers in 1977 or the Louisville Cardinals in 1978. It's quite likely that it was neither, and the gesture might have a much earlier origin again. It is very similar to a 1920s Jazz Age gesture known as the 'low five', or 'giving skin'. This gesture involved people slapping each other's lower hands, also in celebration. There are, in fact, numerous references to the low five in films of the era. Perhaps the high five is just an evolution of that gesture."
                },
                {
                    speaker: "Presenter",
                    text: "The final gesture I'm going to mention today is the handshake. It dates back as a greeting at least as far as Ancient Greece. In the Acropolis Museum in Athens, the base of one of the columns shows goddess Hera shaking hands with Athena, the goddess of wisdom and courage. It's thought that shaking hands, rather than bowing or curtseying, showed both parties as equals. In 17th-century marriage portraits in Europe we find many examples of handshakes between husband and wife. Now, of course, the handshake has a multitude of uses: meeting, greeting, parting, offering congratulations, expressing gratitude or completing an agreement. In sports or other competitive activities, it is also done as a sign of good sportsmanship. In this way, the gesture has not strayed from its original meaning to convey trust, respect and equality."
                }
            ],
            audio: "/public/media/LE_listening_C1_The_history_of_hand_gestures.mp3",
        }
    ]
};

const parseURL = params => {
    const removedSymbolsURL = String(params).toLowerCase().replace('–', null)
    return String(removedSymbolsURL).replace(/ /g, "-")
}

export const pageContent = () => {
    const path = new URLSearchParams(window.location.search).get("title");
    const currentPage = new URLSearchParams(window.location.search).get("page").toLowerCase();

    const target = items[currentPage].find(item => {
        const parsedURL = parseURL(item.title)
        if (parsedURL == path) {
            return {
                ...item,
            }
        }
    })

    const result = {
        level: `${String(currentPage).toUpperCase()} Level`,
        ...target
    }

    metadata(target.title, target.description)

    return result

}