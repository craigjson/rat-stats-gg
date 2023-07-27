import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  TextField,
} from "@mui/material";
import { AugmentData } from "../hooks/useGetAugmentData";
import AugmentTableRow from "./AugmentTableRow";
import { makeStyles } from "@mui/styles";

interface AugmentTableProps {
  data: AugmentData[];
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

const AugmentTable: React.FC<AugmentTableProps> = ({ data }) => {
  const classes = useStyles();
  const [sortConfig, setSortConfig] = useState<{
    key: keyof AugmentData;
    direction: "asc" | "desc";
  }>({
    key: "name",
    direction: "asc",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSortChange = (key: keyof AugmentData) => {
    if (sortConfig.key === key) {
      setSortConfig({
        key,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({
        key,
        direction: "asc",
      });
    }
  };

  const sortedData = React.useMemo(() => {
    const { key, direction } = sortConfig;
    const sortedArray = [...data];
    sortedArray.sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    return sortedArray;
  }, [data, sortConfig]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = React.useMemo(() => {
    if (searchTerm === "") {
      return sortedData;
    } else {
      return sortedData.filter((augment) =>
        augment.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }, [sortedData, searchTerm]);

  return (
    <div>
      <TextField
        variant="outlined"
        label="Search Augments"
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: "16px" }}
      />
      <Table className={classes.table}>
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === "name"}
                direction={sortConfig.direction}
                onClick={() => handleSortChange("name")}
              >
                Augment Name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === "average_placement"}
                direction={sortConfig.direction}
                onClick={() => handleSortChange("average_placement")}
              >
                Average Placement
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig.key === "total_matches"}
                direction={sortConfig.direction}
                onClick={() => handleSortChange("total_matches")}
              >
                Total Matches
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((augment, index) => (
            <AugmentTableRow
              key={augment.name}
              augment={augment}
              isAlternateRow={index % 2 === 0}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AugmentTable;
