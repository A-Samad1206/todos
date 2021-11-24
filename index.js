import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
const index = () => {
  return (
    <Container>
      <Row>
        <MyCol
          sm={12}
          md={6}
          lg={4}
          xl={3}
          p={4}
          className="p-4 border border-4"
        />
        <MyCol
          sm={12}
          md={6}
          lg={4}
          xl={3}
          p={4}
          className="p-4 border border-4"
        />
        <MyCol
          sm={12}
          md={6}
          lg={4}
          xl={3}
          p={4}
          className="p-4 border border-4"
        />
        <MyCol
          sm={12}
          md={6}
          lg={4}
          xl={3}
          p={4}
          className="p-4 border border-4"
        />
        <MyCol
          sm={12}
          md={6}
          lg={4}
          xl={3}
          p={4}
          className="p-4 border border-4"
        />
      </Row>
    </Container>
  );
};
const MyCol = (props) => {
  return (
    <Col {...props}>
      lorem Sint aute voluptate qui mollit commodo. Lorem ullamco occaecat
      aliquip ipsum exercitation duis amet sunt veniam culpa proident. In
      aliquip deserunt mollit dolore commodo. Laborum dolor aliquip labore ex
      do. Veniam commodo occaecat sunt adipisicing enim. Eiusmod incididunt elit
      Lorem cillum qui. Cillum incididunt nostrud ipsum ullamco laborum esse
      nisi officia ex. Excepteur sint cillum ex id eu aute cupidatat aliqua anim
      eiusmod.
    </Col>
  );
};
export default index;
