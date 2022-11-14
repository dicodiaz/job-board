import { FunctionComponent } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export type JobType = {
  slug: string;
  company_name: string;
  title: string;
  description: string;
  remote: boolean;
  url: string;
  tags: string[];
  job_types: string[];
  location: string;
  created_at: number;
};

type JobProps = {
  data: JobType;
};

// {
//   slug: 'strategy-business-development-manager-sales-focus-in-the-field-of-ai-satellite-data-liveeo-gmbh-berlin-germany-429690',
//   company_name: 'LiveEO GmbH',
//   title:
//     'Strategy & Business Development Manager - Sales Focus (f/m/x) in the field of AI & Satellite Data',
//   description:
//     'asdf',
//   remote: false,
//   url: 'https://www.arbeitnow.com/view/strategy-business-development-manager-sales-focus-in-the-field-of-ai-satellite-data-liveeo-gmbh-berlin-germany-429690',
//   tags: ['Computer software', 'business and strategic development'],
//   job_types: ['Experienced', 'permanent', 'full time'],
//   location: 'Berlin',
//   created_at: 1663511344,
// }

const Job: FunctionComponent<JobProps> = ({ data }) => {
  const { company_name, title } = data;

  return (
    <Card>
      <Row>
        <Col xs={3}>
          <Card.Img src="holder.js/100px160" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Subtitle className="">{company_name}</Card.Subtitle>
            <Card.Title className="">{title}</Card.Title>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Job;
