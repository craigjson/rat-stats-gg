// src/components/AggregateStats.tsx
"use client";
import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
} from "@mui/material";
import { TableSortLabel } from "@mui/material";
import useGetAugmentData from "../hooks/useGetAugmentData";

type AugmentStat = {
  augment: string;
  averagePlacement: number;
  wins: number;
  losses: number;
};

const AggregateStats: React.FC = () => {
  const data = useGetAugmentData();

  const [searchText, setSearchText] = React.useState("");
  const [sortedField, setSortedField] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

  const filteredStats = data.filter((stat) =>
    stat.augment.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSort = (field: keyof AugmentStat) => {
    if (field === sortedField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortedField(field);
      setSortOrder("asc");
    }
  };

  const sortedStats = filteredStats.sort((a, b) => {
    const aValue = Number(a[sortedField as keyof AugmentStat]);
    const bValue = Number(b[sortedField as keyof AugmentStat]);

    if (sortOrder === "asc") {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        Aggregate Augment Statistics
      </Typography>
      <TextField
        label="Search Augment"
        variant="outlined"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        style={{ margin: "1rem 0" }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortedField === "augment"}
                  direction={sortOrder}
                  onClick={() => handleSort("augment")}
                >
                  Augment
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortedField === "averagePlacement"}
                  direction={sortOrder}
                  onClick={() => handleSort("averagePlacement")}
                >
                  Average Placement
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortedField === "wins"}
                  direction={sortOrder}
                  onClick={() => handleSort("wins")}
                >
                  Wins
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortedField === "losses"}
                  direction={sortOrder}
                  onClick={() => handleSort("losses")}
                >
                  Losses
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedStats.map((stat) => (
              <TableRow key={stat.augment}>
                <TableCell>{stat.augment}</TableCell>
                <TableCell>{stat.averagePlacement}</TableCell>
                <TableCell>{stat.wins}</TableCell>
                <TableCell>{stat.losses}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AggregateStats;
