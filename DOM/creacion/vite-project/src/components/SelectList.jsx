export const SelectList = ({ tittle }) => {

    const key = `select-${tittle}`;
    const label = tittle.toUpperCase();
    const options = ["Palmira", "Cali", "Yumbo"];

    return (
        <>
            <label className="Label-select" htmlFor={key}>{label}</label>
            <select name={key} id={key}>
                <option value="">Seleccione un {tittle}</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </>
    );
};
