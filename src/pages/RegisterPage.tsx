import { useFormik } from "formik"
import AuthForm from "../components/forms/AuthForm"
import MainInput from "../components/inputs/MainInput"
import MainButton from "../components/buttons/MainButton"

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-gray-100">
      <AuthForm onSubmit={() => { }} title={"Create Account"}>
        <p className="text-center">Already have an account <a href="/login" className="text-bold font-bold text-blue-400">Login</a></p>
        <div className="my-3">
          <MainInput name="name" type="text" value={formik.values.name} onChange={formik.handleChange} label={{ content: "Username:" }} />
        </div>
        <div className="my-3">
          <MainInput name="email" type="email" value={formik.values.email} onChange={formik.handleChange} label={{ content: "Email:" }} />
        </div>
        <div className="my-3">
          <MainInput name="password" type="password" value={formik.values.password} onChange={formik.handleChange} label={{ content: "Password:" }} />
        </div>
        <div className="flex flex-row-reverse w-full my-4">
          <MainButton type="submit">SUBMIT</MainButton>
        </div>
      </AuthForm>
    </div>
  )
}

export default RegisterPage