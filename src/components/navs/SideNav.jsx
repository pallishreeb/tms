import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React from "react";

const SubMenu = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  // will work later
  const menuItem = [
    {
      id: 1,
      lable: "Shipments",
      children: [
        {
          type: "LTL",
          lable: "LTL Search",
        },
      ],
    },
    {
      id: 2,
      lable: "Accounting1",
    },
    {
      id: 3,
      lable: "Shipments",
      children: [
        {
          type: "LTL",
          lable: "LTL Search",
        },
      ],
    },
  ];

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Shipments" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button component={Link} to="/ltl_search" sx={{ pl: 4 }}>
            <ListItemText primary="LTL Search" />
          </ListItem>
          {/* <ListItem button component={Link} to="/sub-menu/item2" sx={{ pl: 4 }}>
            <ListItemText primary="Sub Menu Item 2" />
          </ListItem> */}
        </List>
      </Collapse>
    </>
  );
};

const SideNav = () => {
  // const drawerWidth = 240;

  return (
    <>
      <Drawer
        sx={{
          width: "16%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
             width: "16%",
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List className="text-white">
          <ListItem
            component={Link}
            to="/"
            button
            className="font-semibold text-lg"
          >
            <h1>TMS</h1>
          </ListItem>
          <SubMenu />
        </List>
      </Drawer>
    </>
  );
};

export default SideNav;
