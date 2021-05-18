import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { set } from "mongoose";

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
    // API.getItems()
    //   .then(res => 
    //     setItems(res.data)
    //   )
    //   .catch(err => console.log(err));
  };
  
  function handleInputChange (event) {
    const {name, value} = event.target;
    setFormObject({...formObject, [name]: value})
  }

  function formSubmit(event){
    event.preventDefault();
    API.saveItem({
      name: formObject.name,
      price: formObject.price,
      description: formObject.description,
      quantity: formObject.quantity
    }).then(result => {
      loadItems();
    }).catch(err => {
      console.log(err)
    });
  }


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Product</h1>
            </Jumbotron>
            <form >
              <label for='name of product'/>
              <Input
                onChange= {handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              <Input
                onChange={handleInputChange}
                name="price"
                placeholder="Price (Optional)"
              />
                <Input
                onChange={handleInputChange}
                name="quantity"
                placeholder="Quantity (Optional)"
              />
              <FormBtn
               disabled={!(formObject.name && formObject.description)}   
                onClick={formSubmit}
              >
                Save Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Products Available</h1>
            </Jumbotron>
            {items ? (
              <List>
                {items?.map(item => {
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
