import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { useRef, useState } from "react";
import {useCurrenUserInfo} from '../Context/CurrenUserInfoContext'

export default function AddDetailes() {
  const PnameRef = useRef();
  const SnameRef = useRef();
  const [NumOfChildren, setNumOfChildren] = useState(0);
  const nameRef = useRef();
  const ageRef = useRef();
  const [childrenFormState, setChildrenFormState] = useState([]);
  const [form, setForm] = useState([]);
const {setCurrenUserInfoState}=useCurrenUserInfo();

   function handleSubmit(e) {
    e.preventDefault();



     const UsersDetailes = {
      pName: PnameRef.current.value,
      sName: SnameRef.current.value,
      numOfChildren: NumOfChildren,
      childrensInfo: [...childrenFormState,
        {
          name: nameRef.current.value,
          age: ageRef.current.value
        }

      ]
    };
    setCurrenUserInfoState(UsersDetailes);
    console.log(UsersDetailes);
  }

 function UpdateChildDetails(){
     if(NumOfChildren>0){
        console.log("hi this is us")
     setChildrenFormState([
        ...childrenFormState,
        {
          name: nameRef.current.value,
          age: ageRef.current.value
        }

      ]);
    }

 }



  function AddChild() {

    UpdateChildDetails();
    setNumOfChildren(NumOfChildren + 1)
    setForm([
      ...form,
      <>
          <Form.Group id="chiledName">
            <Form.Label>שם הילד</Form.Label>
            <Form.Control type="string" ref={nameRef} required />
          </Form.Group>
          <Form.Group id="chiledsAge">
            <Form.Label> גיל הילד</Form.Label>
            <Form.Control type="number" ref={ageRef} required />
          </Form.Group>


      </>
    ]);
  }


  return (
    <>
      <Container
        dir="rtl"
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="pname">
                  <Form.Label>שם פרטי</Form.Label>
                  <Form.Control type="string" ref={PnameRef} required />
                </Form.Group>
                <Form.Group id="sname">
                  <Form.Label>שם משפחה</Form.Label>
                  <Form.Control type="string" ref={SnameRef} required />
                </Form.Group>
                {form.map((item) => item)}
                <Button onClick={()=>AddChild()} className="w-100 mt-2">
                  הוסף ילד
                </Button>

                <Button  className="w-100 mt-5" type="submit">
                  המשך{" "}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
