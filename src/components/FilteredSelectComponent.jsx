import {useEffect, useState} from "react";
import {getAuthToken} from "../util/Auth";

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
        <div>
            <label>
                {label}:
                <select value={selectedOption} onChange={handleSelectChange}>
                    {options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}
