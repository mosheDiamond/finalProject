import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { useRef, useState } from "react";
import { useCurrenUserInfo } from "../Context/CurrenUserInfoContext";
import { MdPersonRemove } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { uuid4 } from "uuid4";

export default function AddDetailes() {
  const PnameRef = useRef();
  const SnameRef = useRef();
  const [NumOfChildren, setNumOfChildren] = useState(0);
  const nameRef = useRef();
  const ageRef = useRef();
  const [childrenFormState, setChildrenFormState] = useState([]);
  const [childsForm, setChildsForm] = useState([]);
  const { setCurrenUserInfoState } = useCurrenUserInfo();


  function handleSubmit(e) {
    e.preventDefault();

    const UsersDetailes = {
      pName: PnameRef.current.value,
      sName: SnameRef.current.value,
      numOfChildren: NumOfChildren,
      childrensInfo: [
        ...childrenFormState,
        {
          name: nameRef.current.value,
          age: ageRef.current.value,
        },
      ],
    };
    setCurrenUserInfoState(UsersDetailes);
    console.log(UsersDetailes);
  }

  function UpdateChildDetails() {
    if (NumOfChildren > 0) {
      setChildrenFormState([
        ...childrenFormState,
        {
          name: nameRef.current.value,
          age: ageRef.current.value,
        },
      ]);
    }
  }
  function removeChield(index) {
    console.log(index);
    const updatedForm = [...childsForm];
    updatedForm.splice(index,1);
        setChildsForm(updatedForm);

        const updatedChildrenForm = [...childrenFormState];
        updatedChildrenForm.splice(index,1);
        setChildrenFormState(updatedChildrenForm);

    if (NumOfChildren > 0) {
      setNumOfChildren(NumOfChildren - 1);
    }
  }

  function AddChild() {

    UpdateChildDetails();
    setNumOfChildren(NumOfChildren + 1);
    setChildsForm([
      ...childsForm,
       <div>
        <Form.Group id="chiledName">
          <Form.Label>שם הילד</Form.Label>
          <Form.Control type="string" ref={nameRef} required />
        </Form.Group>
        <Form.Group id="chiledsAge">
          <Form.Label> גיל הילד</Form.Label>
          <Form.Control type="number" ref={ageRef} required />
        </Form.Group>
      </div>
    ]);
console.log(childsForm);
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
                {
                  childsForm.map((item,i) => { return (<div> {item} <MdPersonRemove className="right curser" onClick={()=>removeChield(i)} />
</div>) })}

                <Button
                  className="w-100 mt-5 bg-dark-blue"
                  onClick={() => AddChild()}
                >
                  הוסף ילד
                </Button>

                <Button className="w-100 mt-5 bg-dark-blue" type="submit">
                  המשך
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
