import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

type Data = {
  text: string;
  secondary: string;
};

const Item = ({ data, divider }: { data: Data; divider: boolean }) => {
  const { text, secondary } = data;
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary={text} secondary={secondary}></ListItemText>
        </ListItemButton>
      </ListItem>
      {divider && <Divider />}
    </>
  );
};

export const MuiList = () => {
  const data = [
    { text: "item1", secondary: "secondary1" },
    { text: "item2", secondary: "secondary2" },
    { text: "item3", secondary: "secondary3" },
  ];

  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }} ml={10} mt={10}>
      <List sx={{ padding: 0 }}>
        {data.map((d, index) => (
          <Item data={d} divider={index !== data.length - 1} />
        ))}
      </List>
    </Box>
  );
};
