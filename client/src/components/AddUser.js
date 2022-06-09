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

const AddUsers = () => {
  const [user, setUser] = useState(defaultValue);

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

  return (
    <Container>
      <Typography variant="h4">
        <i class="fa-solid fa-user-plus"></i>Add Users
      </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Birth</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="birth" />
      </FormControl>
      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="address" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <InputLabel>Salary</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="salary" />
      </FormControl>
      <FormControl>
        <InputLabel>Debts</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="debts" />
      </FormControl>
      <FormControl>
        <InputLabel>Date</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="date" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Add Users
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUsers;
