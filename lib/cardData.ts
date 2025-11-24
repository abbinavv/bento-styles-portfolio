import type { CardData } from "./types";
import { AboutCard } from "@/app/cards/AboutCard";
import { SocialCard } from "@/app/cards/SocialCard";
import { LocationCard } from "@/app/cards/LocationCard";
import { EducationCard } from "@/app/cards/EducationCard";
import { MediaGalleryCard } from "@/app/cards/MediaCard";
import ThemeCard from "@/app/cards/ThemeCard";

export const cardData: CardData[] = [
  {
    id: "about",
    category: "About",
    size: "2x1",
    component: AboutCard,
    order: 1,
  },
  {
    id: "social",
    category: "Contact",
    size: "1x1",
    component: SocialCard,
    order: 2,
  },
  {
    id: "location",
    category: "About",
    size: "1x1",
    component: LocationCard,
    order: 3,
  },
  {
    id: "theme",
    category: "About",
    size: "1x1",
    component: ThemeCard,
    order: 4,
  },
  {
    id: "education",
    category: "About",
    size: "1x1",
    component: EducationCard,
    order: 5,
  },
  {
    id: "projects",
    category: "Projects",
    size: "2x2",
    component: MediaGalleryCard,
    order: 6,
  },
];
