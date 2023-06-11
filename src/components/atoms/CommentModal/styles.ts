import { styled } from "@mui/material/styles";
import Sheet from "react-modal-sheet";

export const SheetContainer = styled(Sheet.Container)`
  height: calc(100% - env(safe-area-inset-top) - 300px) !important;
`;
