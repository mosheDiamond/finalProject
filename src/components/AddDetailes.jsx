import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import { useRef, useState } from "react";
import { useCurrenUserInfo } from '../Context/CurrenUserInfoContext'
import { createAvatar } from '@dicebear/core';
import * as funEmoji  from '@dicebear/fun-emoji';


export default function AddDetailes() {
  const PnameRef = useRef();
  const SnameRef = useRef();
  const [NumOfChildren, setNumOfChildren] = useState(0);
  const nameRef = useRef();
  const ageRef = useRef();
  const [childrenFormState, setChildrenFormState] = useState([]);
  const [form, setForm] = useState([]);
  const { setCurrenUserInfoState } = useCurrenUserInfo();

  async function handleSubmit(e) {
    e.preventDefault();


    const UsersDetailes = {
      pName: PnameRef.current.value,
      sName: SnameRef.current.value,
      numOfChildren: NumOfChildren,
      childrensInfo: (NumOfChildren > 0)? [...childrenFormState,
      {
        name: nameRef.current.value,
        age: ageRef.current.value,
        milestones: {
          "sixWeeksToThree": {
            jyrx6457: "unknown",
            opjbuv234: "unknown",
            yhbolk836: "unknown",
            pzuysj610: "unknown",
          },
          "threeMonthsToSix": {
            qrbxlf0396: "unknown",
            pzqmtco03g: "unknown",
            gpgwhc9jb: "unknown",
            pmo94n9fn: "unknown",
            b7x5zuib: "unknown",
            yb7c4x30m: "unknown",
            vusdtww45ed: "unknown",
          },
          "sixMonthsToNine": {
            evd72hsod: "unknown",
            u3l6j9n: "unknown",
            spdn658rhx: "unknown",
            nxid73gds6w: "unknown",
          },
          "nineMonthsToTwelve": {
            nmso03jf41: "unknown",
            b827xnajs42: "unknown",
            nvm9mes43: "unknown",
            vtx5s4in44: "unknown",
            alzmcjo45: "unknown",
            tyrhejkw46: "unknown",
            nc834nc3m2op47: "unknown",
            nx74z29qir48: "unknown",
            xe4ynjd5g49: "unknown",
            omxcrw410: "unknown",
          },
          "twelveMonthsToEighteen": {
            nc44nc51: "unknown",
            pabdhy47h52: "unknown",
            vuddy73n53: "unknown",
            pxmfh84b54: "unknown",
            m9n7v6md55: "unknown",
            pwxmeu7d7d56: "unknown",
            zmuugwko57: "unknown",
          },
          "eighteenMonthsToTwentyfour": {
            mkoi89076y61: "unknown",
            mfnbkj62: "unknown",
            hvbvfi787df63: "unknown",
            zxfej980hf64: "unknown",
            yutrgv65: "unknown",
            hbhbcij66: "unknown",
            pojjgh67: "unknown",
            pppmlp68: "unknown",
            ppp990jh69: "unknown",
          },
          "twoYearsToThree": {
            yyy67676u71: "unknown",
            llll99996po72: "unknown",
            pp55opo73: "unknown",
            i432iiw74: "unknown",
            dghfy67571k75: "unknown",
            beycge64t64gf76: "unknown",
            zy8l90dy6k77: "unknown",
            ytuir78463q78: "unknown",
          },
          "threeYearsToFour": {
            p0l736yet81: "unknown",
            udhf7rt47k82: "unknown",
            mosh626ys83: "unknown",
            pilo86yvd84: "unknown",
            udhberb7ut85: "unknown",
          },
          "fourYearsToFive": {
            tnt50779eoj76n91: "unknown",
            try5r7zz92: "unknown",
            idfgurhg7478488kjk93: "unknown",
            opjr948hfurf94: "unknown",
            nifgnbiudbuy7ry95: "unknown",
            difgiud97dfbh96: "unknown",
            egergiuyg97: "unknown",
            jbdsfiuegiuug98: "unknown",
          },
          "fiveYearsToSix": {
            ubycex473b101: "unknown",
            nv7ncv347t102: "unknown",
            n8n4c7mp103: "unknown",
            vst2vxj104: "unknown",
            nd8dnx105: "unknown",
            n7zm3wrs106: "unknown",
            q9dnml107: "unknown",
          }
        }
      }

      ]:[]
    };
    setCurrenUserInfoState(UsersDetailes);
    console.log(UsersDetailes);
  }

  function UpdateChildDetails() {
    if (NumOfChildren > 0) {
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
                <Button onClick={() => AddChild()} className="w-100 mt-2">
                  הוסף ילד
                </Button>

                <Button className="w-100 mt-5" type="submit">
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
