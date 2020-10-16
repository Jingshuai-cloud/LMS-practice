const color = {
  primary: "#4791db",
  secondary: "#e33371",
  error: "#e57373",
  warning: "#ffb74d",
  info: "#64b5f6",
  success: "#81c784",
  white: "white",
  border: "#dadada",
};
export default {
  color,
  backgroundColor: {
    secondary: "#212121",
  },
  gutter: {
    xs: "12px",
    sm: "16px",
    md: "24px",
    lg: "36px",
  },
  border: {
    default: `1px solid ${color.border}`,
  },
  borderRadius: {
    sm: "4px",
  },
  typography: {
    size: {
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "24px",
    },
    weight: {
      light: "300",
      normal: "400",
      bold: "500",
    },
  },
};
