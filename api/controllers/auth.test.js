import request from 'supertest';
import index from '../index.js'; // Adjust the path based on your file structure
import User from '../models/User'; // Adjust the path based on your file structure

// Mock the User model methods
jest.mock('../models/User');

describe('Register API', () => {
  it('should register a new user', async () => {
    // Mock the save function to return a resolved promise
    User.prototype.save.mockResolvedValue();

    const response = await request(index)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'testpassword',
      });

    expect(response.status).toBe(200);
    expect(response.text).toBe('User has been created!');

    // Check if the save function of the User model was called
    expect(User.prototype.save).toHaveBeenCalled();
  });

  it('should handle registration error', async () => {
    // Mock the save function to return a rejected promise
    User.prototype.save.mockRejectedValue(new Error('Database error'));

    const response = await request(index)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'testpassword',
      });

    expect(response.status).toBe(500);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Something went wrong!');

    // Check if the save function of the User model was called
    expect(User.prototype.save).toHaveBeenCalled();
  });
});
