import React, { useState, useEffect } from "react";
// import { useHistory, useLocation } from 'react-router-dom';
import {
  // CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  // CDataTable,
  CRow,
  // CPagination,
  CLink,
  CFormGroup,
  CLabel,
  CInputGroup,
  CInput,
} from "@coreui/react";
import axios from "axios";
import dateFormat from "dateformat";
import { Multiselect } from "multiselect-react-dropdown";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
//       "title": "asdadad",
//       "description": "adsasdadada dadada dad adas dad",
//       "buttonText": "ada",
//       "buttonLink": "http://www.google.com",
//       "image": "uploads/serviceActionCards/ad1-1626080585218.svg",
//       "status": 1,
//       "sortOrder": 1,
const ComfortActionCards = () => {
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const jwtToken = sessionStorage.getItem("token");
  const [actionCards, setActionCards] = useState([]);
  const [serviceActionCards, setServiceActionCards] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const clickOnDelete = (cardId) => {
    confirmAlert({
      title: "Are you sure?",
      message: "You want to delete this item?",
      buttons: [
        {
          label: "Yes, Delete it",
          onClick: () => deleteActionCard(cardId),
        },
        {
          label: "No",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };
  //* call delete api
  const deleteActionCard = (cardId) => {
    // alert(categoryId)
    axios
      .delete(`http://markbran.in/apis/admin/comfort/action-card/` + cardId, {
        headers: {
          "auth-token": jwtToken, //the token is a variable which holds the token
        },
      })
      .then(function (response) {
        setShowAlertSuccess(true);
        setShowAlertDanger(false);
        getServiceActionCards();
        console.log(response);
      })
      .catch(function (error) {
        setShowAlertSuccess(false);
        setShowAlertDanger(true);
        console.log(error);
      });
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("actionCards", actionCards);
    axios
      .patch(`http://markbran.in/apis/admin/comfort/action-card/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "auth-token": jwtToken,
        },
      })
      .then((response) => {
        getServiceActionCards();
        getComfortActionCards();
        setShowAlertSuccess("Cards Saved");
        console.log(response);
      })
      .catch((err) => {
        // console.log(err.response);
        if (err.response) {
          if (err.response.data.errorMessage) {
            setError(err.response.data.errorMessage);
          } else {
            setError("Something went wrong!");
          }
        } else {
          setError("Something went wrong!");
        }
      })
      .finally(() => setLoading(false));
  };
  const getServiceActionCards = () => {
    axios
      .get("http://markbran.in/apis/admin/service-action-card", {
        headers: {
          "auth-token": jwtToken, //the token is a variable which holds the token
        },
      })
      .then(function (response) {
        console.log(response.data.actionCards);
        setServiceActionCards(response.data.actionCards);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const getComfortActionCards = () => {
    axios
      .get("http://markbran.in/apis/admin/comfort/action-card", {
        headers: {
          "auth-token": jwtToken, //the token is a variable which holds the token
        },
      })
      .then(function (response) {
        console.log(response.data.section);
        setTitle(response.data.section.title);
        setActionCards(response.data.section.actionCards);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    getServiceActionCards();
    getComfortActionCards();
  }, []);
  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Service Action Card
            <CLink
              style={{ float: "right" }}
              className="btn btn-success"
              to="/comfort-action/edit"
            >
              Edit Section
            </CLink>
            {/* <small  className="text-muted"> example</small> */}
          </CCardHeader>
          <CCardBody>
            {showAlertSuccess ? (
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                <strong>Saved</strong> Your item has been Saved
                successfully.
                <button
                  onClick={() => setShowAlertSuccess(false)}
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ) : null}
            {showAlertDanger ? (
              <div
                className="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                <strong>Alert</strong> Something went wrong try again later !.
                <button
                  onClick={() => setShowAlertDanger(false)}
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ) : null}
            <CRow>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="category">Title</CLabel>
                  <CInputGroup className="mb-3">
                    <CInput
                      value={title}
                      required
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </CInputGroup>
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <Multiselect
                  options={serviceActionCards} // Options to display in the dropdown
                  selectedValues={serviceActionCards.filter(
                    (i) => actionCards.indexOf(i.id.toString()) !== -1
                  )}
                  // Preselected value to persist in dropdown
                  onSelect={(e) =>
                    setActionCards(e.map((i) => i.id.toString()))
                  } // Function will trigger on select event
                  onRemove={(e) =>
                    setActionCards(e.map((i) => i.id.toString()))
                  } displayValue="title" // Property name to display in the dropdown options
                />
              </CCol>
            </CRow>
            <CRow>
                <CCol>

              <button className="my-4 btn btn-success" onClick={handleSubmit}>
                {loading ? "Loading" : "Save"}
              </button>
                </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ComfortActionCards;
