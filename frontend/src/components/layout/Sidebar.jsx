import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import VideocamIcon from "@mui/icons-material/Videocam";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <List>
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>
        

        <ListItemButton component={Link} to="/interview">
          <ListItemIcon>
            <VideocamIcon />
          </ListItemIcon>

          <ListItemText primary="Mock Interview" />
        </ListItemButton>

        <ListItemButton component={Link} to="/reports">
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>

          <ListItemText primary="Reports" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default Sidebar;