import React, { useState, useEffect } from "react";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { editUser, getUser, getUsers } from "../server/api";
import { useNavigate, useParams } from "react-router-dom";

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
  // actions: "",
};

const EditUsers = () => {
  const [user, setUser] = useState(defaultValue);
  const { name, birth, address, phone, salary, debts, date } = user;
  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    // console.log(response);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const editUserDetails = async () => {
    // const response = await editUser(id, user);
    await editUser(id, user);
    navigate("/all"); // when fish all input take us to the all users page automatically
  };

  return (
    <Container injectFirst>
      <Typography variant="h4">Edit Users</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Birth</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="birth"
          value={birth}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Address</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="address"
          value={address}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Salary</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="salary"
          value={salary}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Debts</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="debts"
          value={debts}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Date</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="date"
          value={date}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          sx={{ background: "#000000", color: "#fff" }}
          onClick={() => editUserDetails()}
        >
          Save Users
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUsers;
