import { useFormik } from "formik";
import { React } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddEntryToList } from "../store";
import { ADD_ENTRY } from "../store/slice";

function EntryForm() {
  const navigate = useNavigate();
  const list = useSelector((state) => state.list.value);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
    },
    onSubmit: (values) => {
      if (values.firstName && values.lastName && values.phone) {
        values.name = values.firstName + " " + values.lastName;
        dispatch(ADD_ENTRY(AddEntryToList(list, values)));
        navigate("/list");
      } else {
        alert("Please enter all mandatory data");
      }
    },
  });

  return (
    <div className="card_cntr">
      <ul className="card">
        <h1>Add new entry</h1>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />

          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />

          <li className="cardFooter">
            <button className="editBtn submit" type="submit">
              Submit
            </button>
            <button className="deleteBtn cancel" type="button">
              <NavLink to="/list">cancel</NavLink>
            </button>
          </li>
        </form>
      </ul>
    </div>
  );
}

export default EntryForm;
