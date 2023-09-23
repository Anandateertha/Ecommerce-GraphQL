import React from 'react'
import { useQuery, gql } from '@apollo/client';

const query = gql`
    query GetAllUsers{
        getUsers{
            id
            name
            email
            address
        }
    }
`

const Home = () => {

    const { data, loading } = useQuery(query)
    if (loading) {
        return <h1>Loading ....</h1>
    }
    return (
        <div className='container row mx-auto'>
            <h1 style={{textAlign:'center'}} className='my-3'>Name of Users of Ecommerce Store</h1>
            {data.getUsers.map(user =>

                <div className='col-md-3'>
                    <div className="card my-1" style={{height:"500px"}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ38pkAVrHje-FGYRMuc03mXKq2No5qtmgtGrMIG-Y1gjbJqdhuU9hWQ8mEYWINvh97nU&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Name : {user.name}</h5>
                            <p className="card-text">Email : {user.email}</p>
                            <p className="card-text">Address : {user.address}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home