import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Items() {
    const [items, setItems] = useState ([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadItems()
    }, [])

    function loadItems() {
        API.getItems()
        .then(res => 
            setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>What Item would you like to add?</h1>
                    </Jumbotron>
                    <form>
                        <Input 
                        onChange={() => {}}
                        name="name"
                        placeholder="Item Name (required)"
                        />
                        <Input 
                        onChange={() => {}}
                        name="description"
                        placeholder="Item Description (required)"
                        />
                        <Input 
                        onChange={() => {}}
                        name="price"
                        placeholder="Item Price (required)"
                        />

                        <Input 
                        onChange={() => {}}
                        name="quantity"
                        placeholder="Items Quantity(required)"
                        />
                        <FormBtn
                          disabled={!(formObject.name && formObject.description)}
                          onClick={() => {}}
                          >
                              Save Item
                        </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Items;

