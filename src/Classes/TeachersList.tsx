import { checkIsSelected } from './helpers';
import TeacherCard from './TeacherCard';
import { Teacher } from './types';

type Props = {
    teachers: Teacher[];
    selectedTeachers: Teacher[];
    onSelectTeacher: (teacher: Teacher) => void;
    
}
function TeachersList({ teachers, selectedTeachers, onSelectTeacher}: Props){
    return(
        <div className="classes-list-container">
            <div className="classes-list-item">
                {teachers.map(teacher => (
                    <TeacherCard 
                        key={teacher.id}
                        teacher={teacher}
                        onSelectTeacher={onSelectTeacher}
                        isSelected={checkIsSelected(selectedTeachers, teacher)}
                        />
                ))}
            </div>
        </div>
    )
}

export default TeachersList;