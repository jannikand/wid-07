/* eslint-disable no-unused-vars */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Header({ magnitude, time, setMagnitude, setTime }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" sx={{ bgcolor: "#000000" }}>
        <Toolbar variant="regular">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ marginRight: "10px" }}
          >
            USGS Earthquakes
          </Typography>
          <div style={{ margin: "10px" }}>
            <Typography variant="h8" color="inherit" component="div">
              Select Magnitude
            </Typography>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={magnitude}
              onChange={(event, newmagnitude) => {
                setMagnitude(newmagnitude);
              }}
              aria-label="Platform"
              sx={{ bgcolor: "#FFFFFF" }}
            >
              <ToggleButton value="all" disabled={time === "month"}>
                ALL
              </ToggleButton>
              <ToggleButton value="1.0" disabled={time === "month"}>
                M1.0+
              </ToggleButton>
              <ToggleButton value="2.5">M2.5+</ToggleButton>
              <ToggleButton value="4.5">M4.5+</ToggleButton>
              <ToggleButton value="significant">significant</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div style={{ margin: "10px" }}>
            <Typography variant="h8" color="inherit" component="div">
              Select Time Period
            </Typography>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={time}
              onChange={(event, newtime) => {
                setTime(newtime);
              }}
              aria-label="Platform"
              sx={{ bgcolor: "#FFFFFF" }}
            >
              <ToggleButton value="hour">past hour</ToggleButton>
              <ToggleButton value="day">past day</ToggleButton>
              <ToggleButton value="week">past week</ToggleButton>
              <ToggleButton
                value="month"
                disabled={magnitude === "all" || magnitude === "1.0"}
              >
                past month
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
