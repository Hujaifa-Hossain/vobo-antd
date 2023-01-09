import { Row } from 'antd';
import { Typography } from 'antd';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from '../components/User';

const { Title } = Typography;
const Users = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    setData(data);
    console.log(data)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ margin: '20px' }}>
      <Title level={3} style={{ textAlign: 'center' }}>ALL USERS</Title>


      <Row
        gutter={{
          xs: 16,
          sm: 16,
          md: 24,
          lg: 32,
        }}

      >
        {data?.map((user) => <User key={user.id} user={user} />)}
      </Row>
    </div>
  );
};

export default Users;