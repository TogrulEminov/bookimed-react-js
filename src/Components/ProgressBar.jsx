const Progress_bar = ({ bgcolor, progress }) => {
  const Parentdiv = {
    height: '6px',
    width: '100%',
    backgroundColor: '#f0fdf4',
    borderRadius: 40,
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right',
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
};

export default Progress_bar;
