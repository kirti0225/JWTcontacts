import React, { useEffect } from "react";
import { Grid, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import StudentItem from "./StudentItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: "5%",
    bottom: "5%", 
  },
}));

const Students = () => {
  const classes = useStyles();
  const students = useSelector((state) => state.student.students);

  const navigate = useNavigate();
  // const [cookies, setCookie, removeCookie] = useCookies([]);
  // useEffect(() => {
  //   const verifyUser = async () => {
  //     if (!cookies.jwt) {
  //       navigate("/login");
  //     } else {
  //       const { data } = await axios.post(
  //         "http://localhost:4000",
  //         {},
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       if (!data.status) {
  //         removeCookie("jwt");
  //         navigate("/login");
  //       } else
  //         toast(`Hi ${data.user} 🦄`, {
  //           theme: "dark",
  //         });
  //     }
  //   };
  //   verifyUser();
  // }, [cookies, navigate, removeCookie]);

  const logOut = () => {
  //  removeCookie("jwt");
    navigate("/register");
  };

  return (
    <>
      <Grid spacing={2} container>
        {students.map((student) => (
          <StudentItem key={student.id} student={student} />
        ))}
      </Grid>
      <Fab
        component={Link}
        to="/students/create"
        color="primary"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
      <div className="private">
        <button style={{
            backgroundColor: "rgb(80, 98, 255)",
            color: "white",
            border: "none",
            padding: "0.5rem",
            fontSize: "1rem",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: "0.3rem",
          }} onClick={logOut} type="button" className="btn btn-dark">Log out</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Students;
