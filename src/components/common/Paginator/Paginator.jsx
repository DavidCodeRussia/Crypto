import React, { useState } from "react";
import cn from "classnames";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import styles from "./Paginator.module.scss";

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize); // кол-во страниц

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = pagesCount / portionSize; // portionSize - кол-во кнопок которое видно на экране | portionCount - кол-во порций
  let [portionNumber, setPortionNumber] = useState(1); // portionNumber - текущий номер страницы
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; // portionSize - кол-во кнопок которое видно на экране
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.pagination}>
      {portionNumber > 1 && (
        <div className={styles.buttonPagin}>
          <Stack>
            <Button
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
              variant="contained"
            >
              PREVIOUS
            </Button>
          </Stack>
        </div>
      )}

      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <span
              className={cn(styles.pageNumber, { [styles.selectedPage]: currentPage === p })}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}

      {portionCount > portionNumber && (
        // <button onClick={ () => {setPortionNumber(portionNumber + 1)} } className={styles.buttonPagin}>NEXT</button>
        <div className={styles.buttonPagin}>
          <Stack>
            <Button
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}
              variant="contained"
            >
              NEXT
            </Button>
          </Stack>
        </div>
      )}
    </div>
  );
};

export default Paginator;
