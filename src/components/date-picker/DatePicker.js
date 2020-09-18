import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useFormikContext, Field } from 'formik';



const Datepicker = ({ name, value }) => {
    const { setFieldValue } = useFormikContext();
    return (
        <div>
            <Field
                as={DatePicker}
                type="date"
                className="form-control"
                name={name}
                selected={value}
                onChange={date => setFieldValue(name, date.toString('MM/dd/yyyy'))} />
        </div>
    );
};
// testing jhjh
export default Datepicker;