import PropTypes from 'prop-types';
import { Container } from './ContainerFilter.styled';

function ContainerFilter({ children }) {
  return <Container>{children}</Container>;
}

ContainerFilter.propTypes = {
  children: PropTypes.node,
};

export default ContainerFilter;
