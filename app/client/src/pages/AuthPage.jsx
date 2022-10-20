import { Box, TextField } from "@mui/material";
import React from "react";
import { alpha, styled } from "@mui/material/styles";

export default function AuthPage() {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: getComputedStyle(document.documentElement).getPropertyValue(
        "--border-color"
      ),
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: getComputedStyle(
        document.documentElement
      ).getPropertyValue("--border-color"),
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: getComputedStyle(
            document.documentElement
          ).getPropertyValue("--input-bg-color"),
      },
      "&:hover fieldset": {
        borderColor: "red",
      },
      "&.Mui-focused fieldset": {
        borderColor: getComputedStyle(
            document.documentElement
          ).getPropertyValue("--border-color"),
      },
    },
  });
  return (
    <div className="auth-page">
      <div className="auth-page__modal">
        <div className="auth-page__modal__container border-element">
          <div className="logo">SUMO</div>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <CssTextField label="Email"/>
          </Box>
        </div>
      </div>
    </div>
  );
}
