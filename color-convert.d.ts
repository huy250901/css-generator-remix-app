declare module "color-convert" {
  interface ColorConvert {
    hex: {
      rgb: {
        (hex: string): RGB;
        (r: number, g: number, b: number): string;
      };
    };
  }

  export const rgb: ColorConvert;
  export const hex: ColorConvert;
}

interface RGB {
  (r: number, g: number, b: number): string;
  (rgb: RGB): string;
}
