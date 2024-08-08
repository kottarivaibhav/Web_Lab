import React from "react";
 // Ensure this matches the actual file name and export
function Button({ label, onClick }){
    
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}

const App = () => {
    const handleClick = (label) => {
        alert(`Button ${label} was clicked`);
    };

    return (
        <div>
            <Button label="Button 1" onClick={() => (handleClick('1'))} />
            <Button label="Button 2" onClick={() => handleClick('2')} />
            <Button label="Button 3" onClick={() => handleClick('3')} />
        </div>
    );
};

export default App;
