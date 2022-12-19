import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [
      {
        id: 1,
        firstName: "Dev",
        lastName: "Singh",
        email: "dev@hotmail.com",
        phone: "+911578945326",
        address: "474 Banerjee Fords",
      },
      {
        id: 2,
        firstName: "Subhas",
        lastName: "Sen",
        email: "subhash@yahoo.co.in",
        phone: "+919539284930",
        address: "52520 Bhisham Brooks",
      },
      {
        id: 3,
        firstName: "Daevika",
        lastName: "Singh",
        email: "devika89@gmail.com",
        phone: "+91-917-1416065",
        address: "78079 Patel Park",
      },
      {
        id: 4,
        firstName: "Tina",
        lastName: "Gupta",
        email: "tina453@gmail.com",
        phone: "+916446939697",
        address: "57761 Shreyashi Junctions",
      },
      {
        id: 5,
        firstName: "Arya",
        lastName: "Pandey",
        email: "aarya56@gmail.com",
        phone: "+917044124157",
        address: "860 Gautama Turnpike",
      },
      {
        id: 6,
        firstName: "Chapala",
        lastName: "Tagore",
        email: "Rohan17@gmail.com",
        phone: "+91947960-538",
        address: "300 Chandrabhaga Knoll",
      },
      {
        id: 7,
        firstName: "Raaj",
        lastName: "Ahuja",
        email: "raaje25@yahoo.co.in",
        phone: "+919187520232",
        address: "4560 Dubashi Branch",
      },
      {
        id: 8,
        firstName: "Rajendra",
        lastName: "Ahuja",
        email: "rjendra25@yahoo.co.in",
        phone: "+919187520232",
        address: "4560 Dubashi Branch",
      },
    ],
    student: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  },
  reducers: {
    getStudent: (state, action) => {
      state.student = state.students.find((el) => el.id == action.payload);
    },
    clearStudent: (state) => {
      state.student = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
      };
    },
    addStudent: (state, action) => {
      state.students = [action.payload, ...state.students];
    },
    updateStudent: (state, action) => {
      state.students = state.students.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter((el) => el.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getStudent,
  clearStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
