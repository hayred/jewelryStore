import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Items() {
  // Setting our component's initial state
  const [items, setItems] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all book and store them with setBooks
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


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Product</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={() => {}}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                onChange={() => {}}
                name="description"
                placeholder="Description (required)"
              />
              <Input
                onChange={() => {}}
                name="price"
                placeholder="Price (Optional)"
              />
                <Input
                onChange={() => {}}
                name="quantity"
                placeholder="Quantity (Optional)"
              />
              <FormBtn
               // disabled={!(formObject.name && formObject.description)}   
                onClick={() => {}}
              >
                Save Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Products Available</h1>
            </Jumbotron>
            {items.length ? (
              <List>
                {items.map(item => {
                  return (
                    <ListItem key={item._id}>
                      <a href={"/items/" + item._id}>
                        <strong>
                          {item.name} by {item.description}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() =>{}} />
                    </ListItem>
                  );
                })}
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
