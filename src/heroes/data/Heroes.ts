import { nanoid } from "nanoid";
import { Hero, HeroModel } from "../types/Hero";

export const heroArray: HeroModel[] = [
  new Hero(
    nanoid(8),
    "Dumpling",
    60,
    12,
    0,
    "https://lh3.googleusercontent.com/uOD5AHRwrKRb28S-0M27KjN3e0I39D6-SLEi8t3OyykPXFFdATuXUTXlQEWPy1kyG1UMcnbA4V2wss31JzVIWsIa1rhIu0bxrIg6pg4=w600",
    5,
    10,
    0,
    4,
    80
  ),
  new Hero(
    nanoid(8),
    "Wizard",
    100,
    10,
    0,
    "https://lh3.googleusercontent.com/DLTSPz6fjn3v_gMNw5LNokVtgGGlG5WG5LI4xI6braFDyLz3ODcoljHwzzyGwyg77CTgFI-J-6o-R5ZaRsiPjWqhOutyeRNqbyJ9GaU=w600",
    0,
    20,
    0,
    5,
    50
  ),
  new Hero(
    nanoid(8),
    "ElonMeh",
    120,
    8,
    0,
    "https://lh3.googleusercontent.com/FTV_NRYx9_dxUJE8qXjzYw1kqvU12FcysKw5dDbDE8OEsNh1_CxWT_pYDMe7fbsyGLO726gTOWw-ekhYS2OwWJcKu8JlyjQRBwrOpw=w600",
    30,
    5,
    5,
    6,
    100
  ),
  new Hero(
    nanoid(8),
    "OG meh",
    120,
    11,
    0,
    "https://lh3.googleusercontent.com/mUHPCSkCjL1zKHklmbDSmK6xz_Z424A2yQuLEqRI9dvTnXrMN4yKMr-_uyzY5T5zH2brAPquw5vIU94J3XMQpejfelzwNSuM6AhK=w600",
    5,
    10,
    10,
    3,
    100
  ),
];
