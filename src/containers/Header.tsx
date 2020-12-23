import { FunctionComponent } from "react";
import "./Header.scss";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import logo from "../assets/logos/snapflash-logo.png";

const Header: FunctionComponent = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <IconButton color="secondary" aria-label="settings">
        <DeleteIcon />
      </IconButton>
    </header>
  );
};

export default Header;
