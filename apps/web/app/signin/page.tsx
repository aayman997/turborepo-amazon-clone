import AuthLayout from '../../features/auth/components/AuthLayout';
import SigninForm from '../../features/auth/components/SigninForm';

export default function page(): JSX.Element {
  return (
    <AuthLayout>
      <SigninForm />
    </AuthLayout>
  );
}
