export interface IBoxShadowProperty {
  id: number;
  shiftRight: number;
  shiftDown: number;
  spread: number;
  blur: number;
  color: string;
  opacity: number;
  inset?: boolean;
}

export interface IShadow {
  id: number;
  shiftRight: number;
  shiftDown: number;
  spread?: number;
  blur: number;
  opacity: number;
  // color: string;
  color: object | string;
  inset?: boolean;
}

// export interface IShadow2 {
//   id: number;
//   shiftRight: number;
//   shiftDown: number;
//   spread: number;
//   blur: number;
//   opacity: number;
//   color: string | object;
//   // color: object | string;
//   inset?: boolean;
// }

export interface IShadow2 {
  id: number;
  shiftRight: number;
  shiftDown: number;
  spread: number;
  blur: number;
  opacity: number;
  color: string;
  // color: object | string;
  inset?: boolean;
}

export const initialBoxShadow: IBoxShadowProperty[] = [
  {
    id: 0,
    shiftRight: 0,
    shiftDown: 19,
    spread: 3,
    blur: 7,
    opacity: 50,
    color: "#000000",
    inset: false,
  },
];

export interface ITextShadowProperty {
  id: number;
  shiftRight: number;
  shiftDown: number;
  blur: number;
  opacity: number;
  color: object | string;
}

export const initialTextshadow: ITextShadowProperty[] = [
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
