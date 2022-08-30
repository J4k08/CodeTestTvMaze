export interface Series {
    show: Show;
  }
  
  export interface Show {
    id: number;
    name: string;
    url: string;
    image: {
      medium: string;
    };
    summary: string;
  }

  
  export const Shows: Series[] = [
    {
        show: {
            id: 139,
            url: "https://www.tvmaze.com/shows/139/girls",
            name: "Girls",
            image: {
                medium: "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
            },
            summary:"This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s."
        },
    },
    {
        show: {
            id: 713,
            url: "https://www.tvmaze.com/shows/713/spongebob-squarepants",
            name: "SpongeBob SquarePants",
            image: {
                medium: "https://static.tvmaze.com/uploads/images/medium_portrait/418/1047279.jpg"
            },
            summary: "Bikini Bottom is home to the coolest creatures under the sea, and you CAN'T miss out on any of their adventures. Is mayonnaise an instrument? Watch <i>SpongeBob SquarePants</i> to find out!"

        },
    },
    {
        show: {
            id: 481,
            url: "https://www.tvmaze.com/shows/11464/batman-unlimited",
            name: "The Batman",
            image: {
                medium: "https://static.tvmaze.com/uploads/images/medium_portrait/38/96515.jpg"
            },
            summary: "Hidden in the shadows, The Batman casts a protective eye while tracking the thugs, thieves and criminal masterminds that claim Gotham City\'s dark alleys each night. In one magnificent swoop, he descends up on opponents and battles with a fierceness that seems almost inhuman. This is the young Bruce Wayne who assumes the role of Gotham\'s greatest defender in a fresh retelling of the Dark Knight\'s beginnings.</p><p>With incredible gadgets, awesome animation and a cool new vibe, these 13 exciting episodes from the hit series showcase The Batman taking on your favourite villains – The Joker, The Penguin, Mr. Freeze, Catwoman, Bane – and new crazies you\'ll love to hate!"

        },
    },
    {
        show: {
            id: 41734,
            url: "https://www.tvmaze.com/shows/42437/kamp-koral-spongebobs-under-years",
            name: "Kamp Koral: SpongeBob\'s Under Years",
            image: {
                medium: "https://static.tvmaze.com/uploads/images/medium_portrait/401/1002521.jpg"
            },
            summary: "Kamp Koral: SpongeBob\'s Under Years</b> introduces 10-year-old SpongeBob SquarePants during his summer at sleepaway camp. In the series, SpongeBob and his pals spend the summer building underwater campfires, catching wild jellyfish, and swimming in Lake Yuckymuck at the craziest camp in the kelp forest"

        },
    },
    
  ];

  
    /*id:             number;
    url:            string;
    name:           string;
    type:           string;
    language:       string;
    genres:         string[];
    status:         string;
    runtime:        number;
    averageRuntime: number;
    premiered:      Date;
    ended:          Date;
    officialSite:   string;
    schedule:       Schedule;
    rating:         Rating;
    weight:         number;
    network:        Network;
    webChannel:     null;
    dvdCountry:     null;
    externals:      Externals;
    image:          Image;
    summary:        string;
    updated:        number;
    _links:         Links;
}

export interface Links {
    self:            Previousepisode;
    previousepisode: Previousepisode;
}

export interface Previousepisode {
    href: string;
}

export interface Externals {
    tvrage:  number;
    thetvdb: number;
    imdb:    string;
}

export interface Image {
    medium:   string;
    original: string;
}

export interface Network {
    id:           number;
    name:         string;
    country:      Country;
    officialSite: string;
}

export interface Country {
    name:     string;
    code:     string;
    timezone: string;
}

export interface Rating {
    average: number;
}

export interface Schedule {
    time: string;
    days: string[];
}
*/