import {useEffect, useState} from "react";
import {useRouteLoaderData} from "react-router-dom";

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
