export interface BoxShadowProperty {
  id: any;
  shiftRight: number;
  shiftDown: number;
  spread: number;
  blur: number;
  color: any;
  opacity: number;
  inset: boolean;
}

export const initialBoxShadow: BoxShadowProperty[] = [
  {
    shiftRight: 0,
    shiftDown: 19,
    spread: 3,
    blur: 7,
    opacity: 0,
    color: {
      hue: 120,
      brightness: 0,
      saturation: 1,
    },
    inset: false,
    id: 0,
  },
];

export interface TextShadowProperty {
  id: any;
  shiftRight: number;
  shiftDown: number;
  blur: number;
  opacity: number;
  color: any;
}

export const initialTextshadow: TextShadowProperty[] = [
  {
    id: 0,
    shiftRight: 0,
    shiftDown: 19,
    blur: 7,
    opacity: 0,
    color: {
      hue: 120,
      brightness: 0,
      saturation: 1,
    },
  },
];
