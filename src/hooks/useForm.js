import React, { useState } from 'react'

export default function useForm(initialForm) {

    const [formState, setFormState] = useState(initialForm);



    const onInputChange = ({ target }) => {
        // console.log(event.target.value);
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    const onResetForm = () => {

        setFormState(initialForm)
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
