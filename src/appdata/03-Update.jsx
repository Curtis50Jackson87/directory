import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation updateContact(
              $name: String!,
              $phone: String!,
              $email: Int!,
              $addresss: ID!
            )
  {
    updateContact( email: $email, , name: $name, phone: $hone, address: $address, ) {
      name
      picture
      id
    }
  }
`

class UpdateContact extends React.Component {
  constructor(props){
    super(props)
    this.state = { id: "", name: "", phone: "", email: "", address: "", }
  }

  exe1 = ()=>{
    console.log("Update Contact executed");
    console.log(this.state);

    this.props.mutate({
            variables: {
                          id:this.state.id,
                          name:this.state.name,
                        }
    })

    this.setState({ id: "", name: "", genre:"", picture:"", year:"", price:"", stock:"", description:"" })

  }


  render(){
    const mySty = { padding: "10px", textAlign: "left", backgroundColor: "rgba(119, 247, 255, 0.5)", border: "2px solid black" }
    const labelSty = { margin: "0px auto", display:"block", padding: "15px 0px 0px 15px" }
    const inputSty = { width: "100%" }
    const btnSty = { width: "200px", margin: "0px auto", display: "block", height: "45px" }
    const MainSty = { }
    return(
      <div style={MainSty}>

        <h2>Update Contact</h2>
        <p>To Update a Contact  fill all the files then click: <strong>Update Contact</strong></p>
        <p>Note: All inputs must to be fill or the update will not happen.</p>

        <div style={mySty}>
          <form>
            <div> <label style={labelSty}>DB-ID:  </label> <input style={inputSty} type="text" placeholder="DataBase ID..." value={this.state.id} onChange={ (event) => { this.setState({ id: event.target.value }) } } /></div>
            <div> <label style={labelSty}>Name:  </label> <input style={inputSty} type="text" placeholder="Name..." value={this.state.name} onChange={ (event) => { this.setState({ name: event.target.value }) } } /></div>
            <div> <label style={labelSty}>Genre:  </label> <input style={inputSty} type="text" placeholder="genre..." value={this.state.genre} onChange={ (event) => { this.setState({ genre: event.target.value }) } } /></div>
            <div> <label style={labelSty}>Picture:  </label> <input style={inputSty} type="text" placeholder="picture..." value={this.state.picture} onChange={ (event) => { this.setState({ picture: event.target.value }) } } /></div>
            <div> <label style={labelSty}>Year:  </label> <input style={inputSty} type="number" placeholder="year..." value={this.state.year} onChange={ (event) => { this.setState({ year: event.target.value }) } } /></div>
            <div> <label style={labelSty}>Price:  </label> <input style={inputSty} type="number" placeholder="price..." value={this.state.price} onChange={ (event) => { this.setState({ price: event.target.value }) } } /></div>
            <div> <label style={labelSty}>Stock:  </label> <input style={inputSty} type="number" placeholder="stock..." value={this.state.stock} onChange={ (event) => { this.setState({ stock: event.target.value }) } } /></div>
            <div> <label style={labelSty}>Description:  </label> <input style={inputSty} type="text" placeholder="description..." value={this.state.description} onChange={ (event) => { this.setState({ description: event.target.value }) } } /></div>

          </form>

          <br/>

          <button style={btnSty} onClick={()=>{this.exe1()}} >Update Contact</button>
        </div>

      </div>
    )
  }
}

export default graphql(MUTATION)(UpdateContact)
