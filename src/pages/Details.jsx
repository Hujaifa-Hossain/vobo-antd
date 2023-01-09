import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
      <Card
      size='small'
      title={`${data?.name}'s info`}
      extra={<Link to='/'>Go Back!</Link>}
      style={{
        width: 280,
      }}
    >
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
      <p>Address: {data?.address?.city}</p>
      <p>Company: {data?.company?.name}</p>
      <p>Website: {data?.website}</p>
      <p>Phone: {data?.phone}</p>
    </Card>
    </div>
  );
};

export default Details;