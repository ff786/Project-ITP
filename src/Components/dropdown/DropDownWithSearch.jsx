import React, { useState } from 'react';

function DropdownWithSearch({ options, onSelect }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = option => {
        onSelect(option);
        setIsOpen(false);
        setSearchTerm(option);
    };

    const handleOpen = () => {
        setIsOpen(true);
        setSearchTerm('');
    }

    return (
        <div className="dropdown">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onClick={handleOpen}
            />
            {isOpen && (
                <div className="dropdown-menu">
                    {filteredOptions.map((option, index) => (
                        <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropdownWithSearch;
