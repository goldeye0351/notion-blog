import { SignUp } from "@clerk/nextjs";
 
const SignUpPage = () => (<div className=" w-screen h-screen m-auto items-center justify-center  flex text-gray-200">
  <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
);
export default SignUpPage;