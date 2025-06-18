
import React from "react"
import { Label, Input } from "reactstrap";

export default function Checkbox({ label, name, value, isChecked, handleChange }) {

    return (
        <Label className="ek-malzeme">
            <Input
                type="checkbox"
                name={name}
                value={value}
                checked={isChecked}
                onChange={handleChange}
            />
            {label}
        </Label>

    )
}