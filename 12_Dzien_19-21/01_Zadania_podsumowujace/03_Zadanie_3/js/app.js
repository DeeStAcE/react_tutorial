import React, {useState} from "react";
import {createRoot} from "react-dom/client";

function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        address: '',
        postalCode: '',
        city: '',
    })
    const [errors, setErrors] = useState({})
    const [summary, setSummary] = useState("")

    const validateForm = () => {
        const newErrors = {};

        if (formData.name.length < 5) {
            newErrors.name = 'Imię i Nazwisko musi mieć co najmniej 5 znaków';
        }

        if (formData.email.length < 3 || !formData.email.includes('@')) {
            newErrors.email = 'Nieprawidłowy adres email';
        }

        if (formData.password.length < 4) {
            newErrors.password = 'Hasło musi mieć co najmniej 4 znaki';
        }

        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Hasła nie pasują do siebie';
        }

        if (!formData.gender) {
            newErrors.gender = 'Wybierz płeć';
        }

        if (formData.address.length < 3) {
            newErrors.address = 'Adres musi mieć co najmniej 3 znaki';
        }

        const postalCodeRegex = /^\d{2}(-\d{3})?$/;
        if (!postalCodeRegex.test(formData.postalCode)) {
            newErrors.postalCode = 'Nieprawidłowy kod pocztowy';
        }

        if (formData.city.length < 2) {
            newErrors.city = 'Miasto musi mieć co najmniej 2 znaki';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSummary('Rejestracja zakończona pomyślnie');
        } else {
            setSummary('');
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
    }

    return (
        <>
            <form>
                <h3>Dane osobowe</h3>
                <div>
                    <label>Imię i nazwisko:
                        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    </label>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <label>Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                    </label>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label>Hasło:
                        <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                    </label>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <label>Powtórz hasło:
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
                    </label>
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <div>
                    <label>Płeć:
                        <select value={formData.gender} name="gender" onChange={handleChange}>
                            <option value="">Wybierz</option>
                            <option value="male">Mężczyzna</option>
                            <option value="female">Kobieta</option>
                        </select>
                    </label>
                    {errors.gender && <p>{errors.gender}</p>}
                </div>
                <div>
                    <label>Adres:
                        <input type="text" name="address" value={formData.address} onChange={handleChange}/>
                    </label>
                    {errors.address && <p>{errors.address}</p>}
                </div>
                <div>
                    <label>Kod pocztowy:
                        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange}/>
                    </label>
                    {errors.postalCode && <p>{errors.postalCode}</p>}
                </div>
                <div>
                    <label>Miasto::
                        <input type="text" name="city" value={formData.city} onChange={handleChange}/>
                    </label>
                    {errors.city && <p>{errors.city}</p>}
                </div>
                <button onClick={handleSubmit}>Zapisz</button>
            </form>
            {summary && <div>{summary}</div>}
        </>
    )
}

function App() {
    return <Register/>
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);