import React from 'react'

function Dashboard() {
  const token = localStorage.getItem("token")
  return (
    <>
      <div>Dashboard</div>
      <h1>UserName</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur hic quam ad? Id consectetur alias cum repudiandae pariatur sapiente reiciendis ullam laborum molestias perspiciatis dolores doloremque aliquam aspernatur nemo ipsam voluptatibus facere laudantium velit dolor nisi unde, sed earum. Magni assumenda doloribus unde tenetur expedita sequi temporibus exercitationem consequuntur perspiciatis!</p>
    </>
  )
}

export default Dashboard