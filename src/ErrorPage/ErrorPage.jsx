
import { useNavigate } from 'react-router'; // Optional if using React Router

const ErrorPage = () => {
  const navigate = useNavigate(); // Optional if using React Router

  const handleGoBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">The page you are looking for does not exist or has been moved.</p>
      <button
        className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
