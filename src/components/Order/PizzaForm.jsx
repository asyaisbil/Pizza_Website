
import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function PizzaForm() {

    return (
        <Form>
            <FormGroup className="boyut">
                <h4>Boyut Seç</h4>
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
        </Form>
    )
}