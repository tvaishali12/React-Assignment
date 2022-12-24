import { Component } from "react";
class Signup extends Component {
  state = {
    name: "",
    Range: "",
    Date: "",
    City: "",
    Selectgender: "",
    Textarea: "",
    // Selectgender2: "",
  };

  render() {
    return (
      <>
        <div>
          <label>Name : </label>
          <input
            value={this.state.name}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ name: e.target.value });
            }}
            type={"text"}
          />
        </div>
        <br></br>
        {/* -------------------------- */}
        <div>
          <label>Gender : </label>
          <input
            id="male"
            name="Gender"
            value={"male"}
            onChange={(e) => {
              this.setState({ Selectgender: e.target.value });
            }}
            type={"radio"}
          />
          <label for="male">Male</label>
          <input
            id="female"
            name="Gender"
            type={"radio"}
            value={"female"}
            onChange={(e) => {
              this.setState({ Selectgender: e.target.value });
            }}
          />
          <label for="female">Female </label>
        </div>
        <br></br>
        {/* -------------------------- */}
        <div>
          <label>Hobbies : singing </label>
          <input type={"checkbox"} />
          <label>dancing </label>
          <input type={"checkbox"} />
        </div>
        <br></br>
        {/* -------------------------- */}
        <div>
          <label>Textarea : </label>
          <br></br>
          <textarea
            value={this.state.Textarea}
            onChange={(e) => {
              this.setState({ Textarea: e.target.value });
            }}
          ></textarea>
        </div>
        <br></br>
        {/* -------------------------- */}
        <div>
          <label> Volume : </label>
          <br></br>
          <input
            type="range"
            value={this.state.Range}
            onChange={(e) => {
              this.setState({ Range: e.target.value });
            }}
          />
        </div>
        <br></br>
        {/* -------------------------- */}
        <div>
          <label>Date : </label>
          <input
            type="date"
            value={this.state.Date}
            onChange={(e) => {
              this.setState({ Date: e.target.value });
            }}
          />
        </div>{" "}
        <br></br>
        {/* -------------------------- */}
        <div>
          <label>City : </label>
          <select
            value={this.state.City}
            onChange={(e) => {
              this.setState({ City: e.target.value });
            }}
          >
            <option>bhopal</option>
            <option>indore</option>
            <option>sehore</option>
            <option>bhopal</option>
          </select>
        </div>
        <div>
          <p>Name: {this.state.name}</p>
          <p>Range: {this.state.Range}</p>
          <p>City: {this.state.City}</p>
          <p>Date: {this.state.Date}</p>
          <p> Selectgender:{this.state.Selectgender} </p>
          <p>Textarea: {this.state.Textarea}</p>
          {/* <p> Selectgender2:{this.state.Selectgender2} </p> */}
        </div>
      </>
    );
  }
}
export default Signup;
