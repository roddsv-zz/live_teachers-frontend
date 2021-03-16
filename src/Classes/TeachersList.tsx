import TeacherCard from './TeacherCard';
import { Teacher } from './types';

type Props = {
    teachers: Teacher[];
    
}
function TeachersList({ teachers }: Props){
    return(
        <div className="classes-list-container">
            <div className="classes-list-item">
                {teachers.map(teacher => (
                    <TeacherCard key={teacher.id} teacher=  {teacher}/>
                ))}
            </div>
        </div>
    )
}

export default TeachersList;