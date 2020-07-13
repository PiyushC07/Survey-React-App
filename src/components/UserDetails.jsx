import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";

// const intialState = {
//   nameError: "",
//   nameLengthError: "",
//   roleError: "",
//   emailError: "",
//   businessEmailError: "",
//   emailLengthError: "",
// };

export class UserDetails extends Component {
//   state = intialState;

  //     validate = () => {
  //       let  nameError="";
  //    let  nameLengthError="";
  //    let roleError="";
  //     let emailError="";
  //     let businessEmailError="";
  //     let emailLengthError="";

  //         if(!this.props.values.FullName){
  //             nameError = "Full Name is required"
  //         }
  //         if(this.props.values.FullName < 3){
  //             nameLengthError = "Full Name should be greater than 3"
  //         }
  //         if(!this.props.values.Role){
  //             roleError = "Role is required"
  //         }
  //         if(!this.props.values.email){
  //             emailLengthError = "Business E-mail is required"
  //         }
  //         if(!this.props.values.email.includes('@')){
  //             emailError = "E-mail is inValid"
  //         }

  //         if (nameError ||  roleError || emailError || nameLengthError || emailLengthError) {
  //             this.setState({ nameError , roleError ,emailError ,nameLengthError,emailLengthError});
  //             return false;
  //           }
  //           return true;
  //         };

  handleSubmit = (e) => {
    e.preventDefault();
    // const isValid = this.validate();
    // if(isValid){
    //     this.setState({
    //         intialState
    //     })
    this.continue();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  continue = (e) => {
    // e.preventDefault();
    this.props.nextStep();
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
              <div class="md-step-bar-left"></div>
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
            <div class="md-step active ">
              <div class="md-step-circle">
                <span>3</span>
              </div>
              {/* <div class="md-step-title">Part 3</div> */}
              <div class="md-step-bar-left"></div>
              <div class="md-step-bar-right"></div>
            </div>
            <div class="md-step active">
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
              minHeight: "90vh",
              position: "relative",
            }}
          >
            <h2>You are one step away from seeing your Quiz Score!</h2>
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <TextField
                required
                id="standard-required"
                error
                
                hinttext="Enter your Full name"
                floatingLabelText="Full Name"
                onChange={handleChange("FullName")}
                defaultValue={values.FullName}
              />
              {/* <div
                style={{
                  color: "red",
                  textAlign: "left",
                  paddingLeft: "15%",
                  paddingTop: "5px",
                }}
              >
                {this.state.nameError}
                {this.state.nameLengthError}
              </div> */}
              <br />

              <TextField
                required
                id="standard-required"
                error
                
                floatingLabelText="Role"
                onChange={handleChange("Role")}
                defaultValue={values.Role}
              />
              {/* <div
                style={{
                  color: "red",
                  textAlign: "left",
                  paddingLeft: "15%",
                  paddingTop: "5px",
                }}
              >
                {" "}
                {this.state.roleError}
              </div> */}
              <br />
              <TextField
                required
                id="standard-required"
                error
                
                type="email"
                floatingLabelText="Business E-mail"
                onChange={handleChange("Email")}
                defaultValue={values.Email}
              />
              {/* <div
                style={{
                  color: "red",
                  textAlign: "left",
                  paddingLeft: "15%",
                  paddingTop: "5px",
                }}
              >
                {" "}
                {this.state.emailError}
                {this.state.emailLengthError}
              </div> */}
              <br />
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
export default UserDetails;
