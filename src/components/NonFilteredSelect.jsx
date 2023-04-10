import {useEffect, useState} from "react";
import {useRouteLoaderData} from "react-router-dom";
import {InputLabel, Select, MenuItem} from "@mui/material";

export const SelectComponent = ({ endpoint, label, onChange }) => {

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");

    const token = useRouteLoaderData('root');

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await fetch(endpoint, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setOptions(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOptions();
    }, [endpoint, token]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        onChange(event.target.value);
    };


    return (
            <InputLabel
                style={{
                    display: 'block',
                    font: 'inherit'}}>
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
