import { useState } from "react";

const NewItemForm = ({ addItem }) => {
    const INITIAL_STATE = {
        name: '',
        qty: ''
    }
    // make a piece of state from our object
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
       
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Product Name: </label>
            <input 
                id="name"
                type="text" 
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
            />
            {/* use a <p> so we can see what is being typed on the screen and can debug if needed */}
            {/* <p>{formData.name}</p> */}

            <label htmlFor="qty">Quantity: {formData.qty} </label>
            <input 
                id="qty"
                type="range" 
                name="qty"
                min="1"
                max="10"
                value={formData.qty}
                onChange={handleChange}
            />
            
            <button>Add Item</button>
        </form>
    )
}

export default NewItemForm;