import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Items() {
  // Setting our component's initial state
  const [items, setItems] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadItems()
  }, [])

  // Loads all books and sets them to books
  function loadItems() {
    API.getItems()
      .then(res => 
        setItems(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteItem(id) {
    API.deleteItem(id)
      .then(res => loadItems())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.description ) {
      API.saveItem({
        name: formObject.name,
        description: formObject.description,
        price: formObject.price,
        quantity: formObject.quantity
      })
        .then(res => loadItems())
        .catch(err => console.log(err));
    }
  };

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
                name="description"
                placeholder="Description"
              />
              <Input
                onChange={handleInputChange}
                name="price"
                placeholder="Price"
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
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Items Available</h1>
            </Jumbotron>
            {items.length ? (
              <List>
                {items.map(item => (
                  <ListItem key={item._id}>
                    <Link to={"/items/" + item._id}>
                      <strong>
                        {item.name} by {item.description}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteItem(item._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Items;
