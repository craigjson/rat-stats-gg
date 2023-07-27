import React from "react";
import { TableRow, TableCell } from "@mui/material";
import { AugmentData } from "../hooks/useGetAugmentData";
import { makeStyles } from "@mui/styles";

interface AugmentTableRowProps {
  augment: AugmentData;
  isAlternateRow: boolean;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderCollapse: "collapse",
  },
  tableHeader: {
    background: "#3f51b5",
    "& th": {
      padding: "12px 16px",
      borderBottom: "1px solid #ddd",
      textAlign: "left",
      fontWeight: "bold",
      color: "#fff",
    },
  },
  tableRow: {
    "&:nth-of-type(odd)": {
      background: "#e8eaf6",
    },
    "& td": {
      padding: "12px 16px",
      borderBottom: "1px solid #ddd",
      color: "#444",
    },
  },
});

const AugmentTableRow: React.FC<AugmentTableRowProps> = ({
  augment,
  isAlternateRow,
}) => {
  const classes = useStyles();

  return (
    <TableRow className={classes.tableRow}>
      <TableCell>{augment.name}</TableCell>
      <TableCell>{Number(augment.average_placement).toFixed(3)}</TableCell>
      <TableCell>{augment.total_matches}</TableCell>
    </TableRow>
  );
};

export default AugmentTableRow;
