import React, { Component } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import UserDetails from "./UserDetails";
import Confirm from "./Confirm";
import Success  from "./Success";

export class UserPage extends Component {
  state = {
    step: 1,
    FullName: "",
    Role: "",
    Email: "",
    Question1: "",
    Question2: "",
    Question3: "",
    Question4: "",
    Question5: "",
    Question6: "",
    Question7: "",
    Question8: "",
    Question9: "",
    Question10: "",
  };
  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  //Previous Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  onValueChange(event) {
    this.setState({
      Question1: event.target.value,
    });
  }
  render() {
    const { step } = this.state;
    const {
      FullName,
      Role,
      Email,
      Question1,
      Question2,
      Question3,
      Question4,
      Question5,
      Question6,
      Question7,
      Question8,
      Question9,
      Question10,
    } = this.state;
    const values = {
      FullName,
      Role,
      Email,
      Question1,
      Question2,
      Question3,
      Question4,
      Question5,
      Question6,
      Question7,
      Question8,
      Question9,
      Question10,
    };

    switch (step) {
      case 1:
        return (
          <FirstPage
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            onValueChange={this.onValueChange}
            values={values}
          />
        );
      case 2:
        return (
          <SecondPage
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return (
          <ThirdPage
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
        case 6 :
            return(
                <Success/>
            )
      default:
    }
  }
}

export default UserPage;
