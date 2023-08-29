// fetch(url, {
// headers: {
//   'Content-Type': 'application/json',
// }
// })
import React, {useState, useEffect} from 'react';

function AddCar() {

    const initialCar = {
        name: "",
        brand: "",
        engine: {
            type: "",
            hp: 0
        }
    }

    const [newCar, setNewCar] = useState(initialCar)

    const handleChange = (e) => {
        const {name, value} = e.target
        setNewCar({
            ...newCar,
            [name]: value,
        })
    }

    const handleAddNewCar = (e) => {
        e.preventDefault()
        console.log(newCar)

        useEffect(() => {
            (async () => {
                const res = await fetch(`http://localhost:3000/cars`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
            })()

        }, []);

        setNewCar(initialCar)
    }

    return (
        <>
            <form>
                <div>
                    <label>Nazwa
                        <input type="text" name="name" value={newCar.name} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>Marka
                        <input type="text" name="brand" value={newCar.brand} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>Typ silnika
                        <select value={newCar.engine.type}
                                onChange={(e) => setNewCar({
                                    ...newCar,
                                    engine: {...newCar.engine, type: e.target.value}
                                })}>
                            <option value="">Wybierz</option>
                            <option value="petrol">Petrol</option>
                            <option value="electric">Electric</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>Moc silnika
                        <input type="number" name="hp" value={newCar.engine.hp}
                               onChange={(e) => setNewCar({
                                   ...newCar,
                                   engine: {...newCar.engine, hp: parseInt(e.target.value)}
                               })}/>
                    </label>
                </div>
                <button onClick={handleAddNewCar}>Dodaj auto</button>
            </form>
        </>
    )
}

export default AddCar;