import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import { axiosApi } from '../../axiosApi';
import { ListItem, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router';


export const NavBar = () => {

  const [categories, setCategories] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategoriesList = async() => {
      try {
        const response = await axiosApi('/categories');
        const categoriesData = response.data;
        setCategories(categoriesData);
      } catch (e) {
        console.log(e);
      }
    }
    getCategoriesList();
  },[])

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
      <List>
        {
          categories.map((category) => (
            <ListItem key={category}>
              <ListItemButton onClick={() => navigate(`/${category}`)}>
                {category}
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>

    </Box>
  );

  return (
    <div>
      <Drawer open variant='permanent'>
        {DrawerList}
      </Drawer>
    </div>
  );
}