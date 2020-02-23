import React, {useState} from 'react';
import "./categories.scss"
import {Dropdown} from "react-bootstrap";
import uuid from "uuid/v4";

const Categories = () => {
    const [selected, setSelected] = useState<string>("food");
    const [categories, setCategories] = useState<string[]>(["household", "transport"]);

    const clicked = (value: string) => {
        if(value !== selected){
            let array = [...categories];
            let index = array.indexOf(value);
            array.splice(index, 1);
            array.push(selected);
            setCategories(array);
            setSelected(value)
        }
    };
    return (
        <div className="categories">
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    {selected}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {categories.map(value => (<Dropdown.Item onClick={() => clicked(value)} key={uuid()} href="#/">{value}</Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Categories;