import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "../assets/style.css";

const intialState = {
  Question8Error: "",
  Question9Error: "",
  Question10Error: "",
};

export class ThirdPage extends Component {
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
    let Question8Error = "";
    let Question9Error = "";
    let Question10Error = "";

    if (!this.props.values.Question8) {
      Question8Error = "Please Select One Option";
    }
    if (!this.props.values.Question9) {
      Question9Error = "Please Select One Option";
    }
    if (!this.props.values.Question10) {
      Question10Error = "Please Select One Option";
    }
    if (Question8Error || Question9Error || Question10Error) {
      this.setState({ Question8Error, Question9Error, Question10Error });
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
      behavior: "smooth"
    });
  }

  componentDidMount(){
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
              position: "relative",
            }}
          >
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Part 3: Strategic Insight (3 Questions)</h2>
            <p className="para" style={{ color: "#2e4169" }}>
              Long-term engagements are defined by value creation and that is
              possible only when strategic goals are
              <br />
              aligned.
            </p>
            <br />
            <p className="para">
              Would you say your current engagement is aligned to client
              strategic goals for the present and the future?*
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
              {this.state.Question8Error}
            </div>
            <RadioGroup
              className="para"
              aria-label="Question8"
              name="Question8"
              value={values.Question8}
              onChange={handleChange("Question8")}
              row
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel
                value="Partially"
                control={<Radio />}
                label="Partially"
              />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>

            <br />
            <p className="para" style={{ color: "#2e4169" }}>
              Revenue goal setting is the outcome of a complex set of variables,
              including buying unit wise potential,
              <br /> offering wise potential, past numbers, competitor analysis,
              customer goals, regulatory constraints etc.
            </p>
            <br />
            <p className="para">
              Do you have a clear goal setting process in place?*
            </p>
            <div
              style={{
                color: "red",
                textAlign: "left",
                paddingLeft: "15%",
                paddingTop: "5px",
              }}
            >
           
              {this.state.Question9Error}
            </div>
            <RadioGroup
              className="para"
              aria-label="Question9"
              name="Question9"
              value={values.Question9}
              onChange={handleChange("Question9")}
              row
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel
                value="Partially"
                control={<Radio />}
                label="Partially"
              />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>

            <br />
            <p className="para" style={{ color: "#2e4169" }}>
              Annual planning is a critical, time-consuming exercise that
              decides your fate for the year. Being able to
              <br /> build, share, track and govern the plan for a complex,
              global Account, while collaborating with others
              <br />
              and bringing in joint accountabilityto growth is crucial to
              meeting key account goals
            </p>
            <br />
            <p className="para">
              Are you able to prepare, share and track your annual plan smoothly
              with all internal stakeholders?*
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
              {this.state.Question10Error}
            </div>
            <RadioGroup
              className="para"
              aria-label="Question10"
              name="Question10"
              value={values.Question10}
              onChange={handleChange("Question10")}
              row
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel
                value="Partially"
                control={<Radio />}
                label="Partially"
              />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>

            <br />
            <Button
                  
                  color="default"
                  variant="contained"
                  primary={false}
                  onClick={this.back}
                  style={styles1.button}
                >
                  Previous
                </Button>

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

export default ThirdPage;
