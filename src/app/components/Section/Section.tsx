import classNames from 'classnames';
import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

type Props = {
  children: ReactNode;
  className?: string;
};

function Section({ children, className }: Props) {
  return (
    <section className={classNames('section', className)}>
      <Container className="py-4" fluid="lg">
        {children}
      </Container>
    </section>
  );
}

export default Section;
