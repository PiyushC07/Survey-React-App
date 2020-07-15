import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "../assets/style.css";

const intialState = {
  Question1Error: "",
  Question2Error: "",
  Question3Error: "",
};

export class FirstPage extends Component {
  state = intialState;

  continue = (e) => {
    // e.preventDefault();
    this.props.nextStep();
  };

  validate = () => {
    let Question1Error = "";
    let Question2Error = "";
    let Question3Error = "";

    if (!this.props.values.Question1) {
      Question1Error = "Please Select One Option";
    }
    if (!this.props.values.Question2) {
      Question2Error = "Please Select One Option";
    }
    if (!this.props.values.Question3) {
      Question3Error = "Please Select One Option";
    }
    if (Question1Error || Question2Error || Question3Error) {
      this.setState({ Question1Error, Question2Error, Question3Error });
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(intialState);
      this.continue();
    }
  };
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  componentDidMount() {
    this.scrollToTop();
  }

  render() {
    const styles = {
      white: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
    };
    const { values, handleChange } = this.props;
    return (
      <>
        <MuiThemeProvider>
          <div
            style={{
              backgroundColor: styles.black(0.05),
              minHeight: "90vh",
              // position: "relative",
            }}
          >
            <div>
              <form onSubmit={this.handleSubmit}>
                <h2 className="title">
                  Part 1: Whitespace & Opportunity Awareness (3 Questions)
                </h2>
                <div className="container">
                  <p className="para" style={{ color: "#2e4169" }}>
                    Your B2B key accounts are typically large, complex, global
                    accounts with multiple ‘buying units.Usually a function,
                    department, geography or their combination. Do you have
                    visibility into these buying units as you drive your account
                    planning?
                  </p>
                  <br />
                  <p className="para">
                    Have you identified all the unique buying units within your
                    customer’s global organisation?
                  </p>
                  <div
                    style={{
                      color: "red",
                      textAlign: "left",
                      paddingLeft: "15%",
                      paddingTop: "5px",
                    }}
                  >
                    {" "}
                    {this.state.Question1Error}
                  </div>
                  <RadioGroup
                    className="para"
                    aria-label="Question"
                    name="Question1"
                    value={values.Question1}
                    onChange={handleChange("Question1")}
                    row
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="Partially"
                      control={<Radio />}
                      label="Partially"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>

                  <br />
                  <p className="para" style={{ color: "#2e4169" }}>
                    Key account growth comes from your account manager’s ability
                    to effective cross-sell & up-sell into the account.
                  </p>
                  <br />
                  <p className="para">
                    Do you have visibility into where your account managers can
                    align new offerings across each of the customer’s buying
                    Units?
                  </p>
                  <div
                    style={{
                      color: "red",
                      textAlign: "left",
                      paddingLeft: "15%",
                      paddingTop: "5px",
                    }}
                  >
                    {" "}
                    {this.state.Question2Error}
                  </div>
                  <RadioGroup
                    className="para"
                    aria-label="Question2"
                    name="Question2"
                    value={values.Question2}
                    onChange={handleChange("Question2")}
                    row
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="Partially"
                      control={<Radio />}
                      label="Partially"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>

                  <br />
                  <p className="para" style={{ color: "#2e4169" }}>
                    Knowing where competitors are embedded within your key
                    accounts and identifying your wallet share helps uncover
                    opportunities for growth and value
                    <br /> creation.
                  </p>
                  <br />
                  <p className="para">
                    Have you successfully mapped your competitors to buying
                    units within your customer organization?
                  </p>
                  <div
                    style={{
                      color: "red",
                      textAlign: "left",
                      paddingLeft: "15%",
                      paddingTop: "5px",
                    }}
                  >
                    {" "}
                    {this.state.Question3Error}
                  </div>
                  <RadioGroup
                    className="para"
                    aria-label="Question3"
                    name="Question3"
                    value={values.Question3}
                    onChange={handleChange("Question3")}
                    row
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="Partially"
                      control={<Radio />}
                      label="Partially"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </div>
                <br />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  primary={true}
                  style={styles1.button}
                >
                  Next
                </Button>
              </form>
            </div>
          </div>
        </MuiThemeProvider>
      </>
    );
  }
}

const styles1 = {
  button: {
    margin: 15,
  },
};

export default FirstPage;
