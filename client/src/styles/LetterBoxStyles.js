import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// Baskomponent för alla bokstavsrutor
export const BaseTile = styled(Box)({
  width: 50,
  height: 50,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  borderRadius: "4px",
  transition: "all 0.3s ease",
});

// Specifika varianter
export const CorrectTile = styled(BaseTile)({
  backgroundColor: "#4CAF50",
  color: "white",
  border: "2px solid #4CAF50",
});

export const MisplacedTile = styled(BaseTile)({
  backgroundColor: "#FF9800",
  color: "white",
  border: "2px solid #FF9800",
});

export const IncorrectTile = styled(BaseTile)({
  backgroundColor: "#f6330a",
  color: "white",
  border: "2px solid #f6330a",
});

export const EmptyTile = styled(BaseTile, {
  shouldForwardProp: (prop) => prop !== "hasLetter",
})(({ theme, hasLetter }) => ({
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  border: "2px solid",
  borderColor: hasLetter
    ? theme.palette.primary.main
    : theme.palette.text.disabled,
}));
