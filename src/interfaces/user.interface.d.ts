
/**
 * Represents a basic user interface with common properties.
 *
 * @interface BaseUser
 * @property {string} _id - The unique identifier of the user.
 * @property {string} email - The email address of the user.
 * @property {string} role - The role or type of the user.
 * @property {string} name - The full name of the user.
 */
export interface BaseUser { 
    _id: string; 
    email: string; 
    role: string; 
    name: string 
};

/**
 * Represents a user interface that extends the base user interface with a token.
 *
 * @interface UserInterface
 * @extends {BaseUser}
 */
export interface UserInterface extends BaseUser {
    token: string;
}