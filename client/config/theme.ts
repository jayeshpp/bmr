const colors = {
  primary: {
    light: "#FFE244",
    main: "#FECB03",
    dark: "#EEB404",
  },
  secondary: {
    light: "#3D3D3D",
    main: "#2F2F2F",
    dark: "#222222",
  },
  background: {
    light: "#f1f1f1",
    dark: "#222222",
  },
  text: {
    light: "#000000",
    dark: "#ffffff",
  },
  // Add more color palettes as needed
};

const typography = {
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    serif: ["Merriweather", "serif"],
    mono: ["Menlo", "monospace"],
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  // Add more typography settings as needed
};

const spacing = {
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
  // Add more spacing values as needed
};

const theme = {
  colors,
  typography,
  spacing,
};

export default theme;
