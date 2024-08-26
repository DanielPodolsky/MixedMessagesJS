// Create your favorite artists!
const artistsFactory = (name) => {
    return {
        _name: name,
        get getName() {
            return this._name;
        },
        set setName(name) {
            if (name) {
                this._name = name;
            } else {
                console.log('Error has occured. Check your name!');
            }
        },
        type: 'artist'
    }
};

// Create your favorite streamers!
const streamersFactory = (name) => {
    return {
        _name: name,
        get getName() {
            return this._name;
        },
        set setName(name) {
            if (name) {
                this._name = name;
            } else {
                console.log('Error has occured. Check your name!');
            }
        },
        type: 'streamer'
    }
};

// Create your close friends!
const closeFriendsFactory = (name) => {
    return {
        _name: name,
        get getName() {
            return this._name;
        },
        set setName(name) {
            if (name) {
                this._name = name;
            } else {
                console.log('Error has occured. Check your name!');
            }
        },
        type: 'close friend'
    }
};

const artists = [
    artistsFactory("Post Malone"),
    artistsFactory("Kendrick Lamar"),
    artistsFactory("Billie Eilish"),
    artistsFactory("Brad Paisley"),
    artistsFactory("Future"),
    artistsFactory("Metro Booming"),
    artistsFactory("Eminem"),
    artistsFactory("Childish Gambino"),
];

const streamers = [
    streamersFactory("Ninja"),
    streamersFactory("PewDiePie"),
    streamersFactory("Speed"),
    streamersFactory("Kai Cenat"),
    streamersFactory("Ohne Pixel"),
    streamersFactory("PashaBiceps")
];

const friends = [
    closeFriendsFactory("A"),
    closeFriendsFactory("R"),
    closeFriendsFactory("I"),
    closeFriendsFactory("D"),
    closeFriendsFactory("N"),
    closeFriendsFactory("D")
];


const adjectives = ['amazing', 'astonishing', 'awe-inspiring', 'breathtaking', 'extraordinary', 'incredible', 'marvelous', 'prodigious', 'sensational', 'spectacular', 'staggering', 'stunning'];

const messageTemplates = [
    "{artist} just collabed with {streamer} on a charity livestream, and {friend} couldn't stop laughing at their antics!",
    "In a parallel universe, {streamer} is actually {artist}'s biggest fan, and {friend} is their manager.",
    "Breaking news: {artist} just challenged {streamer} to a dance-off, and {friend} is the surprise judge!",
    "{friend} dreamt they switched lives with {artist} for a day, but ended up in {streamer}'s streaming room instead.",
    "If {artist}, {streamer}, and {friend} started a band, they'd call themselves 'The Improbable Trio'.",
    "{streamer} accidentally called {artist} during a livestream, and {friend} picked up the phone!",
    "In a plot twist nobody saw coming, {friend} is secretly {artist}'s ghostwriter and {streamer}'s content advisor.",
    "{artist} and {streamer} are planning a surprise party for {friend}, but {friend} is the only one who knows how to bake the cake.",
    "If {friend} could trade lives with anyone for a day, they'd choose... a mash-up of {artist} and {streamer}!",
    "{streamer} just did a 24-hour stream of attempting to recreate {artist}'s greatest hits, with {friend} as the very confused audience.",
    "In a shocking twist, {artist} just became a full-time {streamer.platform} streamer, with {friend} as their loyal mod!",
    "{streamer} attempted to teach {artist} how to play video games, but {friend} ended up winning every match!",
    "Breaking: {friend} just launched a podcast where {artist} and {streamer} argue about the best pizza toppings!",
    "In an alternate reality, {artist}'s latest album is just hours of {streamer}'s gaming sounds, curated by {friend}.",
    "{friend} organized a talent show where {artist} had to stream on Twitch and {streamer} had to perform a concert!"
  ];

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const generateMessage = () => {
    const template = getRandomItem(messageTemplates);
    const artist = getRandomItem(artists);
    const streamer = getRandomItem(streamers);
    const friend = getRandomItem(friends);

    return template
      .replace("{artist}", artist.getName)
      .replace("{streamer}", streamer.getName)
      .replace("{friend}", friend.getName);
};

console.log(generateMessage());