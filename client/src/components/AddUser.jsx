import React, { useState } from "react";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { addUser } from "../server/api";
import { useNavigate } from "react-router-dom";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

// import { Link } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  birth: "",
  address: "",
  phone: "",
  salary: "",
  debts: "",
  date: "",
};

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const { name, birth, address, phone, salary, debts, date } = user;

  const navigate = useNavigate();

  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all"); // when fish all input take us to the all users page automatically
  };

  const navigateToAll = () => {
    navigate("/all");
  };

  return (
    <Container>
      <a href="#" onClick={navigateToAll}>
        All Users
      </a>
      {/* <Button variant="outlined" onClick={navigateToAll}>
        All Users
      </Button> */}
      <Typography variant="h4">
        <PersonAddAltIcon />
        Add Users
      </Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Birth</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="birth"
          value={birth}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Address</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="address"
          value={address}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Salary</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="salary"
          value={salary}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Debts</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="debts"
          value={debts}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Date</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="date"
          value={date}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addUserDetails()}
        >
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
