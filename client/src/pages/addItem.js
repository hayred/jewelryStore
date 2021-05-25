import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn, Select1 } from "../components/Form";

function AddItems() {
  // Setting our component's initial state
  const [items, setItems] = useState([]);
  const [formObject, setFormObject] = useState({});
  // Load all books and store them with setBooks
  useEffect(() => {
    loadItems();
  }, []);

  // Loads all books and sets them to books
  function loadItems() {
    API.getItems()
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteItem(id) {
    API.deleteItem(id)
      .then((res) => loadItems())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
<<<<<<< HEAD
    if (formObject.name && formObject.description) {
=======
    if (formObject.name && formObject.description && formObject.category ) {
>>>>>>> 21922cfbd025d53a33f50909ab85fd2701999e2b
      API.saveItem({
        category: formObject.category,
        name: formObject.name,
        description: formObject.description,
        price: formObject.price,
        quantity: formObject.quantity,
      })
        .then((res) => (formObject.name = "Name required"))
        .catch((err) => console.log(err));
    }
<<<<<<< HEAD
=======
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Product</h1>
            </Jumbotron>
            <form>
              <Select1  onChange={handleInputChange}
              name="category">
                <option></option>
                <option value="rings">Rings</option>
                <option value="necklaces">Necklaces</option>
                <option value="earrings">Earrings</option>
                <option value="bracelets">Bracelets</option>
                <option value="watches">Watches</option>
                
              </Select1>
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
>>>>>>> 21922cfbd025d53a33f50909ab85fd2701999e2b
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Add Product</h1>
          </Jumbotron>
          <form>
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
            <FormBtn onClick={handleFormSubmit}>Save Item</FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddItems;
