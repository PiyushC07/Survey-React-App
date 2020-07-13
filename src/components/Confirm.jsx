import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import TextField from "material-ui/TextField";
import { List,ListItem } from 'material-ui/List'

export class Confirm extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
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
    const { values } = this.props;
    return (
      <>
        <MuiThemeProvider>
         <List>
             <ListItem 
                 primaryText="Full Name"
                 secondaryText={values.FullName}
             />
               <ListItem 
                 primaryText="Role"
                 secondaryText={values.Role}
             />
               <ListItem 
                 primaryText="E-mail"
                 secondaryText={values.Email}
             />
               <ListItem 
                 primaryText="Question1"
                 secondaryText={values.Question1}
             />
               <ListItem 
                 primaryText="Question2"
                 secondaryText={values.Question2}
             />
               <ListItem 
                 primaryText="Question3"
                 secondaryText={values.Question3}
             />
               <ListItem 
                 primaryText="Question4"
                 secondaryText={values.Question4}
             />
               <ListItem 
                 primaryText="Question5"
                 secondaryText={values.Question5}
             />
               <ListItem 
                 primaryText="Question6"
                 secondaryText={values.Question6}
             />
               <ListItem 
                 primaryText="Question7"
                 secondaryText={values.Question7}
             />
               <ListItem 
                 primaryText="Question8"
                 secondaryText={values.Question8}
             />
               <ListItem 
                 primaryText="Question9"
                 secondaryText={values.Question9}
             />
               <ListItem 
                 primaryText="Question10"
                 secondaryText={values.Question10}
             />
         </List>
          <br />
          <RaisedButton
            primary={false}
            onClick={this.back}
            label="Previous"
            style={styles.button}
          />
          <RaisedButton
            primary={true}
            onClick={this.continue}
            label="Save & Continue"
            style={styles.button}
          />
        </MuiThemeProvider>
      </>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};
export default Confirm;
