import { useState } from "react";

const UserForm = () => {
    // we no longer want to havethem seperate because we have multiple inputs now --- instead we make an object literal and a generic changeHandler
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    
    // const handleChange = (e) => {
    //     setUsername(e.target.value)
    // }

    const initialState = {
      username: "",
      email: "",
      password: "",
    };

    const [formData, setFormData] = useState(initialState)

    const handleChange = e => {
        console.log(e.target.name)
        console.log(e.target.value)

        const { name, value } = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        // if we want the username to remain after submitting ---
        // e.preventDefault();

        // we can also destructure if we want
        // const { username, email, password } = formData
        alert(`Created user: ${formData.username} w/ email ${formData.email} & password ${formData.password}`)
        setFormData(initialState)
    }

    // use onClick in button OR onSubmit in form using the same function
    return (
      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password: </label>
        <input 
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
        />

        <button onClick={handleSubmit}>Add me to the List!</button>
      </form>
    );
}

export default UserForm;