import { Link } from 'react-router-dom';
import { Card, Col } from 'antd';
import { EyeFilled } from '@ant-design/icons';

const User = ({ user }) => {
  const { id, name, website, email } = user;

  return (
    <Col xs={24} xl={6}>
      <Card hoverable title={name} size='small' style={{ marginTop: '10px', marginBottom: '10px' }} actions={[
        <Link to={`/users/${id}`}>View Details <EyeFilled key="view" /></Link>
      ]}>
        <p>{email}</p>
        <p>{website}</p>
      </Card>
    </Col>
  );
};

export default User;