import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {value:''}
  
  this.handleSubmit= this.handleSubmit.bind();
  }
  handleSubmit(event)
  {
    console.log(document.getElementById("date").value);
 var date1 = document.getElementById("date").value;
document.getElementById( 
              "getdate").innerHTML = date1; 
              
      var date3 = document.getElementById("date2").value;        
              document.getElementById( 
              "getdate1").innerHTML = date3; 
  }
  render() 
  {
    return (
      <Container fluid className="container">
        <Header as='h2'>Date & Time Sheet</Header>
        <Form className="form" >
          <Form.Field>
            <label>IN Date</label>
            
  
            <input type="date" name="date" id="date" onChange={this.handleSubmit} />
            
          </Form.Field>
          <Form.Field>
            <label>OUT Date</label>
        
            <input type="date" name="date" id="date2"  onChange={this.handleSubmit}/>
            
          </Form.Field>
         
          
          <Button color="blue" type='submit'>Submit</Button>

        </Form>
        <label id="getdate"></label>
        
         <label id="getdate1"></label>
      </Container>
    )
  }
}