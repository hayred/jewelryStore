import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn, Select1, Upload1 } from "../components/Form";

function addItems() {
  // Setting our component's initial state
  const [formObject, setFormObject] = useState({});
  // Load all books and store them with setBooks


  // Deletes a book from the database with a given id, then reloads books from the db

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.description && formObject.category ) {
      API.saveItem({
        category: formObject.category,
        name: formObject.name,
        description: formObject.description,
        price: formObject.price,
        quantity: formObject.quantity,
        photo: formObject.photo
      })
        .then(res => 
          formObject.name = "Name required" )
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-9">
            <Jumbotron>
              <h1>Add Product</h1>
            </Jumbotron>
            <form>
              <Select1  onChange={handleInputChange}
              name="category">
                <option></option>
                <option value="rings">Rings</option>
                <option value="chains">Chains</option>
                <option value="necklaces">Necklaces</option>
                <option value="earrings">Earrings</option>
                <option value="bracelets">Bracelets</option>
                <option value="watches">Watches</option>
                
              </Select1>
              <Upload1
              onChange={handleInputChange}
              name="photo"
              placeholder="Select a Photo" 
              />
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="price"
                placeholder="Price"
              />
              <Input
                onChange={handleInputChange}
                name="description"
                placeholder="Description"
              />
              <Input
                onChange={handleInputChange}
                name="quantity"
                placeholder="Quantity"
              />
              <FormBtn
                onClick={handleFormSubmit}
              >
                Save Item
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }


export default addItems;