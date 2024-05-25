import { Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "70px",
}));

const NavBar = () => {
  const links = [
    { to: "/", label: "All" },
    { to: "/active", label: "Active" },
    { to: "/completed", label: "Completed" },
  ];
  return (
    <>
      <Stack
        direction="row"
        spacing={6}
        width="400px"
        m="auto"
        justifyContent="space-around"
        paddingBottom='10px'
        borderBottom='1px solid #000000'
      >
        {links.map((link) => (
          <Link to={link.to}>
            <Item>{link.label}</Item>
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default NavBar;
