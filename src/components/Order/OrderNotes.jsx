
import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default function OrderNotes({ handleChange, name, note }) {
    return (
        <Form className="notlar">
            <FormGroup className="name" style={{ textAlign: "left", width: "40vw", margin: "0 auto", fontFamily: "Barlow", fontWeight: 700 }}>
                <Label for="name">
                    Adınız
                </Label>
                <Input id="name" name="name" minLength={3} type="text" value={name} onChange={handleChange}></Input>
            </FormGroup>
            <FormGroup className="not" style={{ textAlign: "left", width: "40vw", margin: "0 auto", fontFamily: "Barlow", fontWeight: 700 }}>
                <Label for="not">
                    Sipariş Notu
                </Label>
                <Input id="not" name="not" minLength={3} type="textarea" value={note} onChange={handleChange}></Input>
            </FormGroup>
        </Form>
    )
}