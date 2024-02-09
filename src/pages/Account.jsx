import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <UpdateUserDataForm />
      <Row>
        <Heading as="h3">Update user data</Heading>
        <p>Update user data form</p>
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
