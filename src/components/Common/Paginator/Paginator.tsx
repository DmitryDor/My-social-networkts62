import React, {useState} from "react";
import styles from './Paginator.module.css'


type PropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}


export const Paginator = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let[portionNumber, setPortionNumber] = useState<number>(1)

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize +1  // номер порции(1-я десятка = 1 и тд.)
    let rightPortionPageNumber = portionNumber * props.portionSize


    return (
        <div className={styles.paginator}>
            {
                portionNumber > 1 &&
                    <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {

                    return <span className={props.currentPage === p ? `${styles.coursor && styles.selectedPage}`: `'' ${styles.coursor} `}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                    > { p } </span>
                })
            }
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }
        </div>
    )
}


