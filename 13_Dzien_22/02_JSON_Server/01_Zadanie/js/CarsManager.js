import React, {useState, useEffect} from 'react';

function CarsManager() {

    const [cars, setCars] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3000/cars')
            const data = await res.json();

            setCars(data);
        })();
    }, []);

    const sellCar = async (id) => {
        const res = await fetch(`http://localhost:3000/cars/${id}`, {
            method: 'DELETE'
        });

        if (res.ok) {
            setCars(prevCars => prevCars.filter(car => car.id !== id));
        }
    }

    return (
        <div>
            {
                !cars && <strong>Ładowanie danych...</strong>
            }
            <ul>
                {
                    cars && cars.map(({id, name, brand, engine: {type, hp}}) => {
                        return (
                            <li key={id}>
                                Marka {brand} <br/>
                                Model {name} <br/>
                                Silnik:
                                Typ: {type} &nbsp;
                                Moc: {hp} <br/>
                                <button onClick={() => sellCar(id)}>Sprzedany</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default CarsManager;