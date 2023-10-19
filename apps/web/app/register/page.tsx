import AuthLayout from '../../features/auth/components/AuthLayout';
import RegistrationForm from '../../features/auth/components/RegistrationForm';

export default function page(): JSX.Element {
  return (
    <AuthLayout>
      <RegistrationForm />
    </AuthLayout>
  );
}
