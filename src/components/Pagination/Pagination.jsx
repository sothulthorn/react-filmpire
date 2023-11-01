import React from 'react';
import {
  Container,
  PrevButton,
  NextButton,
  PageNumber,
} from './Pagination.styles';

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <Container>
      <PrevButton
        onClick={handlePrev}
        variant="contained"
        color="primary"
        type="button"
      >
        Prev
      </PrevButton>
      <PageNumber variant="h4">{currentPage}</PageNumber>
      <NextButton
        onClick={handleNext}
        variant="contained"
        color="primary"
        type="button"
      >
        Next
      </NextButton>
    </Container>
  );
};

export default Pagination;
