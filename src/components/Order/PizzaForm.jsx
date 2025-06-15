
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default function PizzaForm() {

    const malzemeler = [
        "Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk",
        "Kanada Jambonu", "Ananas", "Tavuk Izgara", "Jalepeno",
        "Soğan", "Sarımsak", "Kabak"
    ]

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
                <FormGroup className="malzeme-secim">
                    {malzemeler.map((i) => (
                        <Label>
                            <input type="checkbox" value={i} className="malzeme-item"
                            />{i}
                        </Label>
                    ))}
                </FormGroup>
            </FormGroup>

        </Form>
    )
}