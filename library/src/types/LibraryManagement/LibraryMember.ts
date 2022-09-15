export interface LibraryMember{
	creation: string
	name: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	First Name : Data	*/
	first_name: string
	/**	Last Name : Data	*/
	last_name?: string
	/**	Full Name : Data	*/
	full_name?: string
	/**	Email Address  : Data	*/
	email_address?: string
	/**	Phone : Data	*/
	phone?: string
}