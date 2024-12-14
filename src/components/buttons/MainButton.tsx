
/**
 * Interface for MainButtonProps, extending React's ButtonHTMLAttributes.
 * This interface is used to define the properties that can be passed to the MainButton component.
 */
export interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * MainButton is a functional component that renders a button with custom styles.
 * It accepts all properties that a standard HTML button can, plus additional properties defined in MainButtonProps.
 *
 * @param props - The properties to be passed to the MainButton component.
 * @returns A JSX element representing a button with custom styles.
 */
const MainButton = ({...props} : MainButtonProps): JSX.Element => {
  return (
    <button 
        {...props} 
        className={`bg-blue-500 text-white rounded p-2 font-bold ${props}`}
    />
  )
}

export default MainButton