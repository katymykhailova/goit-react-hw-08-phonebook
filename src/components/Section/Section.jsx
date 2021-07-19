import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styled';

function Section({ children, title }) {
  return (
    <SectionContainer>
      <h1>{title}</h1>
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;
