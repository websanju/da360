// types/aiTools.ts

export interface Tool {
  name: string;
  logo: string;
}

export type ToolCategories = {
  [category: string]: Tool[];
};

export type CategoryName = keyof ToolCategories;
