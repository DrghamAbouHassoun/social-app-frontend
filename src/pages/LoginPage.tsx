import { useFormik } from "formik"
import AuthForm from "../components/forms/AuthForm"
import MainInput from "../components/inputs/MainInput"
import MainButton from "../components/buttons/MainButton"

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-gray-100">
      <AuthForm onSubmit={() => { }} title={"Login"}>
        <p className="text-center">You do not have an account <a href="/register" className="text-bold font-bold text-blue-400">Create Account</a></p>
        <div className="my-3">
          <MainInput name="email" type="email" value={formik.values.email} onChange={formik.handleChange} label={{ content: "Email" }} />
        </div>
        <div className="my-3">
          <MainInput name="password" type="password" value={formik.values.password} onChange={formik.handleChange} label={{ content: "Password" }} />
        </div>
        <div className="flex flex-row-reverse w-full my-4">
          <MainButton>SUBMIT</MainButton>
        </div>
      </AuthForm>
    </div>
  )
}

export default LoginPage