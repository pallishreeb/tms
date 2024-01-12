import React, { useState } from "react";
import {
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Drawer,
  List,
  CssBaseline,
  ListItem,
  Box,
  AppBar,
  Toolbar,
  Typography,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SearchForm from "../SearchForm";
import { Outlet } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SideNav = () => {
  const drawerWidth = 240;
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

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
  ];
  return (
    <>
      <div className="w-screen h-screen bg-slate-800">
        <Box sx={{ display: "flex" }}>
          {/* <CssBaseline /> */}
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                onClick={handleToggle}
              >
                TMS
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            open={open}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List>
                {menuItem.map((item, index) => (
                  <>
                    {item.children ? (
                      <>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={item.children && <ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>Accordion 1</Typography>
                          </AccordionSummary>
                          {item.children && (
                            <>
                              <AccordionDetails>
                                <Typography>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Suspendisse malesuada lacus
                                  ex, sit amet blandit leo lobortis eget.
                                </Typography>
                              </AccordionDetails>
                            </>
                          )}
                        </Accordion>
                      </>
                    ) : (
                      <>
                        <ListItem key={index} disablePadding>
                          <ListItemButton>
                            {/* <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon> */}
                            <ListItemText primary={item.lable} />
                          </ListItemButton>
                        </ListItem>
                      </>
                    )}
                  </>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <div>jaya</div>
            {/*           
            <SearchForm /> */}
            {/* <main>
              <Outlet />
            </main> */}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default SideNav;
