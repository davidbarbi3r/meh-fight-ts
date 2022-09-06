import { nanoid } from "nanoid";

import { Card, CardModel, cardAnim } from "../interfaces/Card";

export let cardArray: CardModel[] = [
    new Card(nanoid(8), "MEHHHH", "Attack", "*", 10, 0, 5, 1, cardAnim.vibrate),
    new Card(nanoid(8), "MEHHHH", "Attack", "*", 10, 0, 5, 1, cardAnim.vibrate),
    new Card(nanoid(8), "MEHHHH", "Attack", "*", 10, 0, 5, 1, cardAnim.vibrate),
    new Card(
      nanoid(8),
      "ProtectMeh",
      "Defense",
      "*",
      0,
      15,
      6,
      2,
      cardAnim.shield
    ),
    new Card(
      nanoid(8),
      "ProtectMeh",
      "Defense",
      "*",
      0,
      15,
      6,
      2,
      cardAnim.shield
    ),
    new Card(nanoid(8), "Kecece", "Attack", "*", 15, 5, 10, 2, cardAnim.vibrate),
    new Card(nanoid(8), "Kecece", "Attack", "*", 15, 5, 10, 2, cardAnim.vibrate),
    new Card(
      nanoid(8),
      "UltiMEHHHHH",
      "Attack",
      "*",
      30,
      5,
      10,
      3,
      cardAnim.blackout
    ),
    new Card(nanoid(8), "HEMMMM", "Defense", "*", 0, 10, 5, 1, cardAnim.shield),
    new Card(nanoid(8), "HEMMMM", "Defense", "*", 0, 10, 5, 1, cardAnim.shield),
    new Card(nanoid(8), "HEMMMM", "Defense", "*", 0, 10, 5, 1, cardAnim.shield),
    new Card(
      nanoid(8),
      "ProtectMeh",
      "Defense",
      "*",
      0,
      10,
      5,
      1,
      cardAnim.shield
    ),
    new Card(
      nanoid(8),
      "ProtectMeh",
      "Defense",
      "*",
      0,
      10,
      5,
      1,
      cardAnim.shield
    ),
    new Card(
      nanoid(8),
      "ProtectMeh",
      "Defense",
      "*",
      0,
      10,
      5,
      1,
      cardAnim.shield
    ),
    new Card(nanoid(8), "ReloadMeh", "Utility", "*", 0, 0, -5, 2, cardAnim.buff),
    new Card(nanoid(8), "ReloadMeh", "Utility", "*", 0, 0, -5, 2, cardAnim.buff),
    new Card(
      nanoid(8),
      "ItsOnlyMeh",
      "Attack",
      "*",
      15,
      0,
      10,
      1,
      cardAnim.shake
    ),
    new Card(
      nanoid(8),
      "ItsOnlyMeh",
      "Attack",
      "*",
      15,
      0,
      10,
      1,
      cardAnim.shake
    ),
  ];
  