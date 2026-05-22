// ============================================================
//  GIFT WEBSITE — YOUR PERSONAL CONFIGURATION
//  Edit this file to make the website yours!
//  Save the file, then refresh the browser to see changes.
// ============================================================

const CONFIG = {

  // ── PAGE TEXT ──────────────────────────────────────────────
  title:           "A Gift For You 💝",
  heroTitle:       "A Special Gift For You 💝",
  heroSubtitle:    "Click the gift box to open it...",
  gallerySubtitle: "Every moment with you is a treasure",

  // ── PHOTOS ────────────────────────────────────────────────
  //
  //  HOW TO ADD YOUR INSTAGRAM PHOTOS:
  //  1. Open Instagram on your phone → go to the post
  //  2. Tap the three dots → "Save" (saves to camera roll)
  //  3. Copy the photo into the "photos/" folder in this project
  //  4. Update the url below, e.g. "./photos/photo1.jpg"
  //
  //  OR on desktop: right-click a photo → "Copy Image Address"
  //  and paste that URL directly (works while Instagram is logged in)
  //
  photos: [
    { url: "./photos/photo1.jpg",  caption: "Our first date 💕" },
    { url: "./photos/photo2.jpg",  caption: "Best day ever 🌸"  },
    { url: "./photos/photo3.jpg",  caption: "This smile 😍"     },
    { url: "./photos/photo4.jpg",  caption: "My favourite memory ✨" },
    { url: "./photos/photo5.jpg",  caption: "Just us ❤️"        },
    { url: "./photos/photo6.jpg",  caption: "Forever & always 💖" },
    // { url: "./photos/photo7.jpg", caption: "Add more..." },
  ],

  // ── LOVE QUIZ ─────────────────────────────────────────────
  //
  //  She must answer all questions correctly to unlock your message.
  //  "correct" is the INDEX of the right answer (0 = first option).
  //  Wrong answers just show the hint and let her try again.
  //
  quiz: [
    {
      question: "Where did we have our first date?",
      options:  ["Coffee shop", "Restaurant", "Park", "Cinema"],
      correct:  0,
      hint:     "Hint: somewhere cozy with warm drinks ☕"
    },
    {
      question: "What is my very favourite thing about you?",
      options:  ["Your smile", "Your laugh", "Your kindness", "Everything 💖"],
      correct:  3,
      hint:     "How could I ever choose just one thing? 😊"
    },
    {
      question: "What song reminds me of us?",
      options:  ["Perfect — Ed Sheeran", "A Thousand Years", "Can't Help Falling in Love", "Thinking Out Loud"],
      correct:  0,
      hint:     "It's the one I always think of when I'm with you 🎵"
    },
    {
      question: "When did I realise I was falling for you?",
      options:  ["The first time I saw you", "During our first date", "When I got to know the real you", "I've always known"],
      correct:  2,
      hint:     "The more I learned about you, the harder I fell 💞"
    },
    {
      question: "What's my favourite memory of us together?",
      options:  ["Our first trip", "The night we talked till 4am", "Our first kiss", "Every single day with you"],
      correct:  3,
      hint:     "I honestly can't pick one — every day with you is a gift 🌟"
    },
  ],

  // ── FINAL LOVE LETTER ─────────────────────────────────────
  //  This appears after she completes the quiz.
  //  Use \n for a new line, or just press Enter between backticks.

  loveMessage: `You made it all the way here. 🎉

I made this for you because you deserve to feel just how much you mean to me.

Every photo here is a memory I'll carry with me forever. Every moment with you, every laugh, every quiet evening — they're the best parts of my life.

You are my favourite person in the entire world, and I'm so lucky that I get to call you mine.

Thank you for being you.
I love you more than words could ever say. 💖`,

  // A special photo shown in the final message — use your best photo together!
  // Put the file in the photos/ folder, e.g. "./photos/us.jpg"
  finalPhoto: "./photos/us.jpg",

  // Your sign-off at the bottom of the love letter
  signature: "Yours, always ❤️",

};
