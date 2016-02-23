(function(exports) {
  if (!exports.tohken) {
    exports.tohken = {};
  }
  if (!exports.tohken.define) {
    exports.tohken.define = {};
  }
  exports.tohken.define.type = {
    "1": "Oodachi",
    "2": "Tachi",
    "3": "Naginata",
    "4": "Wakizashi",
    "5": "Uchigatana",
    "6": "Yari",
    "7": "Tantou"
  };
  exports.tohken.define.group = {
    "1": "None",
    "2": "Sanjou",
    "3": "Kanesada",
    "4": "Kobizen",
   "5": "Horikawa",
    "6": "Samonji",
    "7": "Muramasa",
    "8": "Rai",
    "9": "Awataguchi",
    "10": "Kotetsu",
    "11": "Osafune",
    "12": "Aoe"
  };
  exports.tohken.define.area = {
    "1": "Short",
    "2": "Wide",
    "3": "Horizontal",
    "4": "Vertical"
  };
  exports.tohken.define.tohkens = {
    "3": {
      "name": "Mikazuki",
      "id": 3,
      "rarity": 5,
      "type": 2,
      "group": 2,
      "equip": 3,
      "area": 1,
      "upgrade": 25
    },
    "5": {
      "name": "Kogitsunemaru",
      "id": 5,
      "rarity": 3,
      "type": 2,
      "group": 2,
      "equip": 2,
      "area": 1,
      "upgrade": 25
    },
    "7": {
      "name": "Ishikirimaru",
      "id": 7,
      "rarity": 3,
      "type": 1,
      "group": 2,
      "equip": 2,
      "upgrade": 25
    },
    "9": {
      "name": "Iwatooshi",
      "id": 9,
      "rarity": 3,
      "type": 3,
      "group": 2,
      "equip": 2,
      "upgrade": 25
    },
    "11": {
      "name": "Imanotsurugi",
      "id": 11,
      "rarity": 1,
      "type": 7,
      "group": 2,
      "equip": 1,
      "area": 1,
      "upgrade": 20
    },
    "19": {
      "name": "Nikkari",
      "id": 19,
      "rarity": 2,
      "type": 4,
      "group": 12,
      "equip": 2,
      "area": 1,
      "upgrade": 25
    },
    "23": {
      "name": "Nakigitsune",
      "id": 23,
      "rarity": 2,
      "type": 5,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20
    },
    "25": {
      "name": "Ichigo",
      "id": 25,
      "rarity": 4,
      "type": 2,
      "group": 9,
      "equip": 3,
      "area": 1,
      "upgrade": 25
    },
    "27": {
      "name": "Namazuo",
      "id": 27,
      "rarity": 2,
      "type": 4,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20
    },
    "29": {
      "name": "Honebami",
      "id": 29,
      "rarity": 2,
      "type": 4,
      "group": 9,
      "equip": 2,
      "area": 1,
      "upgrade": 20
    },
    "31": {
      "name": "Hirano",
      "id": 31,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20
    },
    "33": {
      "name": "Atsu",
      "id": 33,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20
    },
    "39": {
      "name": "Maeda",
      "id": 39,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20
    },
    "41": {
      "name": "Akita",
      "id": 41,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20
    },
    "45": {
      "name": "Midare",
      "id": 45,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20
    },
    "47": {
      "name": "Gokotai",
      "id": 47,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20
    },
    "49": {
      "name": "Yagen",
      "id": 49,
      "rarity": 1,
      "type": 7,
      "group": 9,
      "equip": 1,
      "area": 1,
      "upgrade": 20
    },
    "55": {
      "name": "Uguisumaru",
      "id": 55,
      "rarity": 4,
      "type": 2,
      "group": 4,
      "equip": 3,
      "area": 1,
      "upgrade": 25
    },
    "57": {
      "name": "Akashi",
      "id": 57,
      "rarity": 3,
      "type": 2,
      "group": 8,
      "equip": 2,
      "area": 1,
      "upgrade": 25
    },
    "59": {
      "name": "Hotarumaru",
      "id": 59,
      "rarity": 4,
      "type": 1,
      "group": 8,
      "equip": 3,
      "upgrade": 25
    },
    "61": {
      "name": "Aizen",
      "id": 61,
      "rarity": 1,
      "type": 7,
      "group": 8,
      "equip": 1,
      "area": 1,
      "upgrade": 20
    },
    "65": {
      "name": "Tonbokiri",
      "id": 65,
      "rarity": 3,
      "type": 6,
      "group": 7,
      "equip": 2,
      "area": 4,
      "upgrade": 25
    },
    "73": {
      "name": "Shokudaikiri",
      "id": 73,
      "rarity": 3,
      "type": 2,
      "group": 11,
      "equip": 2,
      "area": 1,
      "upgrade": 25
    },
    "79": {
      "name": "Kousetsu",
      "id": 79,
      "rarity": 4,
      "type": 2,
      "group": 6,
      "equip": 3,
      "area": 1,
      "upgrade": 25
    },
    "81": {
      "name": "Souza",
      "id": 81,
      "rarity": 2,
      "type": 5,
      "group": 6,
      "equip": 2,
      "area": 1,
      "upgrade": 20
    },
    "83": {
      "name": "Sayo",
      "id": 83,
      "rarity": 1,
      "type": 7,
      "group": 6,
      "equip": 1,
      "area": 1,
      "upgrade": 20
    },
    "85": {
      "name": "Kashuu",
      "id": 85,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20
    },
    "87": {
      "name": "Yamatonokami",
      "id": 87,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20
    },
    "89": {
      "name": "Kasen",
      "id": 89,
      "rarity": 2,
      "type": 5,
      "group": 3,
      "equip": 2,
      "area": 1,
      "upgrade": 20
    },
    "91": {
      "name": "Izuminokami",
      "id": 91,
      "rarity": 3,
      "type": 2,
      "group": 3,
      "equip": 2,
      "area": 1,
      "upgrade": 25
    },
    "93": {
      "name": "Mutsunokami",
      "id": 93,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20
    },
    "95": {
      "name": "Yamanbagiri",
      "id": 95,
      "rarity": 2,
      "type": 5,
      "group": 5,
      "equip": 2,
      "area": 1,
      "upgrade": 20
    },
    "97": {
      "name": "Yamabushi",
      "id": 97,
      "rarity": 3,
      "type": 2,
      "group": 5,
      "equip": 2,
      "area": 1,
      "upgrade": 25
    },
    "99": {
      "name": "Horikawa",
      "id": 99,
      "rarity": 2,
      "type": 4,
      "group": 5,
      "equip": 2,
      "area": 1,
      "upgrade": 20
    },
    "101": {
      "name": "Hachisuka",
      "id": 101,
      "rarity": 2,
      "type": 5,
      "group": 10,
      "equip": 2,
      "area": 1,
      "upgrade": 25
    },
    "103": {
      "name": "Urashima",
      "id": 103,
      "rarity": 2,
      "type": 4,
      "group": 10,
      "equip": 2,
      "area": 1,
      "upgrade": 20
    },
    "105": {
      "name": "Nagasone",
      "id": 105,
      "rarity": 2,
      "type": 5,
      "group": 10,
      "equip": 2,
      "area": 1,
      "upgrade": 25
    },
    "116": {
      "name": "Ookurikara",
      "id": 116,
      "rarity": 3,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 20
    },
    "118": {
      "name": "Heshikiri",
      "id": 118,
      "rarity": 2,
      "type": 5,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25
    },
    "122": {
      "name": "Shishiou",
      "id": 122,
      "rarity": 3,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25
    },
    "128": {
      "name": "Doutanuki",
      "id": 128,
      "rarity": 3,
      "type": 2,
      "group": 1,
      "equip": 2,
      "area": 1,
      "upgrade": 25
    },
    "130": {
      "name": "Tsurumaru",
      "id": 130,
      "rarity": 4,
      "type": 2,
      "group": 1,
      "equip": 3,
      "area": 1,
      "upgrade": 25
    },
    "132": {
      "name": "Taroutachi",
      "id": 132,
      "rarity": 3,
      "type": 1,
      "group": 1,
      "equip": 2,
      "upgrade": 25
    },
    "134": {
      "name": "Jiroutachi",
      "id": 134,
      "rarity": 3,
      "type": 1,
      "group": 1,
      "equip": 2,
      "upgrade": 25
    },
    "138": {
      "name": "Otegine",
      "id": 138,
      "rarity": 3,
      "type": 6,
      "group": 1,
      "equip": 2,
      "area": 4,
      "upgrade": 25
    }
  };
  exports.tohken.define.equiptype = {
    "1": "Catapult",
    "2": "Spearmen",
    "3": "Light Infantry",
    "4": "Heavy Infantry",
    "5": "Shieldmen",
    "6": "Light Cavalry",
    "7": "Heavy Cavalry",
    "8": "Elite",
    "9": "Archers",
    "10": "Musketeers",
    "-1": "Horse"
  };
  exports.tohken.define.equiptype_s = {
    "1": "Catapult",
    "2": "Spearmen",
    "3": "Light Infantry",
    "4": "Heavy Infantry",
    "5": "Shieldmen",
    "6": "Light Cavalry",
    "7": "Heavy Cavalry",
    "8": "Elite",
    "9": "Archers",
    "10": "Musketeers"

  };
  exports.tohken.define.equip = {
    "1": {
      "name": "Catapult・Bronze",
      "soldier": 8,
      "type": 1
    },
    "2": {
      "name": "Catapult・Silver",
      "soldier": 9,
      "type": 1
    },
    "3": {
      "name": "Catapult・Gold",
      "soldier": 10,
      "type": 1
    },
    "4": {
      "name": "Spearmen・Bronze",
      "soldier": 7,
      "type": 2
 },
    "5": {
      "name": "Spearmen・Silver",
      "soldier": 7,
      "type": 2
    },
    "6": {
      "name": "Spearmen・Gold",
      "soldier": 8,
      "type": 2
    },
    "7": {
      "name": "Light Infantry・Bronze",
      "soldier": 8,
      "type": 3
    },
    "8": {
      "name": "Light Infantry・Silver",
      "soldier": 9,
      "type": 3
    },
    "9": {
      "name": "Light Infantry・Gold",
      "soldier": 10,
      "type": 3
    },
    "10": {
      "name": "Heavy Infantry・Bronze",
      "soldier": 10,
      "type": 4
    },
    "11": {
      "name": "Heavy Infantry・Silver",
      "soldier": 11,
      "type": 4
    },
    "12": {
      "name": "Heavy Infantry・Gold",
      "soldier": 12,
      "type": 4
    },
    "13": {
      "name": "Shieldmen・Bronze",
      "soldier": 11,
      "type": 5
    },
    "14": {
      "name": "Shieldmen・Silver",
      "soldier": 13,
      "type": 5
    },
    "15": {
      "name": "Shieldmen・Gold",
      "soldier": 15,
      "type": 5
    },
    "16": {
      "name": "Light Cavalry・Bronze",
      "soldier": 9,
      "type": 6
    },
    "17": {
      "name": "Light Cavalry・Silver",
      "soldier": 10,
      "type": 6
    },
    "18": {
      "name": "Light Cavalry・Gold",
      "soldier": 12,
      "type": 6
    },
    "19": {
      "name": "Heavy Cavalry・Bronze",
      "soldier": 11,
      "type": 7
    },
    "20": {
      "name": "Heavy Cavalry・Silver",
      "soldier": 12,
      "type": 7
    },
    "21": {
      "name": "Heavy Cavalry・Gold",
      "soldier": 13,
      "type": 7
    },
    "22": {
      "name": "Elite・Bronze",
      "soldier": 11,
      "type": 8
    },
    "23": {
      "name": "Elite・Silver",
      "soldier": 12,
      "type": 8
    },
    "24": {
      "name": "Elite・Gold",
      "soldier": 13,
      "type": 8
    },
    "25": {
      "name": "Archers・Bronze",
      "soldier": 6,
      "type": 9
    },
    "26": {
      "name": "Archers・Silver",
      "soldier": 7,
      "type": 9
    },
    "27": {
      "name": "Archers・Gold",
      "soldier": 8,
      "type": 9
    },
    "28": {
      "name": "Musketeers・Bronze",
      "soldier": 5,
      "type": 10
    },
    "29": {
      "name": "Musketeers・Silver",
      "soldier": 6,
      "type": 10
    },
    "30": {
      "name": "Musketeers・Gold",
      "soldier": 6,
      "type": 10
    },
	"10001": {
         "name": "01 Oba",
      "soldier": 0,
      "type": -1
    },
    "10002": {
      "name": "02 Mikuniguro",
      "soldier": 0,
      "type": -1
    },
    "10003": {
      "name": "03 Matsukaze",
      "soldier": 0,
      "type": -1
    },
    "10004": {
      "name": "04 Kohibari",
      "soldier": 0,
      "type": -1
    },
    "10005": {
      "name": "05 Takadateguro ",
      "soldier": 0,
      "type": -1
    },
    "10006": {
      "name": "06 Hanakōji",
      "soldier": 0,
      "type": -1
    },
    "10007": {
      "name": "07 Segaiwa",
      "soldier": 0,
      "type": -1
    },
    "10008": {
      "name": "08 Mochizuki ",
      "soldier": 0,
      "type": -1
    }
  };
  exports.tohken.define.area = {
    "1": "Memory of Meiji Restoration",
    "2": "Memory of Edo",
    "3": "Memory of Shokuho",
    "4": "Memory of Sengoku",
    "5": "Memory of Samurai"
  };
  exports.tohken.define.map = {
    "1": {
      "id": "1-1",
      "no": "1",
      "area": "1",
      "name": "Hakodate",
      "star": "1",
      "resource": "-",
      "max_lv": "11",
      "sence": ""
    },
    "2": {
      "id": "1-2",
      "no": "2",
      "area": "1",
      "name": "Aizu",
      "star": "1",
      "resource": "Charcoal",
      "max_lv": "12",
      "sence": ""
    },
    "3": {
      "id": "1-3",
      "no": "3",
      "area": "1",
      "name": "Utsunomiya",
      "star": "1",
      "resource": "Whetstone",
      "max_lv": "13",
      "sence": ""
    },
    "4": {
      "id": "1-4",
      "no": "4",
      "area": "1",
      "name": "Toba",
      "star": "2",
      "resource": "Charcoal・Coolant",
      "max_lv": "20",
      "sence": ""
    },
    "5": {
      "id": "2-1",
      "no": "5",
      "area": "2",
      "name": "Toba",
      "star": "1",
      "resource": "Steel・Whetstone",
      "max_lv": "23",
      "sence": ""
    },
    "6": {
      "id": "2-2",
      "no": "6",
      "area": "2",
      "name": "Edo",
      "star": "1",
      "resource": "Charcoal",
      "max_lv": "26",
      "sence": ""
    },
    "7": {
      "id": "2-3",
      "no": "7",
      "area": "2",
      "name": "Edo(Genroku)",
      "star": "2",
      "resource": "Coolant",
      "max_lv": "29",
      "sence": ""
    },
    "8": {
      "id": "2-4",
      "no": "8",
      "area": "2",
      "name": "Edo(Seige of Osaka Winter Campaign)",
      "star": "2",
      "resource": "Request Token",
      "max_lv": "32",
      "sence": ""
    },
    "9": {
      "id": "3-1",
      "no": "9",
      "area": "3",
      "name": "Sekihagara",
      "star": "2",
      "resource": "Whetstone",
      "max_lv": "40",
      "sence": ""
    },
    "10": {
      "id": "3-2",
      "no": "10",
      "area": "3",
      "name": "Honnouji",
      "star": "2",
      "resource": "Steel・Request Token",
      "max_lv": "42",
      "sence": ""
    },
    "11": {
      "id": "3-3",
      "no": "11",
      "area": "3",
      "name": "Echizen",
      "star": "2",
      "resource": "Charcoal・Steel",
      "max_lv": "47",
      "sence": ""
    },
    "12": {
      "id": "3-4",
      "no": "12",
      "area": "3",
      "name": "Azuchi",
      "star": "3",
      "resource": "Whetstone・Request Token",
      "max_lv": "51",
      "sence": ""
    },
    "13": {
      "id": "4-1",
      "no": "13",
      "area": "4",
      "name": "Nagashino",
      "star": "2",
      "resource": "Coolant、Request Token",
      "max_lv": "55",
      "sence": ""
    },
    "14": {
      "id": "4-2",
      "no": "14",
      "area": "4",
      "name": "Mikatagahara",
      "star": "3",
      "resource": "Whetstone",
      "max_lv": "59",
      "sence": ""
    },
    "15": {
      "id": "4-3",
      "no": "15",
      "area": "4",
      "name": "Okehazama",
      "star": "3",
      "resource": "Charcoal、Coolant、Steel",
      "max_lv": "63",
      "sence": ""
    },
    "16": {
      "id": "4-4",
      "no": "16",
      "area": "4",
      "name": "Kyoto(Tsubakidera)",
      "star": "4",
      "resource": "Coolant、Request Token",
      "max_lv": "68",
      "sence": ""
    },
    "17": {
      "id": "5-1",
      "no": "17",
      "area": "5",
      "name": "Kamakura",
      "star": "3",
      "resource": "Charcoal",
      "max_lv": "78",
      "sence": ""
    },
    "18": {
      "id": "5-2",
      "no": "18",
      "area": "5",
      "name": "Mongol Invasion(Hakata Bay)",
      "star": "4",
      "resource": "Coolant、Charcoal、Steel",
      "max_lv": "82",
      "sence": ""
    },
    "19": {
      "id": "5-3",
      "no": "19",
      "area": "5",
      "name": "Sunomata(Joukyuu War)",
      "star": "5",
      "resource": "Whetstone・Steel",
      "max_lv": "88",
      "sence": ""
    },
    "20": {
      "id": "5-4",
      "no": "20",
      "area": "5",
      "name": "Atsukashiyama",
      "star": "5",
      "resource": "Charcoal、Coolant",
      "max_lv": "99",
      "sence": ""
    }
  };
  exports.tohken.define.conquest = {
    "1": {
      "id": "A1",
      "no": "1",
      "area": "1",
      "name": "Battle of Toba-Fushimi",
      "desc": "Organise a group of level 5 or more and try to win the battle!",
      "time": "0:10:00",
      "lv": 5,
      "need": [],
      "get": {
        "player_exp": "5(10)",
        "sword_exp": "5",
        "bill": null,
        "bonemeal": null,
        "charcoal": "10(15)",
        "steel": "15(22)",
        "coolant": null,
        "file": null,
        "money": null
      }
    },
    "2": {
      "id": "A2",
      "no": "2",
      "area": "1",
      "name": "Social Reform Riot",
      "desc": "Organise a group of level 10 or more with a Tantou-centered party and try to push for Social Reform!",
      "time": "0:30:00",
      "lv": "10",
      "need": [7],
      "get": {
        "player_exp": "15(30)",
        "sword_exp": "15",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": null,
        "coolant": "30(45)",
        "file": "30(45)",
        "money": null
      }
    },
    "3": {
      "id": "A3",
      "no": "3",
      "area": "1",
      "name": "The Battle of Koshu Katsunuma",
      "desc": "Organise a group of level 20 or more with a Wakizashi-centered party and march towards Edo!",
      "time": "0:20:00",
      "lv": "20",
      "need": [4],
      "get": {
        "player_exp": "10(20)",
        "sword_exp": "10",
        "bill": null,
        "bonemeal": null,
        "charcoal": "20(30)",
        "steel": null,
        "coolant": "20(30)",
        "file": null,
        "money": null
      }
    },
    "4": {
      "id": "A4",
      "no": "4",
      "area": "1",
      "name": "Shirakawa Front",
      "desc": "Organise a group of level 30 or more with a Tantou and Wakizashi-centered party and head to Shirakawa Castle!",
      "time": "1:00:00",
      "lv": "30",
      "need": [4, 7],
      "get": {
        "player_exp": "30(60)",
        "sword_exp": "30",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": "60(90)",
        "coolant": null,
        "file": "60(90)",
        "money": null
      }
    },
    "5": {
      "id": "B1",
      "no": "5",
      "area": "2",
      "name": "Koubu Gattai Exercise",
      "desc": "Organise a group of level 50 or more and patrol!",
      "time": "1:30:00",
      "lv": "50",
      "need": [4],
      "get": {
        "player_exp": "50(100)",
        "sword_exp": "50",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": null,
        "coolant": "90(135)",
        "file": "90(135)",
        "money": "Coin Box(Small)"
      }
    },
    "6": {
      "id": "B2",
      "no": "6",
      "area": "2",
      "name": "Auditing the Ashoro Fields",
      "desc": "Organise a group of level 60 or more with a Uchigatana-centered party and attempt to be self-sufficient!",
      "time": "3:00:00",
      "lv": "60",
      "need": [5],
      "get": {
        "player_exp": "100(200)",
        "sword_exp": "120",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": "50(75)",
        "coolant": null,
        "file": "250(375)",
        "money": "Coin Box(Small)"
      }
    },
    "7": {
      "id": "B3",
      "no": "7",
      "area": "2",
      "name": "Great Famine of Kyoho",
      "desc": "Organise a group of level 80 or more with a Tachi-centered party and try to help people!",
      "time": "2:00:00",
      "lv": "80",
      "need": [2],
      "get": {
        "player_exp": "70(140)",
        "sword_exp": "70",
        "bill": "1",
        "bonemeal": null,
        "charcoal": "120(180)",
        "steel": null,
        "coolant": "120(180)",
        "file": null,
        "money": null
      }
    },
    "8": {
      "id": "B4",
      "no": "8",
      "area": "2",
      "name": "World Peace",
      "desc": "Organise a group of level 100 or more, with an Uchigatana and Tachi -centered party and patrol!",
      "time": "2:30:00",
      "lv": "100",
      "need": [2, 5],
      "get": {
        "player_exp": "85(170)",
        "sword_exp": "100",
        "bill": null,
        "bonemeal": "1",
        "charcoal": null,
        "steel": "180(270)",
        "coolant": null,
        "file": "120(180)",
        "money": null
      }
    },
    "9": {
      "id": "C1",
      "no": "9",
      "area": "3",
      "name": "Battle of Mino Province",
      "desc": "Organise a group of level 110 or more and aid the Battle of Sekigahara!",
      "time": "4:00:00",
      "lv": "110",
      "need": [],
      "get": {
        "player_exp": "130(260)",
        "sword_exp": "135",
        "bill": "1",
        "bonemeal": null,
        "charcoal": "130(195)",
        "steel": "240(360)",
        "coolant": null,
        "file": null,
        "money": null
      }
    },
    "10": {
      "id": "C2",
      "no": "10",
      "area": "3",
      "name": "Cause of Revolt",
      "desc": "Organise a group of level 120 or more with an Ōdachi-centered party and go investigate Honnouji!",
      "time": "3:00:00",
      "lv": "120",
      "need": [],
      "get": {
        "player_exp": "100(200)",
        "sword_exp": "110",
        "bill": null,
        "bonemeal": "1",
        "charcoal": null,
        "steel": "100(150)",
        "coolant": "60(90)",
        "file": "150(225)",
        "money": null
      }
    },
    "11": {
      "id": "C3",
      "no": "11",
      "area": "3",
      "name": "Security of Azuchi Castle",
      "desc": "Organise a group of level 130 or more and guard Azuchi Castle!",
      "time": "10:00:00",
      "lv": "130",
      "need": [1],
      "get": {
        "player_exp": "300(600)",
        "sword_exp": "260",
        "bill": null,
        "bonemeal": null,
        "charcoal": "200(300)",
        "steel": null,
        "coolant": "500(750)",
        "file": null,
        "money": "Coin Box(Medium)"
      }
    },
    "12": {
      "id": "C4",
      "no": "12",
      "area": "3",
      "name": "Conquest",
      "desc": "Organise a group of level 140 or more and investigate Ashikaga's survival!",
      "time": "8:00:00",
      "lv": "140",
      "need": [],
      "get": {
        "player_exp": "250(500)",
        "sword_exp": "220",
        "bill": null,
        "bonemeal": "1",
        "charcoal": null,
        "steel": "200(300)",
        "coolant": null,
        "file": "500(750)",
        "money": null
      }
    },
    "13": {
      "id": "D1",
      "no": "13",
      "area": "4",
      "name": "Siege of Nagashino Castle",
      "desc": "Organise a group of level 150 or more and protect the Torii gates!",
      "time": "2:00:00",
      "lv": "150",
      "need": [],
      "get": {
        "player_exp": "75(150)",
        "sword_exp": "75",
        "bill": null,
        "bonemeal": null,
        "charcoal": null,
        "steel": "80(120)",
        "coolant": "100(150)",
        "file": "60(90)",
        "money": null
      }
    },
    "14": {
      "id": "D2",
      "no": "14",
      "area": "4",
      "name": "Westward Operation",
      "desc": "Organise a group of level 180 or more and head towards the provinces of Tōtōmi, Mikawa and Mino!",
      "time": "5:00:00",
      "lv": "180",
      "need": [],
      "get": {
        "player_exp": "160(320)",
        "sword_exp": "155",
        "bill": null,
        "bonemeal": null,
        "charcoal": "100(150)",
        "steel": "380(570)",
        "coolant": null,
        "file": null,
        "money": "Coin Box(Medium)"
      }
    },
    "15": {
      "id": "D3",
      "no": "15",
      "area": "4",
      "name": "Kōsōsun Triple Alliance",
      "desc": "Organise a group of level 200 or more and lend a hand with the peace agreement!",
      "time": "12:00:00",
      "lv": "200",
      "need": [],
      "get": {
        "player_exp": "350(700)",
        "sword_exp": "310",
        "bill": null,
        "bonemeal": null,
        "charcoal": "100(150)",
        "steel": "200(300)",
        "coolant": "500(750)",
        "file": null,
        "money": null
      }
    },
    "16": {
      "id": "D4",
      "no": "16",
      "area": "4",
      "name": "Enryaku-ji Temple on Mt. Hiei",
      "desc": "Organise a group of level 220 or more and patrol the Enryaku-ji Temple!",
      "time": "6:00:00",
      "lv": "220",
      "need": [],
      "get": {
        "player_exp": "200(400)",
        "sword_exp": "170",
        "bill": null,
        "bonemeal": null,
        "charcoal": "150(225)",
        "steel": null,
        "coolant": null,
        "file": "400(600)",
        "money": "Coin Box(Large)"
      }
    },
    "17": {
      "id": "E1",
      "no": "17",
      "area": "5",
      "name": "Defense of Kamakura",
      "desc": "Organise a group of level 240 or more and head towards Kamakura!",
      "time": "12:00:00",
      "lv": "240",
      "need": [],
      "get": {
        "player_exp": "340(680)",
        "sword_exp": "310",
        "bill": null,
        "bonemeal": "1",
        "charcoal": "250(375)",
        "steel": "250(375)",
        "coolant": "250(375)",
        "file": null,
        "money": null
      }
    },
    "18": {
      "id": "E2",
      "no": "18",
      "area": "5",
      "name": "Genkō Bōrui",
      "desc": "Organise a group of level 260 or more with a Yari -centered party and patrol the fortress!",
      "time": "18:00:00",
      "lv": "260",
      "need": [6],
      "get": {
        "player_exp": "530(1060)",
        "sword_exp": "460",
        "bill": null,
        "bonemeal": "1",
        "charcoal": "200(300)",
        "steel": "500(750)",
        "coolant": "300(450)",
        "file": null,
        "money": "Coin Box(Large)"
      }
    },
    "19": {
      "id": "E3",
      "no": "19",
      "area": "5",
      "name": "Yabusame Collection",
      "desc": "Organise a group of level 280 or more with a Naginata-centered party and gather troops from various provinces!",
      "time": "15:00:00",
      "lv": "280",
      "need": [3],
      "get": {
        "player_exp": "430(860)",
        "sword_exp": "385",
        "bill": null,
        "bonemeal": null,
        "charcoal": "350(525)",
        "steel": "200(300)",
        "coolant": "100(150)",
        "file": "250(375)",
        "money": "Coin Box(Large)"
      }
    },
    "20": {
      "id": "E4",
      "no": "20",
      "area": "5",
      "name": "Battle of Ōshū",
      "desc": "Organise a group of level 300 or more with a 1-sword-per-type assembled party and go forth to battle!",
      "time": "24:00:00",
      "lv": "300",
      "need": [-1],
      "get": {
        "player_exp": "700(1400)",
        "sword_exp": "610",
        "bill": "3",
        "bonemeal": null,
        "charcoal": "300(450)",
        "steel": "400(600)",
        "coolant": "500(750)",
        "file": null,
        "money": "Coin Box(Large)"
      }
    }
  };
  return exports.tohken.define.upexp = [0, 100, 300, 700, 1300, 2100, 3100, 4300, 5700, 7300, 9100, 11100, 13300, 15700, 18300, 21100, 24100, 27300, 30700, 34300, 38200, 42400, 46900, 51700, 56800, 62200, 67900, 73900, 80200, 86800, 93700, 100900, 108400, 116200, 124300, 132700, 141400, 150400, 159700, 169300, 179300, 189700, 200500, 211700, 223300, 235300, 247700, 260500, 273700, 287300, 301300, 315700, 330500, 345700, 361300, 377300, 393700, 410500, 427700, 445300, 463400, 482000, 501100, 520700, 540800, 561400, 582500, 604100, 626200, 648800, 672000, 695800, 720200, 745200, 770800, 797000, 823800, 851200, 879200, 907800, 937200, 967400, 998400, 1030200, 1062800, 1096200, 1130400, 1165400, 1201200, 1237800, 1277800, 1327800, 1387800, 1457800, 1537800, 1627800, 1727800, 1827800, 1927800, 0];
})(window);
