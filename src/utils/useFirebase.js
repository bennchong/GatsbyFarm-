import { useEffect, useState } from 'react';
import getFirebase from './firebase'; // import our getFirebase function

export default function useFirebase() {
    const [instance, setInstance] = useState(getFirebase().firebase_);

    useEffect(() => {
        setInstance(getFirebase().firebase_);
    }, []);

    return instance;
}