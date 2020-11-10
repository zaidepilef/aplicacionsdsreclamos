import React from 'react'
import { useForm } from 'react-hook-form';
import { TextFieldHook } from 'util/ReactHookForm'

const SearchInput = ({ setQueryInput }) => {

    const { handleSubmit, control, errors } = useForm()

    const handleSearch = (data) => {
        setQueryInput(data.query)
    }

    return (
        <form onSubmit={handleSubmit(handleSearch)}>
            <TextFieldHook
                name="query"
                label="Buscar"
                variant="outlined"
                margin="dense"
                control={control}
                errors={errors}
                isRequired={false}
            />
        </form>
    )
}

export default SearchInput
