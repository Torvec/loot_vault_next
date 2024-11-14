import { type Category } from "./types";

interface FetchDataType {
  baseURL: string;
  apiKey: string | null;
  headers: {
    headers: Record<string, string>;
  } | null;
  fetchEndPoints: Record<string, string>;
  sort: Record<string, string>;
  filter: {
    platform?: Record<string, number | string>;
    store?: Record<string, number | string>;
    genre?: Record<string, number>;
    type?: Record<string, string>;
  };
}

const fetchData: Record<Category, FetchDataType> = {
  "best-deals": {
    baseURL: "https://www.cheapshark.com/api/1.0/",
    apiKey: null,
    headers: null,
    fetchEndPoints: {
      default: "deals?sortBy=DealRating",
      details: "deals?id=",
    },
    sort: {
      dealrating: "DealRating",
      title: "Title",
      savings: "Savings",
      price: "Price",
      metacritic: "Metacritic",
      reviews: "Reviews",
      release: "Release",
      store: "Store",
      recent: "Recent",
    },
    filter: {
      store: {
        steam: 1,
        gamersgate: 2,
        greenmangaming: 3,
        amazon: 4,
        gamestop: 5,
        direct2drive: 6,
        gog: 7,
        origin: 8,
        getgames: 9,
        shinyloot: 10,
        humblestore: 11,
        desura: 12,
        uplay: 13,
        indiegamestand: 14,
        fanatical: 15,
        gamesrocket: 16,
        gamesrepublic: 17,
        silagames: 18,
        playfield: 19,
        imperialgames: 20,
        wingamestore: 21,
        funstockdigital: 22,
        gamebillet: 23,
        voidu: 24,
        epicgamesstore: 25,
        razergamestore: 26,
        gamesplanet: 27,
        gamesload: 28,
        game: 29,
        indiegala: 30,
        blizzardshop: 31,
        allyouplay: 32,
        dlgamer: 33,
        noctre: 34,
        dreamgame: 35,
      },
    },
  },
  "highest-rated": {
    baseURL: "https://api.rawg.io/api/",
    apiKey: `key=${process.env.RAWG_API_KEY}`,
    headers: null,
    fetchEndPoints: {
      default: "games?page_size=24&platforms=7,4,187,186&ordering=-metacritic",
      details: "games/",
    },
    sort: {
      name: "name",
      released: "released",
      added: "added",
      created: "created",
      updated: "updated",
      rating: "rating",
      metacritic: "metacritic",
      name_rev: "-name",
      released_rev: "-released",
      added_rev: "-added",
      created_rev: "-created",
      updated_rev: "-updated",
      rating_rev: "-rating",
      metacritic_rev: "-metacritic",
    },
    filter: {
      platform: {
        pc: 4,
        playstation5: 187,
        playstation4: 18,
        xboxone: 1,
        xboxseries_sx: 186,
        nintendoswitch: 7,
        ios: 3,
        android: 21,
        nintendo3ds: 8,
        nintendods: 9,
        nintendodsi: 13,
        macos: 5,
        linux: 6,
        xbox360: 14,
        xbox: 80,
        playstation3: 16,
        playstation2: 15,
        playstation: 27,
        psvita: 19,
        psp: 17,
        wiiu: 10,
        wii: 11,
        gamecube: 105,
        nintendo64: 83,
        gameboyadvance: 24,
        gameboycolor: 43,
        gameboy: 26,
        snes: 79,
        nes: 49,
        classicmacintosh: 55,
        appleii: 41,
        commodoreamiga: 166,
        atari7800: 28,
        atari5200: 31,
        atari2600: 23,
        atariflashback: 22,
        atari8bit: 25,
        atarist: 34,
        atarilynx: 46,
        atarixegs: 50,
        genesis: 167,
        segasaturn: 107,
        segacd: 119,
        sega32x: 117,
        segamastersystem: 74,
        dreamcast: 106,
        "3do": 111,
        jaguar: 112,
        gamegear: 77,
        neogeo: 12,
        web: 171,
      },
      genre: {
        action: 4,
        indie: 51,
        adventure: 3,
        rpg: 5,
        strategy: 10,
        shooter: 2,
        casual: 40,
        simulation: 14,
        puzzle: 7,
        arcade: 11,
        platformer: 83,
        racing: 1,
        massivelymultiplayer: 59,
        sports: 15,
        fighting: 6,
        family: 19,
        boardgames: 28,
        educational: 34,
        card: 17,
      },
      store: {
        steam: 1,
        playstationstore: 3,
        xboxstore: 2,
        appstore: 4,
        gog: 5,
        nintendostore: 6,
        xbox360store: 7,
        googleplay: 8,
        itchio: 9,
        epicgames: 11,
      },
    },
  },
  "free-games": {
    baseURL: "https://gamerpower.p.rapidapi.com/api/",
    apiKey: null,
    headers: {
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY ?? "",
        "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
      },
    },
    fetchEndPoints: {
      default: "giveaways?sort=value&type=game",
      details: "giveaway?id=",
    },
    sort: {
      date: "date",
      value: "value",
      popularity: "popularity",
    },
    filter: {
      type: {
        game: "game",
        loot: "loot",
        beta: "beta",
      },
      platform: {
        pc: "pc",
        steam: "steam",
        epic: "epic-games-store",
        itchio: "itchio",
        gog: "gog",
        origin: "origin",
        ubisoft: "ubisoft",
        battlenet: "battlenet",
        drmfree: "drm-free",
        ps5: "ps5",
        ps4: "ps4",
        xboxseriesxs: "xbox-series-xs",
        xboxone: "xbox-one",
        switch: "switch",
        android: "android",
        ios: "ios",
        vr: "vr",
      },
    },
  },
  wishlist: {
    baseURL: "",
    apiKey: null,
    headers: null,
    fetchEndPoints: {},
    sort: {},
    filter: {},
  },
};

export async function initFetch(category: Category) {
  const { baseURL, apiKey, headers, fetchEndPoints } = fetchData[category];
  const endpoint = fetchEndPoints.default;
  const url = `${baseURL}${endpoint}${apiKey ? `&${apiKey}` : ""}`;
  const response = await fetch(url, headers ?? undefined);
  if (!response.ok) {
    throw new Error(
      `HTTP error! Status: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
}

export async function fetchDetails(category: Category, id: string | number) {
  const { baseURL, apiKey, headers, fetchEndPoints } = fetchData[category];
  const endpoint = fetchEndPoints.details;
  const url = `${baseURL}${endpoint}${id}${apiKey ? `?${apiKey}` : ""}`;
  const response = await fetch(url, headers ?? undefined);
  if (!response.ok) {
    throw new Error(
      `HTTP error! Status: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
}
