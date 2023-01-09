import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{fontSize: '40px', textAlign: 'center', height: '100vh', margin: 'auto, 10px'}} id="error-page">
      <h1>Oops!</h1>
      <a href='http://localhost:3000/'>Go Back!</a>
    </div>
  );
};

export default NotFound;