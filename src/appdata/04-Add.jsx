import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation createContact(
              $address: String!,
              $phone: String!,
              $name: String!,
              $picture: String!,
              $email: String!
              )

  {
    createContact( address: $address, phone: $phone, name: $name, email: $email ) {
      address
      phone
      name
      picture
      email

    }
  }
`

class AddContact extends React.Component {
  constructor(props){
    super(props)
    this.state = { name: "", phone:"", email:"", address:"" }
  }

  exe1 = ()=>{
    console.log("Add Contact executed");
    console.log(this.state);

    this.props.mutate({
            variables: {  name:this.state.name ,
                          phone:this.state.phone,
                          email: this.state.email,
                          address:this.state.address }
    })

    this.setState({ name: "", phone:"", email:"", address:"" })

  }


  render(){
    const mySty = { padding: "10px", textAlign: "left", backgroundColor: "rgba(119, 247, 255, 0.5)", border: "2px solid black" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    const btnSty = { width: "200px", margin: "0px auto", display: "block", height: "45px" }
    const MainSty = { }
    return(
      <div style={MainSty}>

        <h2>Add Contact</h2>
        <p>To add a Contact to the DataBase put the information requested then click button <strong>Add Contact</strong></p>

        <div style={mySty}>
          <form>
            <div> <label style={labelSty}>Name:  </label> <input style={inputSty} type="text" placeholder="Name..." value={this.state.name} onChange={ (event) => { this.setState({ name: event.target.value }) } } /></div>
            <div> <label style={labelSty}>phone:  </label> <input style={inputSty} type="text" placeholder="phone..." value={this.state.phone} onChange={ (event) => { this.setState({ phone: event.target.value }) } } /></div>
            <div> <label style={labelSty}>email:  </label> <input style={inputSty} type="text" placeholder="email..." value={this.state.email} onChange={ (event) => { this.setState({ email: event.target.value }) } } /></div>
            <div> <label style={labelSty}>address:  </label> <input style={inputSty} type="text" placeholder="address..." value={this.state.address} onChange={ (event) => { this.setState({ address: event.target.value }) } } /></div>

          </form>

          <br/>

          <button style={btnSty} onClick={()=>{this.exe1()}} >Add Contact</button>
        </div>

      </div>
    )
  }
}

export default graphql(MUTATION)(AddContact)
