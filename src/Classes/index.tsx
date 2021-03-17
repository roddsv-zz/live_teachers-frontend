import { useEffect, useState } from 'react';
import './styles.css';
import Instructions from './Instructions';
import TeachersList from './TeachersList';
import { Teacher } from './types';
import { fetchTeachers } from '../api';
import ClassSummary from './ClassSummary';
import Footer from './../Footer/index';
import { checkIsSelected } from './helpers';
import { isTemplateTail } from 'typescript';
import { toast } from 'react-toastify';
import { saveClass } from '../api';

function Classes() {

    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [selectedTeachers, setSelectedTeachers] = useState<Teacher[]>([]);
    console.log(teachers);
    const totalPrice = selectedTeachers.reduce((sum, item) => {
        return sum + item.hourPrice;
    }, 0);

    useEffect(() => {
        fetchTeachers()
            .then(response => setTeachers(response.data))
            .catch(error => console.log(error))
    }, []);


    const handleSelectTeacher = (teacher: Teacher) => {
        const isAlreadySelected = checkIsSelected(selectedTeachers, teacher);

        if (isAlreadySelected) {
            const selected = selectedTeachers.filter(item => item.id !== teacher.id);
            setSelectedTeachers(selected);
        } else {
            setSelectedTeachers(previous => [...previous, teacher]);
        }
    }

    const handleSubmit = () => {
        const teachersIds = selectedTeachers.map(({ id }) => ({ id }));
        const payload = {
          teachers: teachersIds
        }
      
        saveClass(payload).then(() => {
          toast.info('Aula salva com sucesso!');
          setSelectedTeachers([]);
        })
          .catch(() => {
            toast.warning('Erro ao salvar dados de aula');
          })
      }

    return (
        <>
            <div className="classes-container">
                <Instructions />
                <h1 className="choose-teacher-title">ESCOLHA SEU PROFESSOR</h1>
                <TeachersList teachers={teachers}
                    onSelectTeacher={handleSelectTeacher}
                    selectedTeachers={selectedTeachers}
                />
                <ClassSummary amount={selectedTeachers.length} 
                totalPrice={totalPrice}
                onSubmit={handleSubmit}/>
            </div>
            <Footer />
        </>
    )
}

export default Classes;