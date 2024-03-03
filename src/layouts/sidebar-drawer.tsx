"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

function SidebarDrawer() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    {
      id: 1,
      name: "Macbook Scroll",
      icon: "/assets/menu-icons/next.png",
      url: "/macbook-scroll",
      reference: "https://ui.aceternity.com/components/macbook-scroll"
    },
    {
      id: 2,
      name: "Google Gemini Effect",
      icon: "/assets/menu-icons/next.png",
      url: "/google-gemini-effect",
      reference: "https://ui.aceternity.com/components/google-gemini-effect"
    },
    {
      id: 3,
      name: "3D Card Effect",
      icon: "/assets/menu-icons/next.png",
      url: "3d-card-effect",
      reference: "https://ui.aceternity.com/components/3d-card-effect"
    }
  ]

  const DrawerList = (
    <Box sx={{ width: 250, }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem key={index} disablePadding>
            <Link href={menuItem.url}>
              <ListItemButton>
                <ListItemIcon>
                  <Image src={menuItem.icon} alt="icon" width={30} height={30} />
                </ListItemIcon>
                <ListItemText primary={menuItem.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='bg-black'>
      <Button sx={{ m: 2 }} className='' variant='outlined' onClick={toggleDrawer(true)}>
        <Image className='mr-10' src="/assets/menu-icons/drawer.png" alt="drawer" width={30} height={30} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default SidebarDrawer