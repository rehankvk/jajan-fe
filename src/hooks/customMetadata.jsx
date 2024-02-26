// useDocumentTitle.js
import { useEffect } from 'react';

export default function customTitle(title) {
    useEffect(() => {
        document.title = title + ' ' + '|' + ' ' + 'Hans Store';
    }, [title]);
}
