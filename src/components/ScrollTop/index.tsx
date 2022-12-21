import { useCallback, useEffect, useState } from "react"

import { FaLongArrowAltUp } from 'react-icons/fa'

import styles from "styles/components/ScrollTop.module.css";

export default function ScrollTop() {
    const [pageYPosition, setPageYPosition ] = useState(0);

    const getPageYAfterScroll = useCallback(() => {
        setPageYPosition(window.scrollY);
    },[]);

    const getTopPage = useCallback(() => {
        window.scrollTo(0, 0);
    },[]);

    useEffect(() => {
        window.addEventListener('scroll', getPageYAfterScroll);
    })

    return (
        <>
            {pageYPosition > 900 && (
                <a className={styles.container} onClick={getTopPage}  >
                    <FaLongArrowAltUp className={styles.svg} />
                </a>
            )}
        </>
    )
}