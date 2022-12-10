import { nanoid } from "nanoid";
import { Enemy, EnemyModel } from "../types/Enemy";
import { Card, cardAnim } from "../../cards/types/Card";

export const enemiesArray: EnemyModel[] = [
  new Enemy(
    nanoid(8),
    "Dog",
    25, //hp
    15, //dmg
    0, //def
    "https://lh3.googleusercontent.com/QKmM5tEsu4WATfR7dVoJdcOlxGiyIdC54ZcW9hOAnnDzoOem3SuhBoLttWwfWfkIktyKF8i4gkhUTxpRUJPQ4gHWp5plqh-n-FpPTA=s0",
    10, //crit chance
    100, //crit dmg
    10, //miss
    0, //dodge
    [
      new Card(
        nanoid(8),
        "Bite",
        "Attack",
        "*",
        30,
        0,
        15,
        2,
        cardAnim.vibrate
      ),
      new Card(nanoid(8), "Waaaf", "Defense", "*", 0, 2, 4, 1, cardAnim.shield),
    ]
  ),
  new Enemy(
    nanoid(8),
    "Clown",
    65, //hp
    5, //dmg
    0, //def
    "https://lh3.googleusercontent.com/nl211myzjUu7Ly6tu-tFlRyRhBkdbXn18sPa9tVihZTJtN4KiCFNfJ7zcTh99EOi20kJSNyH0FXYsvlY6HiQyfu47vhqRfRPwtX1=s0",
    20, //crit chance
    150, //crit dmg
    10, //miss
    20, //dodge
    [
      new Card(
        nanoid(8),
        "Megamana",
        "Utility",
        "*",
        0,
        0,
        -10,
        2,
        cardAnim.buff
      ),
      new Card(
        nanoid(8),
        "Wuuut",
        "Attack",
        "*",
        -10,
        0,
        0,
        1,
        cardAnim.invBuff
      ),
    ]
  ),
  new Enemy(
    nanoid(8),
    "Orc",
    100,
    12,
    0,
    "https://lh3.googleusercontent.com/ycSdMY2JiAyv5mVbRmvmo4E0za2TeFJIUNZSGQBSwe3IHSojV3xIEGqcGmmSPtaTkMMP3cn2Jvvo3kpO0vyLAfWAh2UnJSyMcS9LXQ=s0",
    50,
    50,
    20,
    5,
    [
      new Card(
        nanoid(8),
        "OrcBite",
        "Attack",
        "*",
        40,
        0,
        20,
        2,
        cardAnim.blackout
      ),
    ]
  ),
];
