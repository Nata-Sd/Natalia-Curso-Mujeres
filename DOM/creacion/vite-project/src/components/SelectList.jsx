export const SelectList =({tittle}) => {

    const key = 'select-${tittle}'
    const label = tittle.toUpperCase();
    const options = [ "Cund", "Anti", "Cald"];
    
    return(
        <label className="Label-select" htmlFor={key}> {label} </label>
        
    )
}