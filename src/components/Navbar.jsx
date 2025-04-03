import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <img src={logo} alt="logo" style={{ height: "44px" }} />
      </Link>
      <SearchBar/>
    </Stack>
  );
};

export default Navbar;
