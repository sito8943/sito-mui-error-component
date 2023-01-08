/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// @mui icons
import { Error, Replay } from "@mui/icons-material";

// @mui components
import { Box, Typography, Button } from "@mui/material";

const ErrorComponent = (props) => {
  const { onAction, text, buttonText } = props;

  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Error size="large" color="error" />
      <Typography
        sx={{ marginTop: "15px" }}
        color="inherit"
        variant="subtitle1"
      >
        {text || "Something went wrong!"}
      </Typography>
      {onAction && (
        <Button
          color="inherit"
          type="submit"
          onClick={onAction}
          sx={{ marginTop: "15px" }}
        >
          <Replay sx={{ marginRight: "15px" }} />
          {buttonText || "retry"}
        </Button>
      )}
    </Box>
  );
};

ErrorComponent.defaultProps = {
  onAction: undefined,
  text: undefined,
  buttonText: undefined,
};

ErrorComponent.propTypes = {
  onAction: PropTypes.func,
  text: PropTypes.text,
  buttonText: PropTypes.text,
};

export default Error;
