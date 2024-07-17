import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const loginMutation = async (credentials) => {
    try {
      console.log('Sending credentials:', credentials);
      const response = await axios.post('http://localhost:8080/api/auth/api/login', credentials);
      console.log('Received response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Login request failed:', error);
      throw error;
    }
  };

  const { mutate: login, isLoading } = useMutation(loginMutation, {
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user);
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.error('ERROR', err.response?.data || err.message);
      toast.error(err.response?.data?.message || 'Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}
