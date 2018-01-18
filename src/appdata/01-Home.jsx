import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Template from "./06-Template"

class ISearch extends React.Component {
  constructor(props){
    super(props)
    this.state = { query: "" }
  }

  render() {
    console.log(this.props.data.allContacts);
    const { loading, allContacts } = this.props.data

    const inputSt = { backgroundColor: "rgb(200, 184, 247)", width: "50%", height: "40px", marginBottom: "10px", paddingLeft: "7px" }
    const pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
    return(
      <div style={pageSty}>
        <h2>Search Contacts</h2>
          <p><strong>To find a Contact type one of the following:</strong> Name</p>

          <input style={inputSt} type="search" placeholder="Seach Here..." value={this.state.query}
            onChange={ (event) => { this.setState({ query: event.target.value }) } } />

          {
            !loading && allContacts
            .filter((person)=>{ return ( (`${person.name} ${person.phone} ${person.address} ${person.email}`)
            .toLowerCase().includes(this.state.query.toLowerCase()) ) })

            .map((person)=>{ return( <Template key={person.id} id={person.id} name={person.name} phone={person.phone}
            address={person.address} email={person.email} /> ) })
          }

      </div>
    )
  }
}

const QUERY = gql`
  query {
    allContacts{
    address
    email
    id
    name
    phone
    }
  }
`

export default graphql(QUERY)(ISearch)
