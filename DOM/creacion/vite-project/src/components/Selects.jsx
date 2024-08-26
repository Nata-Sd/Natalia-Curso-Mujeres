import { SelectList } from "./SelectList";
import './Selects/List.css';

export const Selects = () => {
    return (
        <div className="selects-container">
            <SelectList tittle="Estado" />
            <SelectList tittle="Ciudad" />
            <SelectList tittle="Municipio" />
        </div>
    );
};
