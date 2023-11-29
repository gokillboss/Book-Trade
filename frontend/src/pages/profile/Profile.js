import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import API from '../../API_Interface/API_Interface';

const ProfilePage = ({ user }) => {
  const [userProfile, setUserProfile] = useState({});
  const [userListings, setUserListings] = useState([]);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Check if user object is valid and has a user_id property
    if (user && user.user_id) {
      // Create an instance of the APIInterface
      const api = new API();

      // Fetch user profile information
      const fetchUserProfile = async () => {
        try {
          const response = await api.getUserById(user.user_id);
          setUserProfile(response);
        } catch (error) {
          console.error('Error fetching user profile:', error);
          setError('Error fetching user profile'); // Set error state
        }
      };

      // Fetch user's listings
      const fetchUserListings = async () => {
        try {
          const response = await api.getUserListings(user.user_id);
          setUserListings(response);
        } catch (error) {
          console.error('Error fetching user listings:', error);
          setError('Error fetching user listings'); // Set error state
        }
      };

      // Call the fetch functions
      fetchUserProfile();
      fetchUserListings();
    } else {
      setError('User data is missing or invalid'); // Set error state for missing user data
    }
  }, [user]);

  if (error) {
    // Render an error message if there's an error
    return (
      <Container>
        <h2 className="mt-5 mb-4">User Profile</h2>
        <p>{error}</p>
      </Container>
    );
  }

  // Render user information and listings if available
  return (
    <Container>
      <h2 className="mt-5 mb-4">User Profile</h2>
      {/* Display user information */}
      <div className="mb-4">
        <h3>{userProfile.username}'s Profile</h3>
        <p>Email: {userProfile.email}</p>
        <p>First Name: {userProfile.first_name}</p>
        <p>Last Name: {userProfile.last_name}</p>
        {/* Add more user information fields as needed */}
      </div>

      {/* Display user's listings in cards */}
      <h3>Listed Books</h3>
      <div className="row">
        {userListings.map((listing) => (
          <div key={listing.listing_id} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{listing.Book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Author: {listing.Book.author}
                </Card.Subtitle>
                <Card.Text>
                  Price: ${listing.price}
                  <br />
                  Condition: {listing.book_condition}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProfilePage;
