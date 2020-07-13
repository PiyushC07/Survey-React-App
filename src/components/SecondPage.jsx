import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "../assets/style.css";

const intialState = {
  Question4Error: "",
  Question5Error: "",
  Question6Error: "",
  Question7Error: "",
};

export class SecondPage extends Component {
  state = intialState;

  continue = (e) => {
    // e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  validate = () => {
    let Question4Error = "";
    let Question5Error = "";
    let Question6Error = "";
    let Question7Error = "";

    if (!this.props.values.Question4) {
      Question4Error = "Please Select One Option";
    }
    if (!this.props.values.Question5) {
      Question5Error = "Please Select One Option";
    }
    if (!this.props.values.Question6) {
      Question6Error = "Please Select One Option";
    }
    if (!this.props.values.Question7) {
      Question7Error = "Please Select One Option";
    }
    if (Question4Error || Question5Error || Question6Error || Question7Error) {
      this.setState({
        Question4Error,
        Question5Error,
        Question6Error,
        Question7Error,
      });
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

  render() {
    const styles = {
      white: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
    };
    const { values, handleChange } = this.props;
    return (
      <>
        <MuiThemeProvider>
          <div class="md-stepper-horizontal orange">
            <div class="md-step active ">
              <div class="md-step-circle">
                <span>1</span>
              </div>
              {/* <div class="md-step-title">Part 1</div> */}
              <div class="md-step-bar-left "></div>
              <div class="md-step-bar-right"></div>
            </div>
            <div class="md-step active ">
              <div class="md-step-circle">
                <span>2</span>
              </div>
              {/* <div class="md-step-title">Part 2</div> */}
              <div class="md-step-bar-left"></div>
              <div class="md-step-bar-right"></div>
            </div>
            <div class="md-step ">
              <div class="md-step-circle">
                <span>3</span>
              </div>
              {/* <div class="md-step-title">Part 3</div> */}
              <div class="md-step-bar-left"></div>
              <div class="md-step-bar-right"></div>
            </div>
            <div class="md-step">
              <div class="md-step-circle">
                <span>4</span>
              </div>
              {/* <div class="md-step-title">User Details</div> */}
              <div class="md-step-bar-left"></div>
              <div class="md-step-bar-right"></div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: styles.black(0.05),
              minHeight: "100vh",
              //   position: "relative",
            }}
          >
            <form onSubmit={this.handleSubmit}>
              <div class="container">
                <h2 className="title">
                  Part 2: Relationship Strength (2 Questions)
                </h2>
                <p className="para" style={{ color: "#2e4169" }}>
                  Knowing where your current relationship is categorized helps
                  you trigger a forward action plan for
                  <br /> success. The investment you will make on your key
                  accounts begins with knowing where your current
                  <br /> relationship stands - are you a tactical vendor, a
                  strategic partner or somewhere in between?
                </p>
                <br />
                <p className="para">
                  Have you conducted an objective assessment of your
                  relationship strength?
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
                  {this.state.Question4Error}
                </div>
                <RadioGroup
                  className="para"
                  aria-label="Question4"
                  name="Question4"
                  value={values.Question4}
                  onChange={handleChange("Question4")}
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
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>

                <br />
                <p className="para" style={{ color: "#2e4169" }}>
                  Key account management is all about knowing the right people
                  in the account, and leveraging the right
                  <br /> relationships at the right time for the right
                  opportunity. Leveraging the formal and informal affiliations
                  <br /> with key contacts can make all the difference.
                </p>
                <p className="para">How well do you know your Key Contacts:</p>

                <br />
                <p className="para">
                  We have a detailed customer contact hierarchy/ Organizational
                  Chart*
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
                  {this.state.Question5Error}
                </div>
                <RadioGroup
                  className="para"
                  aria-label="Question5"
                  name="Question5"
                  value={values.Question5}
                  onChange={handleChange("Question5")}
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
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>

                <br />

                <p className="para">
                  We know who are the gatekeepers/ decision Makers
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
                  {this.state.Question6Error}
                </div>
                <RadioGroup
                  className="para"
                  aria-label="Question6"
                  name="Question6"
                  value={values.Question6}
                  onChange={handleChange("Question6")}
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
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>

                <br />
                <p className="para">
                  We know the political map- influencers/ supporters/ detractors
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
                  {this.state.Question7Error}
                </div>
                <RadioGroup
                  className="para"
                  aria-label="Question7"
                  name="Question7"
                  value={values.Question7}
                  onChange={handleChange("Question7")}
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
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>

                <br />
                <RaisedButton
                  primary={false}
                  onClick={this.back}
                  label="Previous"
                  style={buttonStyle.button}
                />

                <RaisedButton
                  type="submit"
                  primary={true}
                  label="Next"
                  style={buttonStyle.button}
                />
              </div>
            </form>
          </div>
        </MuiThemeProvider>
      </>
    );
  }
}

const buttonStyle = {
  button: {
    margin: 15,
  },
};

export default SecondPage;
