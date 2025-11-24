export type CardSize = "1x1" | "2x1" | "1x2" | "2x2";

export type CardCategory = "All" | "About" | "Projects" | "Media" | "Contact";

export interface CardData {
  id: string;
  category: CardCategory;
  size: CardSize;
  component: React.ComponentType<Record<string, never>>;
  order: number;
}

export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
