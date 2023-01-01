/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// @mui icons
import ErrorIcon from "@mui/icons-material/Error";
import ReplayIcon from "@mui/icons-material/Replay";

// @mui components
import { Box, Typography, Button } from "@mui/material";

const Error = (props) => {
  const { onAction, text, buttonText } = props;

  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <ErrorIcon size="large" color="error" />
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
          <ReplayIcon sx={{ marginRight: "15px" }} />
          {buttonText || "retry"}
        </Button>
      )}
    </Box>
  );
};

Error.defaultProps = {
  onAction: undefined,
  text: undefined,
  buttonText: undefined,
};

Error.propTypes = {
  onAction: PropTypes.func,
  text: PropTypes.text,
  buttonText: PropTypes.text,
};

export default Error;
