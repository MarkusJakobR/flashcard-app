import { signIn } from "../services/authService";

const handleLogin = async () => {
  const { error } = await signIn(email, password);
  if (error) console.error(error);
};
