// export type Dictionary = Record<string, string>;
export type Dictionary = {
  [key: string]: string;
};

export type CharacterGrid = string[][];

export type InputType = {
  source_language: string;
  word: string;
  character_grid: CharacterGrid;
  word_locations: Dictionary;
  target_language: string;
};

export type Coordinate = {
  x: number;
  y: number;
};
