import { Card } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Card className="text-center mt-5">
        <Card.Header>
          Thanks To Otoklix For The Opportunity That Has Been Given
        </Card.Header>
        <Card.Body>
          <Card.Title>
            "A program is never less than 90% complete, and never more than 95%
            complete."
          </Card.Title>
          <Card.Text>~ Terry Baker ~</Card.Text>
        </Card.Body>
        <Card.Footer>
          <p>Copyright &copy; 2022 Muhamad Ajie Darmawan</p>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Footer;
