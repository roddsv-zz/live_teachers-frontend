import { useEffect, useState } from 'react';
import './styles.css';
import Instructions from './Instructions';
import TeachersList from './TeachersList';
import { Teacher } from './types';
import { fetchTeachers } from '../api';

function Classes(){
    
    const[teachers, setTeachers] = useState<Teacher[]>([]);
    console.log(teachers);

    useEffect(() => {
        fetchTeachers()
            .then(response => setTeachers(response.data))
            .catch(error => console.log(error))
    }, []);

    return(
        <div className="classes-container">
            <Instructions />
            <TeachersList teachers={teachers}/>
        </div>
    )
}

export default Classes;