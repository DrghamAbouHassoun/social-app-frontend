import { FormEvent } from "react";

/**
 * Props for the AuthForm component.
 */
export interface AuthFormProps {
  /**
   * Children elements to be rendered inside the form.
   */
  children: JSX.Element | JSX.Element[] | string;

  /**
   * The title of the form.
   */
  title: string;

  /**
   * Event handler for form submission.
   * @param e - The form submission event.
   */
  onSubmit: (e: FormEvent) => void;
}

/**
 * A reusable form component for authentication purposes.
 * @param props - The props for the AuthForm component.
 * @returns - A JSX element representing the AuthForm component.
 */
const AuthForm = ({ children, title, onSubmit } : AuthFormProps): JSX.Element => {
  return (
    <form className="rounded-md shadow-md p-3 bg-white w-[100%] max-w-[350px]" onSubmit={onSubmit} >
        <h1 className="text-3xl font-bold text-blue-500 text-center my-4">{title}</h1>
        {children}
    </form>
  )
}

export default AuthForm