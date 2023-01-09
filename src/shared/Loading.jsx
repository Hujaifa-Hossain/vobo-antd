import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <ReactLoading type='bars' color="#000" delay={5} />
    </div>
  );
};

export default Loading;