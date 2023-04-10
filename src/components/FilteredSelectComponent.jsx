import {useEffect, useState} from "react";
import {getAuthToken} from "../util/Auth";
import {InputLabel, Select, MenuItem} from "@mui/material";

export const FilteredSelectComponent = ({ endpoint, label, onChange, filterValue, filterKey }) => {

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");

    const token = getAuthToken();

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await fetch(endpoint, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();

                if (filterValue) {
                    const filteredOptions = data.filter(
                        (option) => option[filterKey] === filterValue
                    );
                    setOptions(filteredOptions);
                } else {
                    setOptions(data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchOptions();
    }, [endpoint, filterKey, filterValue, token]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        onChange(event.target.value);
    };

    return (
            <InputLabel
                style={{
                display: 'block',
                font: 'inherit'}}
                className="font15">
                {label}:
                <Select value={selectedOption} onChange={handleSelectChange}
                        style={{width: '100%',
                            display: 'block',
                            font: 'inherit'}}>
                    {options.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </InputLabel>
    );
}
