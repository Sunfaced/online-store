import React, { useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const CustomSelect = ({ onStateChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    onStateChange(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none", // Убираем бордер у Outlined варианта
          },
        }}
        variant="outlined"
      >
        <Select
          sx={{
            fontFamily: "Inter",
            fontWeight: "500",
            textAlign: "left",
            letterSpacing: "0.6px",
            width: "260px",
            "&:hover": {
                backgroundColor: "#7BB899",
              },
          }}
          value={selectedValue}
          onChange={handleChange}
          displayEmpty
          renderValue={(value) => (value !== "" ? value : "СНАЧАЛА ДОРОГИЕ")}
        >
          <MenuItem
            sx={{
              "&:hover": {
                backgroundColor: "#7BB899",
              },
            }}
            value="СНАЧАЛА ДОРОГИЕ"
          >
            СНАЧАЛА ДОРОГИЕ
          </MenuItem>
          <MenuItem
            sx={{
              "&:hover": {
                backgroundColor: "#7BB899",
              },
            }}
            value="СНАЧАЛА НЕДОРОГИЕ"
          >
            СНАЧАЛА НЕДОРОГИЕ
          </MenuItem>
          <MenuItem
            sx={{
              "&:hover": {
                backgroundColor: "#7BB899",
              },
            }}
            value="СНАЧАЛА ПОПУЛЯРНЫЕ"
          >
            СНАЧАЛА ПОПУЛЯРНЫЕ
          </MenuItem>
          <MenuItem
            sx={{
              "&:hover": {
                backgroundColor: "#7BB899",
              },
            }}
            value="СНАЧАЛА НОВЫЕ"
          >
            СНАЧАЛА НОВЫЕ
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
