const { useEffect } = require('react');
const { useNavigate } = require('react-router-dom');

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);
  }, [navigate]);

  return (
    <>
      <div style={{ marginTop: 10 }}>Page not found</div>
    </>
  );
}

export default NotFound;
