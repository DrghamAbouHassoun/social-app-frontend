import React from 'react'

/**
 * Interface for MainInput component properties.
 * Extends React's InputHTMLAttributes to include additional properties.
 */
export interface MainInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label for the input field.
   * @type {{ content?: string }}
   */
  label?: {
      content?: string;
  }
}

/**
* MainInput component.
* A custom input field with optional label.
* @param {MainInputProps} props - Component properties.
* @returns {JSX.Element} - Rendered component.
*/
const MainInput = ({ label,...props }: MainInputProps): JSX.Element => {
return (
  <>
  {label?
  <label className="block text-gray-600 text-sm font-bold mb-1 px-1" htmlFor={props.name}>
      {label?.content}
  </label> : null
  }
  <input 
      className="rounded-md p-1 shadow-sm border border-gray-200 mb-2 w-full"
      {...props} 
  />
  </> 
)
}

export default MainInput