
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Checkbox from "./Checkbox";

export default function PizzaForm() {
    const [formData, setFormData] = useState({
        boyut: "",
        hamur: "",
        malzemeler: []
    })

    const malzemeler = [
        "Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk",
        "Kanada Jambonu", "Ananas", "Tavuk Izgara", "Jalepeno",
        "Soğan", "Sarımsak", "Kabak"
    ]

    let newValue;

    const handleChange = (event) => {
        const { name, value, type } = event.target;

        if (type === "checkbox") {
            const oldValues = formData[name];

            if (oldValues.includes(value)) {
                newValue = oldValues.filter((v) => v !== value);
            } else {
                if (oldValues.length >= 10) return;
                newValue = [...oldValues, value];
            }


            setFormData((prev) => ({
                ...prev,
                [name]: newValue
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };



    return (
        <Form>
            <div className="secim">
                <FormGroup className="boyut">
                    <Label className="label">Boyut Seç</Label>
                    <div className="boyut-cevap">
                        <Label>
                            <input type="radio" name="boyut" value="Küçük" />
                            Küçük
                        </Label>
                        <Label>
                            <input type="radio" name="boyut" value="Orta" />
                            Orta
                        </Label>
                        <Label>
                            <input type="radio" name="boyut" value="Büyük" />
                            Büyük
                        </Label>
                    </div>
                </FormGroup>
                <FormGroup className="hamur">
                    <Label className="label" for="hamur">Hamur Seç</Label>
                    <Input type="select" name="hamur" id="hamur">
                        <option value="">Hamur Kalınlığı</option>
                        <option value="İnce">İnce</option>
                        <option value="Normal">Normal</option>
                        <option value="Kalın">Kalın</option>
                    </Input>
                </FormGroup>
            </div>
            <FormGroup className="malzemeler">
                <Label className="malzeme-baslik">Ek Malzemeler</Label>
                <FormText className="malzeme-info">En fazla 10 malzeme seçebilirsiniz. 5₺</FormText>
                <div className="malzeme-secim">
                    {malzemeler.map((item) => (
                        <Checkbox key={item} label={item} name="malzemeler" value={item} isChecked={formData.i.includes({ value })} handleChange={handleChange} />
                    ))}
                </div>
            </FormGroup>

        </Form >
    )
}