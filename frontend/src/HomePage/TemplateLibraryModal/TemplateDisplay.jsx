import React from 'react';
import { Container, Row, Badge } from 'react-bootstrap';

export default function TemplateDisplay(props) {
  const { id, name, description, sources } = props?.app ?? {};
  return (
    <div className="template-display">
      <Container fluid className="pt-2">
        <Row style={{ height: '10%' }}>
          <h3 className="title">{name}</h3>
          <p className="description">{description}</p>
          <span>
            {sources?.map((source) => (
              <Badge
                className="me-2"
                variant="primary"
                key={source.id}
                style={{
                  backgroundColor: '#D2DDEC',
                  color: 'black',
                  width: 'auto',
                  height: 30,
                  fontWeight: 400,
                  textTransform: 'none',
                }}
              >
                <div className="d-flex py-2">
                  <div
                    className="d-flex flex-rows align-items-center justify-content-center"
                    style={{ backgroundColor: 'white', borderRadius: 20, height: 20, width: 20 }}
                  >
                    <img
                      src={`/assets/images/icons/editor/datasources/${source.id}.svg`}
                      style={{ width: 14, height: 14 }}
                    />
                  </div>
                  <div className="d-flex flex-rows align-items-center ms-1">{source.name}</div>
                </div>
              </Badge>
            ))}
          </span>
        </Row>
        <Row className="align-items-center justify-content-center" style={{ height: '88%' }}>
          <img className="template-image" src={`/assets/images/templates/${id}${props.darkMode ? '-dark' : ''}.png`} />
        </Row>
      </Container>
    </div>
  );
}
